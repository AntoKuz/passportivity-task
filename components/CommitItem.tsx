'use client';

import { Commit } from '@/lib/types';
import RelativeTime from './RelativeTime';

interface CommitItemProps {
  commit: Commit;
}

export default function CommitItem({ commit }: CommitItemProps) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <p className="font-medium text-gray-800 mb-2">{commit.commit.message}</p>
      <div className="flex items-center gap-4 text-sm text-gray-600">
        {commit.author && (
          <div className="flex items-center gap-2">
            <img 
              src={commit.author.avatar_url} 
              alt={commit.author.login}
              className="w-6 h-6 rounded-full"
            />
            <span>{commit.author.login}</span>
          </div>
        )}
        <RelativeTime date={commit.commit.author?.date || ''} />
        <a 
          href={commit.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {commit.sha.substring(0, 7)}
        </a>
      </div>
    </div>
  );
}

