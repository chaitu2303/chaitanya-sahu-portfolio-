export type Repository = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  fork: boolean;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  language: string;
};

export async function getGithubRepos(username: string): Promise<Repository[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`, {
      next: { revalidate: 3600 }
    });

    if (!response.ok) throw new Error("Failed to fetch GitHub repos");

    const data: Repository[] = await response.json();
    return data.filter(repo => !repo.fork).sort((a, b) => b.stargazers_count - a.stargazers_count);
  } catch (error) {
    console.error("GitHub Sync Error:", error);
    return [];
  }
}
