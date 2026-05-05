export type Repository = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  fork: boolean;
  stargazers_count: number;
  updated_at: string;
};

/**
 * FETCH SERVICE: This is the 'Brain' that talks to GitHub.
 * It fetches your repositories and filters them so only the best work is shown.
 */
export async function getGithubRepos(username: string): Promise<Repository[]> {
  try {
    // We use a GitHub Token to avoid being blocked (Rate Limiting)
    const token = process.env.GITHUB_TOKEN;
    
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`, {
      headers: token ? { Authorization: `token ${token}` } : {},
      next: { revalidate: 3600 } // Auto-refresh every hour (ISR)
    });

    if (!response.ok) throw new Error("Failed to fetch GitHub repos");

    const data: Repository[] = await response.json();
    
    // FILTER LOGIC:
    // We only want projects that are NOT forks.
    return data.filter(repo => !repo.fork);
  } catch (error) {
    console.error("GitHub Sync Error:", error);
    return [];
  }
}
