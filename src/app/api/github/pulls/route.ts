import { NextResponse } from "next/server";

const GITHUB_API_URL = "https://api.github.com/search/issues";
const GITHUB_USERNAME = "Subhom1";
const GITHUB_REPOSITORY = "carbon-design-system/carbon";
const REFRESH_INTERVAL_SECONDS = 300;
const RECENT_PULL_REQUEST_COUNT = 6;

type GitHubLabel = {
  name?: string;
};

type GitHubSearchItem = {
  created_at: string;
  html_url: string;
  labels: GitHubLabel[];
  number: number;
  pull_request?: {
    merged_at: string | null;
  };
  state: "open" | "closed";
  title: string;
  updated_at: string;
};

type GitHubSearchResponse = {
  incomplete_results: boolean;
  items: GitHubSearchItem[];
  total_count: number;
};

const githubHeaders = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  ...(process.env.GITHUB_TOKEN
    ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    : {}),
};

function createSearchUrl(query: string, perPage: number) {
  const url = new URL(GITHUB_API_URL);
  url.searchParams.set("q", query);
  url.searchParams.set("sort", "created");
  url.searchParams.set("order", "desc");
  url.searchParams.set("per_page", String(perPage));
  return url;
}

async function searchPullRequests(query: string, perPage: number) {
  const response = await fetch(createSearchUrl(query, perPage), {
    headers: githubHeaders,
    next: { revalidate: REFRESH_INTERVAL_SECONDS },
  });

  if (!response.ok) {
    throw new Error(`GitHub search failed with status ${response.status}`);
  }

  return (await response.json()) as GitHubSearchResponse;
}

export async function GET() {
  const baseQuery = `repo:${GITHUB_REPOSITORY} is:pr author:${GITHUB_USERNAME}`;

  try {
    const [recent, open, merged] = await Promise.all([
      searchPullRequests(baseQuery, RECENT_PULL_REQUEST_COUNT),
      searchPullRequests(`${baseQuery} is:open`, 1),
      searchPullRequests(`${baseQuery} is:merged`, 1),
    ]);

    return NextResponse.json(
      {
        stats: {
          authored: recent.total_count,
          merged: merged.total_count,
          open: open.total_count,
        },
        pullRequests: recent.items.map((pullRequest) => ({
          createdAt: pullRequest.created_at,
          href: pullRequest.html_url,
          labels: pullRequest.labels
            .map((label) => label.name)
            .filter((label): label is string => Boolean(label))
            .slice(0, 2),
          number: pullRequest.number,
          state: pullRequest.pull_request?.merged_at
            ? "merged"
            : pullRequest.state,
          title: pullRequest.title,
          updatedAt: pullRequest.updated_at,
        })),
        updatedAt: new Date().toISOString(),
      },
      {
        headers: {
          "Cache-Control":
            "public, s-maxage=300, stale-while-revalidate=3600",
        },
      },
    );
  } catch (error) {
    console.error("Unable to load Carbon pull requests from GitHub", error);

    return NextResponse.json(
      { error: "GitHub pull requests are temporarily unavailable." },
      { status: 502 },
    );
  }
}
