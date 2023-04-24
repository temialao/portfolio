import React from "react";
import ProjectCard from "@/components/ProjectCard";

type Props = {
  projects?: Project[];
};

type Project = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  demoUrl: string;
};

function Projects({ projects }: Props) {
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <div className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Projects
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Check Out My Work
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
