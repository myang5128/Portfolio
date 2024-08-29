'use client'
import React from 'react';
import SkillBoxSingular from './SkillBoxSingular';

const skillList = [
    {
        "catName": "Software Development",
        "catID": 1,
        "catList": [
            "Python",
            "Java",
            "Object-Oriented Programming",
            "Model-View-Controller Architecture",
        ]
    },
    {
        "catName": "Mobile Development",
        "catID": 2,
        "catList": [
            "Java",
            "Swift",
            "Object-Oriented Programming",
            "Model-View-Controller Architecture",
        ]
    },
    {
        "catName": "Web Development",
        "catID": 3,
        "catList": [
            "REST APIs",
            "Javascript",
            "React.js",
            "Next.js",
            "HTML",
            "CSS",
        ]
    },
    {
        "catName": "Data Analysis",
        "catID": 4,
        "catList": [
            "Python",
            "R Tidyverse",
            "SQL",
            "Tableau",
            "Matplotlib",
            "scikit-learn",
            "Regression Models"
        ]
    },
    {
        "catName": "Machine Learning",
        "catID": 5,
        "catList": [
            "Python",
            "Scikit-learn",
            "Tokenizers",
            "Transformers",
        ]
    },
    {
        "catName": "Other",
        "catID": 6,
        "catList": [
            "Agile Methodologies",
            "SDLC",
            "Git",
            "User Requirements",
        ]
    }
    
]

const SkillBoxes = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 px-5 py-3">
        {skillList.map((skill, index) => (
            <ul key={index} className="">
                <SkillBoxSingular
                    name={skill.catName}
                    skillList={skill.catList}
                />
            </ul>
        ))}
    </div>
  )
}

export default SkillBoxes
