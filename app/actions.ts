'use server';

import { getCommits, getBranches } from '@/lib/github';
import { Commit, Branch } from '@/lib/types';

export async function refreshCommits(branch: string): Promise<Commit[]> {
  try {
    return await getCommits(branch);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    throw new Error(`Failed to refresh commits: ${errorMessage}`);
  }
}

export async function getBranchList(): Promise<Branch[]> {
  try {
    return await getBranches();
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    throw new Error(`Failed to get branch list: ${errorMessage}`);
  }
}

