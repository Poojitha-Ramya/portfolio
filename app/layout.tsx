import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chipurupalli Poojitha Ramya — AI/ML & Full Stack Developer",
  description:
    "Portfolio of Poojitha Ramya — AI/ML Engineer & Full Stack Developer specializing in LLMs, deep learning, and production web applications.",
  openGraph: {
    title: "Poojitha Ramya — AI/ML Developer",
    description:
      "Building intelligent systems at the intersection of deep learning, LLMs, and full-stack applications.",
    type: "website",
  },
  keywords: [
    "AI",
    "ML",
    "Full Stack Developer",
    "React",
    "FastAPI",
    "Python",
    "Deep Learning",
    "LLM",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
