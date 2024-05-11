"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const Tab_Data = [
    {title: "Skills",
        id: "skills",
        content: (
            <div className='grid grid-cols-2 gap-8 items-center'>
                <div>
                    <ul>
                    <li> - Python</li>
                    <li> - Java</li>
                    <li> - R</li>
                    <li> - SQL</li>
                    </ul>
                </div>
                <div>
                    <ul>
                    <li> - HTML</li>
                    <li> - CSS</li>
                    <li> - React</li>
                    <li> - Git</li>
                    </ul>
                </div>
            </div>
        )
    },
    {title: "Education",
        id: "education",
        content: (
            <ul>
            Vassar College
            <li> - Computer Science Major</li>
            </ul>
        )
    },
    {title: "Certifications",
        id: "certifications",
        content: (
            <ul>
                <li> - SQL Essential Training</li>
                <li> - Python Essential Training</li>
                <li> - Program Management for IT Professionals</li>
            </ul>
        )
    }
]

const About = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
        setTab(id);
    });
  };

  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full md:pt-16">
                <Image src="/images/about-image.png" width={500} height={500} />
            </div>
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-3xl font-bold text-white mb-4 md:4xl">
                    About Me
                </h2>
                <p className="text-base lg:text-lg">
                    I am a software developer with a passion of creating impactful projects. I have experience 
                    working with machine learning technology, web and mobile development, and with data analysis and visualization.
                    I am proud to say I am confident in using Python, Java, R, SQL, HTML, CSS, React, and Git. 
                    From my academic years at Vassar College, I've developed a keen and analytical mindset that allows 
                    me to tackle new challenges with a positive and can-do attitude. I am excited to grow my knowledge 
                    and skill set through personal projects and professional experiences.
                </p>
                <div className="flex flex-row justify-start mt-8">
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                        {" "}
                        Skills {" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                        {" "}
                        Education {" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
                        {" "}
                        Certifications {" "}
                    </TabButton>
                </div>
                <div className="mt-8">
                    {Tab_Data.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
