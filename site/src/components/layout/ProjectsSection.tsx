import React, { ReactElement, useEffect } from 'react';
import { 
  FaCode, 
  FaStar, 
  FaCodeBranch, 
  FaExternalLinkAlt, 
  FaSpinner, 
  FaExclamationTriangle, 
  FaFolderOpen 
} from 'react-icons/fa';
import { useGitHub } from '@/src/hooks/useGitHub';
import { GitHubRepo } from '@/src/types';

interface ProjectCardProps {
  project: GitHubRepo;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="bg-black/70 border border-white/10 rounded-lg p-4 hover:border-green-400/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-400/10 transition-all duration-300">
    <div className="flex justify-between items-start mb-2">
      <h4 className="font-semibold text-cyan-400 text-sm truncate pr-2">
        {project.name}
      </h4>
      <div className="flex gap-2 text-xs flex-shrink-0">
        {project.language && (
          <span className="bg-blue-600 px-2 py-1 rounded text-xs">
            {project.language}
          </span>
        )}
      </div>
    </div>
    
    <p className="text-gray-300 text-xs mb-3 line-clamp-2">
      {project.description || 'Sem descrição'}
    </p>
    
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4 text-xs text-gray-400">
        <span className="flex items-center gap-1">
          <FaStar className="text-yellow-500" />
          {project.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <FaCodeBranch />
          {project.forks_count}
        </span>
      </div>
      <a 
        href={project.html_url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-cyan-400 hover:text-green-300 transition-colors"
        aria-label={`Ver projeto ${project.name} no GitHub`}
      >
        <FaExternalLinkAlt className="text-sm" />
      </a>
    </div>
  </div>
);

const LoadingState: React.FC = () => (
  <div className="text-center text-gray-400 py-8">
    <FaSpinner className="animate-spin text-2xl mb-2 mx-auto" />
    <p className="text-sm">Carregando projetos...</p>
  </div>
);

interface ErrorStateProps {
  onRetry: () => void;
}

const ErrorState: React.FC<ErrorStateProps> = ({ onRetry }) => (
  <div className="text-center text-red-400 py-8">
    <FaExclamationTriangle className="text-2xl mb-2 mx-auto" />
    <p className="text-sm mb-2">Erro ao carregar projetos</p>
    <button 
      onClick={onRetry}
      className="text-cyan-400 hover:text-green-300 text-sm underline focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 rounded"
    >
      Tentar novamente
    </button>
  </div>
);

const EmptyState: React.FC = () => (
  <div className="text-center text-gray-400 py-8">
    <FaFolderOpen className="text-2xl mb-2 mx-auto" />
    <p className="text-sm">Nenhum projeto encontrado</p>
  </div>
);

const ProjectsSection: React.FC = () => {
  const { projects, loading, error, loadProjects } = useGitHub();

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  const renderContent = (): ReactElement => {
    if (loading) return <LoadingState />;
    if (error) return <ErrorState onRetry={loadProjects} />;
    if (projects.length === 0) return <EmptyState />;

    return (
      <div className="space-y-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    );
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
          <FaCode />
          Projetos
        </h3>
        {renderContent()}
      </div>
    </div>
  );
};

export default ProjectsSection;