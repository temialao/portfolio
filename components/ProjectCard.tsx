import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  project: {
    id: number;
    name: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    githubUrl: string;
    demoUrl: string;
  };
};

function ProjectCard({ project }: Props) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={project.imageUrl}
          alt={`Screenshot of ${project.name}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-lg">{project.name}</h3>
        <p className="text-gray-500 text-sm mt-2">{project.description}</p>
        <div className="mt-4">
          <ul className="flex justify-between">
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="px-2 py-1 bg-gray-200 text-xs font-semibold text-gray-600 rounded-full mr-2"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-md font-semibold text-sm"
            whileHover={{ scale: 1.05 }}
          >
            View on GitHub
          </motion.a>
          <motion.a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-2 rounded-md font-semibold text-sm ml-2"
            whileHover={{ scale: 1.05 }}
          >
            View Demo
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
