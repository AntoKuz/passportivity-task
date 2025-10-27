'use client';

import { useState } from 'react';
import { Commit } from '@/lib/types';
import CommitList from './CommitList';
import { refreshCommitsData } from '@/app/actions';
import RefreshCommitsForm from './RefreshCommitsForm';

interface CommitsSectionProps {
  initialCommits: Commit[];
  defaultBranch: string;
}

export default function CommitsSection({ initialCommits, defaultBranch }: CommitsSectionProps) {
  const [commits, setCommits] = useState(initialCommits);

  async function handleRefresh() {
    const newCommits = await refreshCommitsData(defaultBranch);
    setCommits(newCommits);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-700">Recent Commits ({commits.length})</h3>
        <RefreshCommitsForm onRefresh={handleRefresh} />
      </div>
      <CommitList commits={commits} />
    </div>
  );
}

