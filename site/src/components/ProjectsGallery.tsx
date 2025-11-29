"use client";

import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaTrash, FaPlus } from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  description?: string;
  imageUrl?: string;
  tags?: string;
  link?: string;
}

const ProjectsGallery: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ title: '', description: '', imageUrl: '', tags: '', link: '' });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch('/api/projects');
      const data = await res.json();
      if (data.success) {
        setProjects(data.data);
      }
    } catch (err) {
      console.error('Erro ao buscar projetos:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setProjects([data.data, ...projects]);
        setFormData({ title: '', description: '', imageUrl: '', tags: '', link: '' });
        setShowForm(false);
      }
    } catch (err) {
      console.error('Erro ao adicionar projeto:', err);
    }
  };

  const handleDeleteProject = async (id: number) => {
    try {
      const res = await fetch(`/api/projects?id=${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setProjects(projects.filter(p => p.id !== id));
      }
    } catch (err) {
      console.error('Erro ao deletar projeto:', err);
    }
  };

  if (loading) {
    return <div className="text-center text-gray-400">Carregando projetos...</div>;
  }

  return (
    <div className="w-full">
      <div className="mb-4 flex justify-between items-center">
        <h3 className="text-2xl font-bold text-cyan-400">Galeria de Projetos</h3>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded flex items-center gap-2 transition-colors"
        >
          <FaPlus /> Novo Projeto
        </button>
      </div>

      {showForm && (
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
          <form onSubmit={handleAddProject} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-300 mb-2">Título *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
                className="w-full px-3 py-2 bg-black/50 border border-gray-600 rounded text-white placeholder-gray-400"
                placeholder="Nome do projeto"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">Descrição</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 bg-black/50 border border-gray-600 rounded text-white placeholder-gray-400 resize-none"
                rows={3}
                placeholder="Descrição breve..."
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-300 mb-2">URL da Imagem</label>
                <input
                  type="url"
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  className="w-full px-3 py-2 bg-black/50 border border-gray-600 rounded text-white placeholder-gray-400"
                  placeholder="https://..."
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-2">Tags</label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  className="w-full px-3 py-2 bg-black/50 border border-gray-600 rounded text-white placeholder-gray-400"
                  placeholder="React, Node.js, ..."
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">Link do Projeto</label>
              <input
                type="url"
                value={formData.link}
                onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                className="w-full px-3 py-2 bg-black/50 border border-gray-600 rounded text-white placeholder-gray-400"
                placeholder="https://github.com/..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 px-4 py-2 rounded font-semibold transition-colors"
            >
              Salvar Projeto
            </button>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-black/70 border border-white/10 rounded-lg p-4 hover:border-green-400/50 transition-all">
            {project.imageUrl && (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover rounded mb-3"
              />
            )}
            <h4 className="font-semibold text-cyan-400 mb-2">{project.title}</h4>
            {project.description && <p className="text-gray-300 text-sm mb-3">{project.description}</p>}
            {project.tags && (
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.split(',').map((tag, i) => (
                  <span key={i} className="text-xs bg-blue-600/30 px-2 py-1 rounded">
                    {tag.trim()}
                  </span>
                ))}
              </div>
            )}
            <div className="flex justify-between items-center">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-green-300 transition-colors flex items-center gap-1"
                >
                  <FaExternalLinkAlt className="text-sm" /> Ver
                </a>
              )}
              <button
                onClick={() => handleDeleteProject(project.id)}
                className="text-red-400 hover:text-red-300 transition-colors"
              >
                <FaTrash className="text-sm" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsGallery;
