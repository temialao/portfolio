import React from "react";
import Image from "next/image";

type Props = {};

function About({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          About Me
        </h2>
        <div className="mt-10 prose prose-lg text-gray-500">
          <p>
            Hi, I&apos;m Temi Alao, a software developer based in Manchester. I
            specialize in developing web applications and have experience
            working with technologies such as React, Next.js, TypeScript, and
            Node.js.
          </p>
          <br />
          <p>
            I&apos;m passionate about building software that solves real-world
            problems and helps to make people&apos;s lives easier.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
