"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import portrait from "/public/static/media/profile-pic.png";

type IconProps = {
  size?: number;
};

const ArrowUpRight = ({ size = 18 }: IconProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
  >
    <path
      d="M7 17 17 7M8 7h9v9"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  </svg>
);

const Download = ({ size = 18 }: IconProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
  >
    <path
      d="M12 3v12m0 0 4-4m-4 4-4-4M5 20h14"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  </svg>
);

const Sun = ({ size = 18 }: IconProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
  >
    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.7" />
    <path
      d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.7"
    />
  </svg>
);

const Moon = ({ size = 18 }: IconProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
  >
    <path
      d="M20 15.2A8.5 8.5 0 0 1 8.8 4 8.5 8.5 0 1 0 20 15.2Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    />
  </svg>
);

const Menu = ({ size = 18 }: IconProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
  >
    <path
      d="M4 7h16M4 12h16M4 17h16"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
    />
  </svg>
);

const Close = ({ size = 18 }: IconProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
  >
    <path
      d="m6 6 12 12M18 6 6 18"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
    />
  </svg>
);

const experiences = [
  {
    company: "IBM Carbon Design System & freelance",
    role: "Open-source contributor / Full Stack Developer",
    period: "2024 — Present",
    summary:
      "Contributing production fixes, accessibility improvements, tests, and component enhancements to IBM’s enterprise design system while leading full-stack delivery for client products.",
    highlights: [
      "Authored Carbon pull requests spanning React, Web Components, Sass, testing, and WCAG.",
      "Leading Essence Isle with Next.js, TypeScript, NestJS, Supabase, reusable UI patterns, and scalable APIs.",
    ],
  },
  {
    company: "Capgemini Technologies India Ltd · HSBC",
    role: "Senior Frontend Engineer",
    period: "May 2021 — Jan 2023",
    summary:
      "Modernised regulated financial platforms with React and TypeScript, delivering accessible component systems and complex Redux-Saga workflows for applications serving thousands of users.",
    highlights: [
      "Improved frontend API responsiveness by 40% and reduced UI latency by 25%.",
      "Led reviews, mentoring, test automation, and cross-team delivery in Agile Scrum environments.",
    ],
  },
  {
    company: "Mass Software Solutions Pvt Ltd",
    role: "Frontend Developer",
    period: "Oct 2019 — May 2021",
    summary:
      "Built responsive React and Angular products for Irish schools within microservice architectures, collaborating closely with design, backend, and product teams.",
    highlights: [
      "Removed 25% of duplicated frontend code through reusable Storybook component systems.",
      "Improved dashboard performance by 30% and operational accuracy by 35%.",
    ],
  },
  {
    company: "Teks Mobile Pvt Ltd",
    role: "Web Developer Intern",
    period: "Jun 2019 — Sep 2019",
    summary:
      "Built responsive dashboards and automated data workflows for the iProud platform, pairing frontend delivery with debugging, SQL optimisation, and usability improvements.",
    highlights: [],
  },
];

const projects = [
  {
    index: "01",
    name: "Essence Isle",
    type: "AI-powered fragrance SaaS",
    description:
      "A modern fragrance discovery platform built as a scalable full-stack product with accessible interfaces and a reusable design language.",
    tools: ["Next.js", "TypeScript", "NestJS", "Supabase"],
    link: "https://essenceisle.com",
    linkLabel: "Visit product",
    accent: "lime",
  },
  {
    index: "02",
    name: "ProvePlay",
    type: "Full-stack gaming platform",
    description:
      "A data-driven product with wallet management, responsive game interfaces, API integrations, and real-time history tracking.",
    tools: ["React", "FastAPI", "MongoDB", "Radix UI"],
    link: "https://prove-play.vercel.app",
    linkLabel: "View live",
    source: "https://github.com/Subhom1/ProvePlay",
    accent: "coral",
  },
  {
    index: "03",
    name: "SimplyBlog",
    type: "Publishing platform",
    description:
      "A full-stack monorepo with secure authentication, Supabase PostgreSQL, and reusable TypeScript UI components.",
    tools: ["Next.js", "TypeScript", "Supabase", "Firebase"],
    link: "https://simply-blog-olive.vercel.app",
    linkLabel: "View live",
    source: "https://github.com/Subhom1/simply-blog",
    accent: "blue",
  },
  {
    index: "04",
    name: "ClickMate",
    type: "Cross-platform social app",
    description:
      "A React Native application with secure authentication, real-time Socket.io messaging, and responsive Android and iOS experiences.",
    tools: ["React Native", "Express", "MongoDB", "Socket.io"],
    link: "https://github.com/Subhom1/clickmate",
    linkLabel: "View frontend",
    source: "https://github.com/Subhom1/clickmate-backend",
    accent: "violet",
  },
];

