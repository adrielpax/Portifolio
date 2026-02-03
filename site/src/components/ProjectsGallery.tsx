"use client";

import React, { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import useSanityFetch from "@/src/hooks/useSanityFetch";

interface Project {
  id: number;
  title: string;
  description?: string;
  imageUrl?: string;
  tags?: string;
  link?: string;
}

const ProjectsGallery: React.FC = () => {
  const { data, loading } = useSanityFetch<Project[]>({ type: "projects" }, { mock: false, delay: 350 });

  const [projects, setProjects] = useState<Project[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ title: "", description: "", imageUrl: "", tags: "", link: "" });

  // sincroniza apenas quando data mudar
  useEffect(() => {
    if (data) setProjects(data);
  }, [data]);

  const nextId = useMemo(() => {
    return projects.length > 0 ? Math.max(...projects.map((p) => p.id)) + 1 : 1;
  }, [projects]);

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    const newProject: Project = { id: nextId, ...formData } as any;
    setProjects([newProject, ...projects]);
    setFormData({ title: "", description: "", imageUrl: "", tags: "", link: "" });
    setShowForm(false);
  };

  const handleDeleteProject = (id: number) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  if (loading) return <div className="text-gray-400">Carregando projetos…</div>;

  return (
    <div className="w-full">
      <div className="mb-4 flex justify-between items-center">
        <h3 className="text-2xl font-bold text-cyan-400">Galeria de Projetos</h3>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition-colors"
        >
          Novo Projeto
        </button>
      </div>

      {showForm && (
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
          <form onSubmit={handleAddProject} className="space-y-4">
            {["title", "description", "imageUrl", "tags", "link"].map((field) => (
              <input
                key={field}
                placeholder={field}
                value={(formData as any)[field]}
                onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                className="w-full px-3 py-2 bg-black/50 border border-gray-600 rounded text-white"
              />
            ))}
            <button type="submit" className="w-full bg-green-600 px-4 py-2 rounded">
              Salvar
            </button>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-black/70 border rounded-lg p-4">
            {project.imageUrl && (
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                className="rounded mb-3 object-cover"
              />
            )}
            <h4 className="font-semibold text-cyan-400 mb-2">{project.title}</h4>
            {project.description && <p className="text-gray-300 text-sm mb-3">{project.description}</p>}
            {project.tags && (
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.split(",").map((tag, i) => (
                  <span key={i} className="text-xs bg-blue-600/30 px-2 py-1 rounded">
                    {tag.trim()}
                  </span>
                ))}
              </div>
            )}
            <div className="flex justify-between">
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-cyan-400">
                  Ver
                </a>
              )}
              <button onClick={() => handleDeleteProject(project.id)} className="text-red-400">
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsGallery;
