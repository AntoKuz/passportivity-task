import { Octokit } from 'octokit';
import { Commit, Branch } from './types';

const octokit = new Octokit({ 
  auth: process.env.GITHUB_TOKEN 
});

const OWNER = 'AntoKuz';
const REPO = 'passportivity-task';

export async function getBranches(): Promise<Branch[]> {
  try {
    const { data } = await octokit.rest.repos.listBranches({
      owner: OWNER,
      repo: REPO,
      per_page: 100
    });
    return data;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    throw new Error(`Failed to fetch branches: ${errorMessage}`);
  }
}

export async function getCommits(branch: string): Promise<Commit[]> {
  try {
    const { data } = await octokit.rest.repos.listCommits({
      owner: OWNER,
      repo: REPO,
      sha: branch,
      per_page: 5
    });
    return data as Commit[];
  } catch (error) {
    if (error && typeof error === 'object' && 'status' in error) {
      const status = (error as { status: number }).status;
      if (status === 403) {
        throw new Error('Rate limit exceeded. Please try again later.');
      }
      if (status === 404) {
        throw new Error('Repository or branch not found.');
      }
    }
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    throw new Error(`Failed to fetch commits: ${errorMessage}`);
  }
}

export async function getDefaultBranch(): Promise<string> {
  try {
    const { data } = await octokit.rest.repos.get({
      owner: OWNER,
      repo: REPO
    });
    return data.default_branch;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    throw new Error(`Failed to fetch default branch: ${errorMessage}`);
  }
}
