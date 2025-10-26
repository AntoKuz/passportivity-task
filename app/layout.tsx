import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Git Commit History Viewer",
  description: "View git commit history from GitHub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
