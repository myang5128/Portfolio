'use client'
import React from 'react';
import Email from './email';

const Projects = () => {
  return (
    <div className="flex flex-col bg-[#101310] w-full">
      <div className="flex justify-center bg-[#101310]">
        <div className="text-[#F4FDD9] flex flex-col justify-between items-center md:w-4/5 w-full p-6 pt-2 space-x-3">
          <h2 className="lg:text-8xl sm:text-5xl text-3xl">Contact</h2>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <div className="flex sm:flex-row items-center sm:px-10 p-4 sm:w-1/2 w-full sm:justify-between px-2 flex-col justify-center sm:space-x-10 sm:space-y-0 space-y-10">
          <div className="flex justify-center items-center sm:w-2/5 w-full">
            <button
              className="w-fit h-fit sm:px-10 sm:py-5 rounded-full bg-[#101310] text-[#F4FDD9] border border-[#F4FDD9]  hover:bg-[#F4FDD9] hover:text-[#101310] px-5 py-5">
              <a href="/downloads/resume.pdf" download='Mike Resume.pdf'>Download Resume</a>
            </button>
          </div>
          <div className="flex items-center justify-center sm:w-3/5 w-full">
            <Email/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
