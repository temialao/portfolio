export type Project = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  imageUrl: string;
  demoUrl: string;
};

export const projects: Project[] = [
  //   {
  //     id: 1,
  //     name: "Project 1",
  //     description: "Lorem ipsum dolor sit amet",
  //     technologies: ["React", "Node.js", "MongoDB"],
  //     imageUrl: "https://via.placeholder.com/500",
  //     githubUrl: "https://github.com/",
  //     demoUrl: "https://example.com/",
  //   },
  //   {
  //     id: 2,
  //     name: "Project 2",
  //     description:
  //       "Praesent non eros non enim elementum finibus vitae sit amet tellus",
  //     technologies: ["Vue.js", "Express", "MySQL"],
  //     imageUrl: "https://via.placeholder.com/500",
  //     githubUrl: "https://github.com/",
  //     demoUrl: "https://example.com/",
  //   },
];
