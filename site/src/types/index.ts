// src/types/github.ts
export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  fork: boolean;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  topics: string[];
}

export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

// src/types/contact.ts
export interface ContactForm {
  name: string;
  email: string;
  message: string;
  timestamp?: string;
}

export interface ContactResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export interface ContactsResponse {
  success: boolean;
  contacts?: ContactForm[];
  error?: string;
}

// src/types/components.ts
export interface BootSequenceProps {
  onFinish: () => void;
}

export interface ContactSectionProps {
  onOpenContact: () => void;
  onOpenAdmin: () => void;
  showAdminButton: boolean;
}

export interface ContactModalProps {
  onClose: () => void;
}

export interface AdminPanelProps {
  onClose: () => void;
}

export interface ProjectCardProps {
  project: GitHubRepo;
}

// src/types/hooks.ts
export interface UseGitHubReturn {
  projects: GitHubRepo[];
  loading: boolean;
  error: string | null;
  loadProjects: () => Promise<void>;
}

export interface UseContactsReturn {
  contacts: ContactForm[];
  loading: boolean;
  error: string | null;
  loadContacts: () => Promise<void>;
  submitContact: (data: ContactForm) => Promise<boolean>;
}