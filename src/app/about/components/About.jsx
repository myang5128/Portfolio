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
              I am a 2024 graduate of Vassar College with a degree in Computer Science. During my time at Vassar, I worked on several meaningful projects, including developing an Android video game app prototype, conducting
              data analysis and science research, and creating a machine learning model capable of translating Spanish to Chinese with good accuracy. Through these experiences, I honed my skills in technology (Python, 
              Java, GitHub, Software Development) and collaboration (Agile methodologies, teamwork), which I believe are invaluable assets to my future career. Beyond my academic achievements, I am committed to continuous learning 
              and growth. I actively work on new projects and expanding my skill sets. Currently, I am working on Web Development using React.js by creating websites I am passionate about.
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
