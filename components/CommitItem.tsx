'use client';

import { Commit } from '@/lib/types';
import RelativeTime from './RelativeTime';

interface CommitItemProps {
  commit: Commit;
}

export default function CommitItem({ commit }: CommitItemProps) {
  return (
    <div className="group relative bg-gradient-to-br from-white to-slate-50 rounded-xl p-5 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-200 overflow-hidden">
      <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div>
        <p className="font-medium text-slate-800 mb-4 leading-relaxed">
          {commit.commit.message.split('\n')[0]}
        </p>
        
        <div className="flex flex-wrap items-center gap-4 text-sm">
          {commit.author && (
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg border border-slate-200 hover:border-blue-300 transition-colors">
              <img 
                src={commit.author.avatar_url} 
                alt={commit.author.login}
                className="w-5 h-5 rounded-full ring-2 ring-slate-100"
              />
              <span className="font-medium text-slate-700">{commit.author.login}</span>
            </div>
          )}
          
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-slate-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <RelativeTime date={commit.commit.author?.date || ''} />
          </div>
          
          <a 
            href={commit.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg font-mono font-medium transition-colors border border-blue-200 hover:border-blue-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span>{commit.sha.substring(0, 7)}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

