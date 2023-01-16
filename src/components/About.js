import React from "react";
import { LightningBoltIcon } from "@heroicons/react/solid";

export default function About() {
  return (
    <section id="about ">
      <div className="container m-auto flex px-10 py-20 md:flex-row flex-col items-center bg-purple-700">
        <div className="lg:flex-grow md:w-1/2 lg:pr-20 md:pr-12 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            [1] About Me
          </h1>
          <h2 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-white">
            I am a Full Stack Developer based in Tel Aviv, Israel
          </h2>
          <p className="mb-12 leading-relaxed text-green-200 font-medium title-font">
            <LightningBoltIcon className="w-6 inline-block mb-4" />
            Coding and solving problems excites me
            <LightningBoltIcon className="w-6 inline-block mb-4" /> <br />I am
            looking to make a meaningful impact within a team by developing
            functional web APIs and working with infrastructure. With a
            background in guidance, I am able to effectively communicate and
            lead ideas in front of an audience. Additionally, I am an open
            source contributor and dedicated self-educated learner
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-md lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="maya"
            src="./image.png"
          />
        </div>
      </div>
    </section>
  );
}
