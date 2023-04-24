import React from "react";

type Props = {};

function Skills({}: Props) {
  const skills = ["React", "Next.js", "TypeScript", "Node.js", "TailwindCSS"];

  return (
    <div className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Skills
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            My Technical Skills
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {skills.map((skill) => (
              <div
                key={skill}
                className="px-3 py-2 bg-indigo-600 text-white rounded-full text-sm font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
