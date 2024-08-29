import React from 'react';
import Link from "next/link";

const ProjectBoxSingular = ({ name, teamStyle, description, features, tech, git, link }) => {
  return (
    <div className="border-2 border-[#F4FDD9] p-5">
      <div className="flex-col flex mb-3">
        <div className="flex justify-center">
          <h1 className="lg:text-3xl text-2xl text-[#F4FDD9] mb-5"><strong>{name}</strong></h1>
        </div>
        <p className="lg:text-xl text-l text-[#F4FDD9] underline">Project Description</p>
        <li className="lg:text-xl text-l text-[#F4FDD9] pl-2">{description}</li>
      </div>
      <div className="mb-3">
        <p className="lg:text-xl text-l text-[#F4FDD9] underline">Features</p>
        <ul className="pl-2">
          {features.map((feat, index) => (
            <li key={index} className="text-[#F4FDD9] lg:text-xl text-l mb-1">
              {feat}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-3">
        <p className="lg:text-xl text-l text-[#F4FDD9] underline">Tech Stack</p>
        <ul className="pl-2">
          {tech.map((tech, index) => (
            <li key={index} className="text-[#F4FDD9] lg:text-xl text-l mb-1">
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div>
      <p className="lg:text-xl text-l text-[#F4FDD9] underline">Link(s)</p>
      <ul>
        <li>
          {git && (
            <Link className="lg:text-xl text-l text-[#F4FDD9] pl-2 mb-1" href={git} target="_blank">GitHub</Link>
          )}
        </li>
        <li>
          {link && (
            <Link className="lg:text-xl text-l text-[#F4FDD9] pl-2 mb-1" href={link} target="_blank">Link</Link>
          )}
        </li>
      </ul>
      </div>
    </div>
  )
}

export default ProjectBoxSingular
