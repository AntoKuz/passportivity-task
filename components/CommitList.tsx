'use client';

import { Commit } from '@/lib/types';
import CommitItem from './CommitItem';

interface CommitListProps {
  commits: Commit[];
}

export default function CommitList({ commits }: CommitListProps) {
  return (
    <div className="space-y-4">
      {commits.map((commit) => (
        <CommitItem key={commit.sha} commit={commit} />
      ))}
    </div>
  );
}

