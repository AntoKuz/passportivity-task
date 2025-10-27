import { getDefaultBranch, getCommits, getBranches } from '@/lib/github';
import { Commit, Branch } from '@/lib/types';
import CommitItem from '@/components/CommitItem';

export default async function Home() {
  let defaultBranch: string = 'main';
  let commits: Commit[] = [];
  let branches: Branch[] = [];
  let error: string | null = null;

  try {
    defaultBranch = await getDefaultBranch();
    [commits, branches] = await Promise.all([
      getCommits(defaultBranch),
      getBranches()
    ]);
  } catch (err) {
    error = err instanceof Error ? err.message : 'Unknown error occurred';
  }

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Git Commit History Viewer</h1>
      
      {error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p className="font-bold">Error loading data</p>
          <p>{error}</p>
        </div>
      ) : (
        <div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">
              Current Branch: <span className="text-blue-600">{defaultBranch}</span>
            </h2>
            <h3 className="text-lg mb-3">Recent Commits ({commits.length})</h3>
            <div className="space-y-3">
              {commits.map((commit) => (
                <CommitItem key={commit.sha} commit={commit} />
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg mb-3">All Branches ({branches.length})</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {branches.map((branch) => (
                <div key={branch.name} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                  <p className="font-medium">{branch.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{branch.commit.sha.substring(0, 7)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
