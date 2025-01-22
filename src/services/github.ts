// services/github.ts
import { Project } from '../types';

export class GitHubService {
  private baseUrl = 'https://api.github.com';
  private token: string | null = null;

  setToken(token: string) {
    this.token = token;
  }

  private async fetchWithAuth(url: string, options: RequestInit = {}) {
    const headers = new Headers(options.headers);
    if (this.token) {
      headers.set('Authorization', `Bearer ${this.token}`);
    }
    headers.set('Accept', 'application/vnd.github.v3+json');

    const response = await fetch(`${this.baseUrl}${url}`, {
      ...options,
      headers
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    return response.json();
  }

  async searchProjects(query: string): Promise<Project[]> {
    const response = await this.fetchWithAuth(`/search/repositories?q=${encodeURIComponent(query)}`);
    
    return response.items.map((item: { id: any; full_name: any; description: any; contributors_count: any; }) => ({
      id: item.id,
      name: item.full_name,
      description: item.description,
      contributors: item.contributors_count
    }));
  }

  async getProjectDetails(owner: string, repo: string) {
    return this.fetchWithAuth(`/repos/${owner}/${repo}`);
  }

  async getContributingGuidelines(owner: string, repo: string) {
    try {
      return await this.fetchWithAuth(`/repos/${owner}/${repo}/contents/CONTRIBUTING.md`);
    } catch {
      return null;
    }
  }
}