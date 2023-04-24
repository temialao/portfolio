import React from "react";

type Props = {};

function Experience({}: Props) {
  return (
    <div className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Work Experience
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            My Previous Jobs
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Here&apos;s a summary of my previous work experiences.
          </p>
        </div>

        <div className="mt-10">
          <div className="md:grid md:grid-cols-2 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Software Developer
                </h3>
                <p className="mt-1 text-md text-gray-500">
                  ABC Company | Jan 2020 - Present
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Junior Developer
                </h3>
                <p className="mt-1 text-md text-gray-500">
                  XYZ Company | Jun 2018 - Dec 2019
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
