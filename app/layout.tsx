import type { Metadata } from "next";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

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
      <body className="transition-colors duration-200">
        <div className="fixed top-4 right-4 z-50 animate-fade-in">
          <ThemeToggle />
        </div>
        {children}
      </body>
    </html>
  );
}
