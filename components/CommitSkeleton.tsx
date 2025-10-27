export default function CommitSkeleton() {
  return (
    <div className="relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-slate-200 dark:border-slate-700 overflow-hidden animate-pulse-slow">
      <div className="flex flex-col gap-4">
        <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-20"></div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-24"></div>
          </div>
          
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-16"></div>
        </div>
      </div>
    </div>
  );
}

