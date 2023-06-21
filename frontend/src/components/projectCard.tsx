import Image from "next/image";
import React from "react";
import { ButtonComponent } from "./index";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

interface GalleryProps {
  projects: Project[];
  columns: number;
}

const Gallery: React.FC<GalleryProps> = ({ projects, columns }) => {
  const rows = Math.ceil(projects.length / columns);

  const renderProjects = () => {
    const renderedProjects = [];

    for (let row = 0; row < rows; row++) {
      const projectRow = [];

      for (let col = 0; col < columns; col++) {
        const index = row * columns + col;

        if (index < projects.length) {
          const project = projects[index];

          projectRow.push(
            <div
              key={project.id}
              className={`col-span-1 md:col-span-${12 / columns} mb-4 md:mb-0`}
            >
              <div className="relative w-auto">
                <a href={project.link} target="_blank" rel="noreferrer">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={150}
                      height={150}
                      className="w-80 h-80 object-cover rounded-t"
                    />
                  ) : (
                    <div
                      className="w-80 h-80 object-cover rounded-t text-black flex
                      items-center justify-center bg-[whitesmoke] text-4xl"
                    >
                      Em Breve
                    </div>
                  )}
                </a>
                <div className="block w-80 inset-0 bg-black rounded-b bg-opacity-20  flex-col items-center justify-center p-4">
                  <h2 className="text-white text-2xl text-center mb-2">
                    {project.title}
                  </h2>
                  <p className="text-white text-lg text-center">
                    {project.subtitle}
                  </p>
                  <button
                    className="w-full flex items-center justify-center mt-4 
                  disabled:hidden"
                    disabled={project.link ? false : true}
                  >
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <ButtonComponent>Ver Mais</ButtonComponent>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          );
        }
      }

      renderedProjects.push(
        <div
          key={row}
          className="flex gap-4 flex-col md:flex-row mb-4 md:-mx-4"
        >
          {projectRow}
        </div>
      );
    }

    return renderedProjects;
  };

  return <div>{renderProjects()}</div>;
};

export default Gallery;
