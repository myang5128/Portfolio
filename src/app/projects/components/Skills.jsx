import React from 'react';
import SkillBoxes from './SkillBoxes';

const Skills = () => {
  return (
    <div className="flex flex-col bg-[#101310]">
      <div className="flex justify-center bg-[#101310]">
        <div className="text-[#F4FDD9] flex flex-col justify-between items-center md:w-4/5 w-full p-6 pt-2 space-x-3">
          <h2 className="lg:text-8xl sm:text-5xl text-3xl">Skills</h2>
        </div>
      </div>
      <div className="px-1 lg:mt-20 md:mt-10 sm:mt-6 mt-4">
        <SkillBoxes />
      </div>
      <div className="w-full flex justify-center p-2">
        <div className="w-2/3 flex justify-center items-center border-b-2"/>
      </div>
    </div>
  )
}

export default Skills
