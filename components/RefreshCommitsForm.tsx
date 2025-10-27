'use client';

import { useTransition, useState, useEffect } from 'react';

interface RefreshCommitsFormProps {
  onRefresh: () => Promise<void>;
  onPendingChange?: (isPending: boolean) => void;
}

export default function RefreshCommitsForm({ onRefresh, onPendingChange }: RefreshCommitsFormProps) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (onPendingChange) {
      onPendingChange(isPending);
    }
  }, [isPending, onPendingChange]);

  async function handleRefresh() {
    setError(null);
    startTransition(async () => {
      try {
        await onRefresh();
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to refresh');
      }
    });
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleRefresh}
        disabled={isPending}
        className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 dark:hover:from-blue-600 dark:hover:to-indigo-600 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
      >
        {isPending ? (
          <>
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Refreshing...</span>
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>Refresh</span>
          </>
        )}
      </button>
      {error && <p className="text-red-600 dark:text-red-400 text-sm mt-2">{error}</p>}
    </div>
  );
}

