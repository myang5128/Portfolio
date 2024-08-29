import React from 'react';
import Nodes from './Nodes';
import Image from 'next/image';
import profPic from '../../../../public/images/profPicTest.jpg';

const About = () => {
  return (
    <div className="flex flex-col bg-[#101310]">
      <div className="flex justify-center bg-[#101310]">
        <div className="text-[#F4FDD9] flex flex-col justify-between items-center md:w-4/5 w-full p-6 pt-2 sm:space-x-3">
          <h2 className="lg:text-8xl sm:text-5xl text-3xl">About Me</h2>
          <div className="flex md:flex-row flex-col justify-between lg:space-x-32 sm:space-x-16 sm:space-y-0 items-center lg:mt-20 md:mt-10 mt-6 space-y-6">
            <Image
              className="border rounded-full"
              src={profPic}
              width={250}
              height={250}
              alt="Profile Picture"
            />
            <p className="lg:text-xl text-1">
              I'm a <strong>Vassar College Computer Science</strong> graduate of 2024. At Vassar, I've worked on several projects including creating an Android video game app prototype, a data analysis and science project, and a machine learning project 
              that involves creating a machine translation software capable of translating from Spanish to Chinese with a decent accuracy score. Some of the most important skills I've learned at Vassar were working with technology <strong>(Python, Java, Github, Software Development)</strong> and
              with others <strong>(Agile, Collaborative Teamwork)</strong>. I believe the skills I gained are invaluable to both myself and my future employers. Outside of Vassar, I continue to focus on my learning by working on projects and learning new skills like <strong>SQL</strong> and <strong>Tableau</strong>.
            </p>
          </div>
        </div>
      </div>
      <div className="px-1 lg:mt-20 md:mt-10 sm:mt-8 mt-4">
        <Nodes />
      </div>
      <div className="w-full justify-center pt-10 pb-10 p-2 md:flex hidden">
        <div className="w-2/3 flex justify-center items-center border-b-2"/>
      </div>
    </div>
  );
};

export default About;
