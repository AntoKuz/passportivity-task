# Git Commit History Viewer

Next.js application for viewing Git commit history from GitHub repositories. Built with AI-assisted development using Cursor AI and Context7.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Octokit.js

## Live Demo

🚀 **Deployed on Vercel**: [Your deployment URL will be here]

*Note: Add your Vercel deployment URL once deployed*

## Documentation

- **[AI_LOG.md](./AI_LOG.md)** - Comprehensive log of AI tool usage (Cursor AI, Context7)
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Scalable architecture for 1000+ repositories

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Create `.env.local` file with your GitHub token:

```bash
GITHUB_TOKEN=your_github_token_here
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/app
  /page.tsx - main page
  /layout.tsx - root layout
  /globals.css - global styles
/components - React components
/lib - utilities and API clients
/public - static files
```

## Scripts

- `npm run dev` - start development server
- `npm run build` - build for production
- `npm run start` - start production server
- `npm run lint` - run ESLint

## Features

- ✅ Display commit history from GitHub repository
- ✅ Auto-updating relative timestamps (no page reload)
- ✅ Refresh button with Server Actions and useFormStatus
- ✅ Dark mode toggle
- ✅ Responsive design with Tailwind CSS
- ✅ Loading states with skeleton screens
- ✅ Branch listing and current branch display
- ✅ Error handling and graceful fallbacks

## What's Next

Future improvements planned for this project:

- [ ] Search and filter functionality for commits
- [ ] Unit and integration tests
- [ ] Commit graph visualization
- [ ] Multi-repository support
- [ ] Webhook integration for real-time updates
- [ ] Advanced analytics and insights
- [ ] Export commit data (CSV, JSON)
- [ ] Commit diff viewer
