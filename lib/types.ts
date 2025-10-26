export interface Commit {
  sha: string;
  commit: {
    message: string;
    author: {
      name?: string;
      email?: string;
      date?: string;
    } | null;
  };
  author: {
    login: string;
    avatar_url: string;
    html_url: string;
  } | null;
  html_url: string;
}

export interface Branch {
  name: string;
  commit: {
    sha: string;
    url: string;
  };
  protected: boolean;
}
