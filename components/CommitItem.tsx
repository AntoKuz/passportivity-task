'use client';

import { Commit } from '@/lib/types';
import RelativeTime from './RelativeTime';

interface CommitItemProps {
  commit: Commit;
}

export default function CommitItem({ commit }: CommitItemProps) {
  return (
    <div className="group relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-xl transition-all duration-200 overflow-hidden">
      <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div>
        <p className="font-medium text-sm sm:text-base text-slate-800 dark:text-slate-200 mb-3 sm:mb-4 leading-relaxed line-clamp-2">
          {commit.commit.message.split('\n')[0]}
        </p>
        
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm">
          {commit.author && (
            <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-500 transition-colors">
              <img 
                src={commit.author.avatar_url} 
                alt={commit.author.login}
                className="w-4 h-4 sm:w-5 sm:h-5 rounded-full ring-2 ring-slate-100 dark:ring-slate-700 flex-shrink-0"
              />
              <span className="font-medium text-slate-700 dark:text-slate-300 truncate max-w-[120px] sm:max-w-none">{commit.author.login}</span>
            </div>
          )}
          
          <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-400">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <RelativeTime date={commit.commit.author?.date || ''} />
          </div>
          
          <a 
            href={commit.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-lg font-mono font-medium transition-colors border border-blue-200 dark:border-blue-700 hover:border-blue-300 dark:hover:border-blue-600"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span className="font-mono">{commit.sha.substring(0, 7)}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