type CarbonPullRequest = {
  createdAt: string;
  href: string;
  labels: string[];
  number: number;
  state: "open" | "closed" | "merged";
  title: string;
  updatedAt: string;
};

type CarbonPullRequestData = {
  pullRequests: CarbonPullRequest[];
  stats: {
    authored: number;
    merged: number;
    open: number;
  };
  updatedAt: string;
};

const fallbackCarbonPullRequests: CarbonPullRequest[] = [
  {
    createdAt: "2026-08-02T10:45:41Z",
    number: 22865,
    title: "fix(NumberInput): add Storybook controls",
    labels: [],
    href: "https://github.com/carbon-design-system/carbon/pull/22865",
    state: "open",
    updatedAt: "2026-08-02T11:00:12Z",
  },
  {
    createdAt: "2026-08-02T10:26:18Z",
    number: 22864,
    title: "fix(Notifications): add Storybook controls",
    labels: [],
    href: "https://github.com/carbon-design-system/carbon/pull/22864",
    state: "open",
    updatedAt: "2026-08-02T10:42:24Z",
  },
  {
    createdAt: "2026-08-02T01:48:17Z",
    number: 22863,
    title: "fix(MenuButton): add Storybook controls",
    labels: [],
    href: "https://github.com/carbon-design-system/carbon/pull/22863",
    state: "open",
    updatedAt: "2026-08-02T02:06:53Z",
  },
  {
    createdAt: "2026-08-02T01:22:44Z",
    number: 22862,
    title: "fix(Loading): add Storybook controls",
    labels: [],
    href: "https://github.com/carbon-design-system/carbon/pull/22862",
    state: "open",
    updatedAt: "2026-08-02T01:37:48Z",
  },
  {
    createdAt: "2026-08-02T01:19:32Z",
    number: 22861,
    title: "fix(Layer): add Storybook controls",
    labels: [],
    href: "https://github.com/carbon-design-system/carbon/pull/22861",
    state: "open",
    updatedAt: "2026-08-02T01:34:39Z",
  },
  {
    createdAt: "2026-08-02T01:09:14Z",
    number: 22860,
    title: "fix(IdPrefix): add Storybook controls",
    labels: [],
    href: "https://github.com/carbon-design-system/carbon/pull/22860",
    state: "open",
    updatedAt: "2026-08-02T01:24:31Z",
  },
];

const fallbackCarbonData: CarbonPullRequestData = {
  pullRequests: fallbackCarbonPullRequests,
  stats: {
    authored: 78,
    merged: 27,
    open: 48,
  },
  updatedAt: "2026-08-03T11:23:26Z",
};

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-IE", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));

const formatDateTime = (date: string) =>
  new Intl.DateTimeFormat("en-IE", {
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));

