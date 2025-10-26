# Git Commit History Viewer

Next.js application for viewing Git commit history from GitHub repositories.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Octokit.js

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
