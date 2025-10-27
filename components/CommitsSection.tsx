'use client';

import { useState } from 'react';
import { Commit } from '@/lib/types';
import CommitList from './CommitList';
import { refreshCommitsData } from '@/app/actions';
import RefreshCommitsForm from './RefreshCommitsForm';
import CommitSkeleton from './CommitSkeleton';

interface CommitsSectionProps {
  initialCommits: Commit[];
  defaultBranch: string;
}

export default function CommitsSection({ initialCommits, defaultBranch }: CommitsSectionProps) {
  const [commits, setCommits] = useState(initialCommits);
  const [isRefreshing, setIsRefreshing] = useState(false);

  async function handleRefresh() {
    const newCommits = await refreshCommitsData(defaultBranch);
    setCommits(newCommits);
  }

  function handlePendingChange(isPending: boolean) {
    setIsRefreshing(isPending);
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-semibold text-slate-700 dark:text-slate-300">Recent Commits ({commits.length})</h3>
        <div className="w-full sm:w-auto">
          <RefreshCommitsForm onRefresh={handleRefresh} onPendingChange={handlePendingChange} />
        </div>
      </div>
      {isRefreshing ? (
        <div className="space-y-3 sm:space-y-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} style={{ animationDelay: `${index * 50}ms` }}>
              <CommitSkeleton />
            </div>
          ))}
        </div>
      ) : (
        <CommitList commits={commits} />
      )}
    </div>
  );
}

