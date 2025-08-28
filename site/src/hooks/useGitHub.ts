import { useState, useCallback } from 'react';
import { GitHubRepo, UseGitHubReturn } from '@/src/types';

// Substitua pelo seu usuário do GitHub
const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'SEU_USUARIO_GITHUB';

export const useGitHub = (): UseGitHubReturn => {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadProjects = useCallback(async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
        {
          headers: {
            'Accept': 'application/vnd.github.v3+json',
          },
        }
      );
      
      if (!response.ok) {
        throw new Error(`GitHub API Error: ${response.status}`);
      }
      
      const repos: GitHubRepo[] = await response.json();
      
      // Filtrar apenas repos que não são fork e têm descrição
      const filteredProjects = repos.filter(
        (repo: GitHubRepo) => !repo.fork && repo.description
      );
      
      setProjects(filteredProjects);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
      console.error('Erro ao carregar projetos:', errorMessage);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    projects,
    loading,
    error,
    loadProjects,
  };
};