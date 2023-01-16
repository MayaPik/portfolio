import React from "react";
import { CodeIcon } from "@heroicons/react/solid";

export default function Open() {
  return (
    <section id="open">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-center mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-5xl mb-4 font-medium text-white">
            <CodeIcon className="w-10 inline-block mb-2" /> Hello World{" "}
            <CodeIcon className="w-10 inline-block mb-2" />
          </h1>

          <div className="flex justify-center">
            <a
              href="https://github.com/MayaPik"
              className="ml-4 inline-flex text-purple-200 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              My Github
            </a>
            <a
              href="https://docs.google.com/document/d/1D4xru0n_8xjD7tgf2M8llR2JvSQOfMxIuP__wp0P8SI/edit?usp=sharing"
              className="ml-4 inline-flex text-purple-200 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              My Resume
            </a>
            <a
              href="https://www.linkedin.com/in/maya-pik/"
              className="ml-4 inline-flex text-purple-200 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