const skillGroups = [
  {
    title: "Frontend architecture",
    skills: [
      "React",
      "Angular",
      "Next.js",
      "TypeScript",
      "Design systems",
      "Storybook",
    ],
  },
  {
    title: "State & data",
    skills: [
      "Redux Toolkit",
      "Redux Saga",
      "Zustand",
      "React Query",
      "GraphQL",
      "REST APIs",
    ],
  },
  {
    title: "Quality & accessibility",
    skills: [
      "WCAG",
      "Jest",
      "Testing Library",
      "Cypress",
      "Playwright",
      "Vitest",
    ],
  },
  {
    title: "Backend & cloud",
    skills: [
      "Node.js",
      "NestJS",
      "Express",
      "MongoDB",
      "Supabase",
      "AWS",
      "GCP",
    ],
  },
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Subhom Kundu",
  url: "https://subhom.dev",
  jobTitle: "Senior Full Stack Engineer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dublin",
    addressCountry: "Ireland",
  },
  sameAs: [
    "https://github.com/Subhom1",
    "https://linkedin.com/in/subhom",
    "https://www.instagram.com/_subhom_/",
  ],
  knowsAbout: [
    "React",
    "TypeScript",
    "Accessible user interfaces",
    "Design systems",
    "Full-stack development",
  ],
};

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [carbonData, setCarbonData] =
    useState<CarbonPullRequestData>(fallbackCarbonData);
  const [githubStatus, setGithubStatus] = useState<
    "loading" | "live" | "unavailable"
  >("loading");

  useEffect(() => {
    const activeTheme = document.documentElement.dataset.theme;
    setTheme(activeTheme === "light" ? "light" : "dark");
  }, []);

  useEffect(() => {
    let active = true;

    const loadCarbonPullRequests = async () => {
      try {
        const response = await fetch("/api/github/pulls");

        if (!response.ok) {
          throw new Error(`GitHub API route returned ${response.status}`);
        }

        const data = (await response.json()) as CarbonPullRequestData;

        if (active) {
          setCarbonData(data);
          setGithubStatus("live");
        }
      } catch (error) {
        console.error("Unable to refresh Carbon pull requests", error);

        if (active) {
          setGithubStatus("unavailable");
        }
      }
    };

    loadCarbonPullRequests();
    const refreshTimer = window.setInterval(loadCarbonPullRequests, 300_000);

    return () => {
      active = false;
      window.clearInterval(refreshTimer);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    window.localStorage.setItem("subhom-theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <nav aria-label="Main navigation" className="nav-shell">
          <a aria-label="Subhom Kundu, home" className="brand-mark" href="#top">
            SK<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#open-source">Open source</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
          </div>

          <div className="nav-actions">
            <span className="availability">
              <span aria-hidden="true" className="availability-dot" />
              Dublin, IE
            </span>
            <button
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              className="icon-button"
              onClick={toggleTheme}
              type="button"
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </button>
            <button
              aria-controls="mobile-navigation"
              aria-expanded={menuOpen}
              aria-label={`${menuOpen ? "Close" : "Open"} navigation menu`}
              className="icon-button menu-button"
              onClick={() => setMenuOpen((open) => !open)}
              type="button"
            >
              {menuOpen ? <Close /> : <Menu />}
            </button>
            <a
              aria-label="Email Subhom"
              className="nav-contact"
              href="mailto:subhomkundu@gmail.com"
            >
              Let&apos;s talk
              <ArrowUpRight />
            </a>
          </div>
        </nav>
        <div
          className={`mobile-navigation${menuOpen ? " is-open" : ""}`}
          id="mobile-navigation"
        >
          <a href="#work" onClick={() => setMenuOpen(false)}>
            Work
          </a>
          <a href="#open-source" onClick={() => setMenuOpen(false)}>
            Open source
          </a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>
            Experience
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a
            href="mailto:subhomkundu@gmail.com"
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s talk <ArrowUpRight size={16} />
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className="hero section" id="top">
          <div aria-hidden="true" className="hero-grid-lines" />
          <div className="hero-layout">
            <div className="hero-copy">
              <p className="eyebrow reveal reveal-1">
                <span>Senior Full Stack Engineer</span>
                <span aria-hidden="true">/</span>
                <span>5+ years</span>
              </p>
              <h1 className="reveal reveal-2">
                I build systems people trust
                <span className="hero-accent">and interfaces they enjoy.</span>
              </h1>
              <p className="hero-intro reveal reveal-3">
                I&apos;m Subhom, a React and TypeScript engineer in Dublin. I
                turn complex product requirements into fast, accessible, and
                thoughtfully crafted digital experiences.
              </p>
              <div className="hero-actions reveal reveal-4">
                <a className="button button-primary" href="#work">
                  Explore my work
                  <ArrowUpRight />
                </a>
                <a
                  className="button button-secondary"
                  href="/Subhom_Senior_Fullstack_Developer_Lt.pdf"
                  target="_blank"
                >
                  Read my CV
                  <Download />
                </a>
              </div>
              <p className="work-status reveal reveal-4">
                <span aria-hidden="true" className="status-pulse" />
                Eligible to work full-time in Ireland without sponsorship
              </p>
            </div>

            <div className="portrait-wrap reveal reveal-3">
              <div className="portrait-card">
                <div aria-hidden="true" className="portrait-halo" />
                <Image
                  alt="Subhom Kundu, Senior Full Stack Engineer"
                  className="portrait-image"
                  placeholder="blur"
                  priority
                  sizes="(max-width: 767px) 90vw, (max-width: 1100px) 46vw, 500px"
                  src={portrait}
                />
                <div className="portrait-caption">
                  <span>Based in</span>
                  <strong>Dublin · 53.35° N</strong>
                </div>
                <span aria-hidden="true" className="portrait-code">
                  01 / PORTRAIT
                </span>
              </div>
            </div>
          </div>

          <div className="hero-metrics">
            <div>
              <strong>5+</strong>
              <span>Years building for the web</span>
            </div>
            <div>
              <strong>{carbonData.stats.authored}</strong>
              <span>Carbon pull requests authored</span>
            </div>
            <div>
              <strong>40%</strong>
              <span>Faster frontend API response</span>
            </div>
            <div>
              <strong>1.1</strong>
              <span>MSc Computing grade</span>
            </div>
          </div>
        </section>

        <section className="section section-border" id="work">
          <div className="section-heading">
            <p className="section-kicker">01 · Selected work</p>
            <h2>Products with purpose, built end to end.</h2>
            <p>
              From product strategy to polished interface and production API, I
              care about the whole experience.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article
                className={`project-card project-${project.accent}`}
                key={project.name}
              >
                <div className="project-topline">
                  <span>{project.index}</span>
                  <span>{project.type}</span>
                </div>
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
                <div
                  className="tag-list"
                  aria-label={`${project.name} technologies`}
                >
                  {project.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.link} rel="noreferrer" target="_blank">
                    {project.linkLabel}
                    <ArrowUpRight />
                  </a>
                  {project.source && (
                    <a href={project.source} rel="noreferrer" target="_blank">
                      Source
                      <ArrowUpRight />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-border" id="open-source">
          <div className="carbon-panel">
            <div className="carbon-intro">
              <p className="section-kicker">02 · Open source</p>
              <h2>Shipping into IBM&apos;s Carbon Design System.</h2>
              <p>
                I contribute beyond the happy path: accessibility semantics,
                touch-safe interactions, component architecture, tests, Sass,
                and developer experience across React and Web Components.
              </p>
              <a
                className="text-link"
                href="https://github.com/carbon-design-system/carbon/pulls/Subhom1"
                rel="noreferrer"
                target="_blank"
              >
                See every Carbon PR
                <ArrowUpRight />
              </a>
            </div>

            <div
              className="carbon-stats"
              aria-label="Carbon contribution statistics"
            >
              <div>
                <strong>{carbonData.stats.authored}</strong>
                <span>Authored</span>
              </div>
              <div>
                <strong>{carbonData.stats.merged}</strong>
                <span>Merged</span>
              </div>
              <div>
                <strong>{carbonData.stats.open}</strong>
                <span>Open</span>
              </div>
            </div>

            <div className="pr-list">
              {carbonData.pullRequests.map((pullRequest) => (
                <a
                  className="pr-card"
                  href={pullRequest.href}
                  key={pullRequest.number}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="pr-number">#{pullRequest.number}</span>
                  <span className="pr-copy">
                    <strong>{pullRequest.title}</strong>
                    <small>
                      <span
                        className={`pr-state pr-state-${pullRequest.state}`}
                      >
                        {pullRequest.state}
                      </span>
                      {pullRequest.labels.length > 0 && (
                        <span>{pullRequest.labels.join(" · ")}</span>
                      )}
                      <span>Updated {formatDate(pullRequest.updatedAt)}</span>
                    </small>
                  </span>
                  <ArrowUpRight />
                </a>
              ))}
            </div>
            <p
              aria-live="polite"
              className={`snapshot-note snapshot-${githubStatus}`}
            >
              <span aria-hidden="true" className="github-status-dot" />
              {githubStatus === "loading" && "Connecting to GitHub…"}
              {githubStatus === "live" &&
                `Live GitHub data · refreshed ${formatDateTime(carbonData.updatedAt)}`}
              {githubStatus === "unavailable" &&
                `GitHub unavailable · showing the ${formatDate(carbonData.updatedAt)} snapshot`}
            </p>
          </div>
        </section>

        <section className="section section-border" id="experience">
          <div className="section-heading section-heading-split">
            <div>
              <p className="section-kicker">03 · Experience</p>
              <h2>Progress measured in outcomes.</h2>
            </div>
            <p>
              Enterprise discipline, startup pace, and a consistent focus on
              accessible, reusable engineering.
            </p>
          </div>

          <div className="timeline">
            {experiences.map((experience, index) => (
              <article className="timeline-item" key={experience.company}>
                <div className="timeline-index">0{index + 1}</div>
                <div className="timeline-role">
                  <p>{experience.period}</p>
                  <h3>{experience.role}</h3>
                  <span>{experience.company}</span>
                </div>
                <div className="timeline-detail">
                  <p>{experience.summary}</p>
                  {experience.highlights.length > 0 && (
                    <ul>
                      {experience.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-border" id="expertise">
          <div className="section-heading section-heading-split">
            <div>
              <p className="section-kicker">04 · Toolkit</p>
              <h2>Deep frontend craft. Full-stack range.</h2>
            </div>
            <p>
              I choose technology for the problem, then create conventions that
              help teams move with confidence.
            </p>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-group" key={group.title}>
                <span>0{index + 1}</span>
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div
            className="tool-rail"
            aria-label="Additional tools and practices"
          >
            <span>CI/CD</span>
            <span>GitHub Actions</span>
            <span>Docker</span>
            <span>Figma</span>
            <span>Agile Scrum</span>
            <span>React Native</span>
            <span>AI-assisted development</span>
          </div>
        </section>

        <section className="section section-border" id="about">
          <div className="section-heading">
            <p className="section-kicker">05 · Beyond the code</p>
            <h2>Curious by default. Particular about the details.</h2>
          </div>

          <div className="about-grid">
            <article className="about-card about-main">
              <p className="about-lead">
                I&apos;m a full-stack engineer who thinks great software should
                feel clear before it feels clever.
              </p>
              <p>
                Dublin is home, accessibility is part of the definition of done,
                and collaboration is how the best ideas get sharper. I enjoy
                translating between product, design, and engineering until
                everyone can see the same solution.
              </p>
              <div className="about-links">
                <a
                  href="https://github.com/Subhom1"
                  rel="noreferrer"
                  target="_blank"
                >
                  GitHub <ArrowUpRight />
                </a>
                <a
                  href="https://linkedin.com/in/subhom"
                  rel="noreferrer"
                  target="_blank"
                >
                  LinkedIn <ArrowUpRight />
                </a>
                <a
                  href="https://www.instagram.com/_subhom_/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Instagram · @_subhom_ <ArrowUpRight />
                </a>
              </div>
            </article>

            <article className="about-card scent-card">
              <div className="scent-visual" aria-hidden="true">
                <span className="scent-cap" />
                <span className="scent-bottle">
                  <span>SK</span>
                </span>
                <span className="scent-shadow" />
              </div>
              <div className="scent-copy">
                <span className="mini-label">Current side quest</span>
                <h3>Fragrance, notes & the stories inside every bottle.</h3>
                <p>
                  Perfume is my favourite kind of invisible design: layered,
                  memorable, and deeply personal.
                </p>
              </div>
            </article>

            <article className="about-card education-card">
              <span className="mini-label">Education</span>
              <div>
                <p>2023 — 2024</p>
                <h3>MSc Computing · Grade 1.1</h3>
                <span>Griffith College Dublin</span>
              </div>
              <div>
                <p>2014 — 2018</p>
                <h3>BTech · Computer Science</h3>
                <span>West Bengal University of Technology</span>
              </div>
            </article>

            <article className="about-card certificate-card">
              <span className="mini-label">Certifications</span>
              <p>Meta · Introduction to Frontend Development</p>
              <p>Secure Code Warrior · React White Belt</p>
            </article>
          </div>
        </section>

        <section
          className="section contact-section section-border"
          id="contact"
        >
          <div className="contact-panel">
            <p className="section-kicker">06 · Start a conversation</p>
            <h2>Have a complex product that should feel simple?</h2>
            <a className="contact-email" href="mailto:subhomkundu@gmail.com">
              subhomkundu@gmail.com
              <ArrowUpRight size={28} />
            </a>
            <div className="contact-meta">
              <span>Dublin, Ireland</span>
              <span>Open to senior frontend & full-stack opportunities</span>
              <span>Usually replies within 24–48 hours</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <a className="brand-mark" href="#top">
            SK<span>.</span>
          </a>
          <p>
            Designed and built with care, curiosity, and an unreasonable
            attention to spacing.
          </p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/Subhom1" rel="noreferrer" target="_blank">
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/subhom"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/_subhom_/"
            rel="noreferrer"
            target="_blank"
          >
            Instagram
          </a>
          <a href="#top">Back to top ↑</a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Subhom Kundu</p>
      </footer>

      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        type="application/ld+json"
      />
    </div>
  );
}
