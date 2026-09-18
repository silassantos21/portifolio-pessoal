import { NextResponse } from "next/server";
import type { Project } from "@/types/project";

export const revalidate = 3600;

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  language: string | null;
  topics: string[];
  fork: boolean;
}

export async function GET() {
  const username = process.env.GITHUB_USERNAME;

  if (!username) {
    return NextResponse.json(
      { error: "GITHUB_USERNAME não configurado." },
      { status: 500 }
    );
  }

  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
    {
      headers,
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: "Não foi possível buscar os repositórios do GitHub." },
      { status: response.status }
    );
  }

  const repos = (await response.json()) as GitHubRepo[];

  const projects: Project[] = repos
    .filter((repo) => !repo.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6)
    .map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      demoUrl: repo.homepage || null,
      stars: repo.stargazers_count,
      language: repo.language,
      topics: repo.topics,
    }));

  return NextResponse.json(projects);
}
