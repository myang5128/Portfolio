import React from 'react';
import ProjectBoxes from './ProjectBoxes';

const Projects = () => {
  return (
    <div className="flex flex-col bg-[#101310] mt-6">
      <div className="flex justify-center bg-[#101310]">
        <div className="text-[#F4FDD9] flex flex-col justify-between items-center md:w-4/5 w-full p-6 pt-2 space-x-3">
          <h2 className="lg:text-8xl sm:text-5xl text-3xl">Projects</h2>
        </div>
      </div>
      <div className="px-1 lg:mt-20 md:mt-10 sm:mt-8 mt-4">
        <ProjectBoxes />
      </div>
    </div>
  )
}

export default Projects
