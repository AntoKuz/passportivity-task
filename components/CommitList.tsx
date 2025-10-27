'use client';

import { Commit } from '@/lib/types';
import CommitItem from './CommitItem';

interface CommitListProps {
  commits: Commit[];
}

export default function CommitList({ commits }: CommitListProps) {
  if (commits.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-700 mb-4">
          <svg className="w-8 h-8 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">No commits yet</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">This branch doesn't have any commits.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3 sm:space-y-4">
      {commits.map((commit, index) => (
        <div key={commit.sha} style={{ animationDelay: `${index * 50}ms` }}>
          <CommitItem commit={commit} />
        </div>
      ))}
    </div>
  );
}

