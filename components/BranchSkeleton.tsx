export default function BranchSkeleton() {
  return (
    <div className="group relative overflow-hidden rounded-lg sm:rounded-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 p-3 sm:p-4 border border-slate-200 dark:border-slate-700 animate-pulse-slow">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-24 mb-3"></div>
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-16"></div>
        </div>
        <div className="w-4 h-4 bg-slate-200 dark:bg-slate-700 rounded flex-shrink-0"></div>
      </div>
    </div>
  );
}

