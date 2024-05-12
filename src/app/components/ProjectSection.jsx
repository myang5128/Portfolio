"use client";
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectData = [
    {
        id: 1,
        title: "Spanish to Chinese Translator",
        description: "A machine translation model that can translate between Spanish/English to English/Chinese.",
        image: "/images/project-images/mtimage.png",
        tag: ['All', 'ML'],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "Android Video Game App Prototype",
        description: "A prototype RPG, roguelike game made for Android devices.",
        image: "/images/project-images/nothinghere.png",
        tag: ['All', 'Game'],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 3,
        title: "Analyzing Steam Game Success",
        description: "Analysing factors that classify Steam game success.",
        image: "/images/project-images/nothinghere.png",
        tag: ['All', 'ML', 'Data'],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 4,
        title: "Online Portfolio",
        description: "Online portfolio created in React and Next.js.",
        image: "/images/project-images/nothinghere.png",
        tag:['All', 'Web'],
        gitUrl: "/",
        previewUrl: "/"
    },
]

const ProjectSection = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    }

    const filterProjects = projectData.filter((project) =>
         project.tag.includes(tag)
    );

  return (
    <div className="projects">
        <h2 className='text-center text-3xl md:text-4xl font-bold text-white mt-4 py-6 px-3'>Projects</h2>
        <div className='text-white flex flex-wrap justify-center items-center gap-2 py-6'>
            <ProjectTag 
                onClick={handleTagChange} 
                name="All" 
                isSelected={tag === "All"} 
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="Web" 
                isSelected={tag === "Web"} 
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="Game" 
                isSelected={tag === "Game"} 
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="ML" 
                isSelected={tag === "ML"} 
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="Data" 
                isSelected={tag === "Data"} 
            />
        </div>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {filterProjects.map((project) => 
            <ProjectCard 
                key={project.id} 
                title={project.title} 
                description={project.description} 
                imgUrl={project.image} 
                tags={project.tag}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
            />)}
        </div>
    </div>
  )
}

export default ProjectSection
