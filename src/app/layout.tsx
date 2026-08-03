import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.scss";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://subhom.dev"),
  title: "Subhom Kundu — Senior Full Stack Engineer",
  description:
    "Senior Full Stack Engineer in Dublin specialising in React, TypeScript, accessible UI, design systems, and scalable product engineering.",
  keywords: [
    "Subhom Kundu",
    "Senior Full Stack Engineer",
    "React developer Dublin",
    "TypeScript engineer",
    "accessible UI",
    "Carbon Design System contributor",
  ],
  authors: [{ name: "Subhom Kundu", url: "https://subhom.dev" }],
  creator: "Subhom Kundu",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://subhom.dev",
    siteName: "Subhom Kundu",
    title: "Subhom Kundu — Senior Full Stack Engineer",
    description:
      "I build trusted systems and thoughtful interfaces with React, TypeScript, and accessible design systems.",
  },
  twitter: {
    card: "summary",
    title: "Subhom Kundu — Senior Full Stack Engineer",
    description:
      "React, TypeScript, accessible UI, design systems, and full-stack product engineering.",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#090a0c" },
    { media: "(prefers-color-scheme: light)", color: "#f4f2eb" },
  ],
};

const themeScript = `
  (function () {
    try {
      var savedTheme = window.localStorage.getItem('subhom-theme');
      var systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
      var theme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : systemTheme;
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
    } catch (_) {
      document.documentElement.dataset.theme = 'dark';
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
