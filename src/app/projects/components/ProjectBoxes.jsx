'use client'
import React, { useState, useEffect } from 'react';
import ProjectBoxSingular from './ProjectBoxSingular';
import ProjectTags from './ProjectTags';

const boxList = [
    {
        "projectName": "Steampunk Game",
        "projectID": 1,
        "projectTeamStyle": "Team",
        "projectDescription": "A roguelike Steampunk-themed Android video game app prototype",
        "projectFeatures": [
            "Follows Agile Methodologies, MVC architecture, and OOP Principles",
            "Took initiative by creating a text-based prototype that served as the groundwork of the app",
            "Designed combat, shop, and inventory features with corresponding UI",
            "Collaboratively created user requirements and sequence diagrams using UML"
        ],
        "projectTechStack": [
            "GitHub",
            "Java",
            "Android Studio"
        ],
        "projectGit": "https://github.com/myang5128/Steampunk-Game",
        "projectLink": "",
        "tags": ["All", "Java", "Mobile Development"],
      },
      {
        "projectName": "Spanish to Chinese Translation Software",
        "projectID": 2,
        "projectTeamStyle": "Team",
        "projectDescription": "A machine learning research project capable of translating Spanish/English to English/Chinese",
        "projectFeatures": [
            "Created two models to test whether or not using an intermediary language increases translation accuracy scores",
            "Utilized HuggingFace and scikit-learn models and tools to create machine translation models",
            "Analyzed model translation results using BLEU and ROUGE scores to see that using an intermediary language does help overall accuracy",
            "Created and prepared datasets of 1000 pairs of parallel texts for each language pair",
            "Used tokenizers to prepare datasets for transformers"
        ],
        "projectTechStack": [
            "Python",
            "HuggingFace",
            "Transformers",
            "Scikit-learn",
            "Pandas",
            "Tokenizers"
        ],
        "projectGit": "https://github.com/myang5128/spanish-chinese-translator",
        "projectLink": "",
        "tags": ["All", "Machine Learning", "Python"],
      },
      {
        "projectName": "Analyzing Steam Game Success",
        "projectID": 3,
        "projectTeamStyle": "Team",
        "projectDescription": "Analyzing factors that can indicate Steam game success",
        "projectFeatures": [
            "Used Python and R libraries to scrape data from Steam and third-party websites",
            "Utilized Pandas to clean and prepare dataset for further analysis",
            "Used Matplotlib for data visualization with an emphasis on accessibility",
            "Incorporated logistic and linear regression and random forest tree models to predict game success based on factors such as genre and price",
            "Presented our project and findings in both technical and non-technical terms",
            "Served as a mediator when dealing with team issues"
        ],
        "projectTechStack": [
            "Python",
            "R Tidyverse",
            "Pandas",
            "Machine Learning",
            "Logistic Regression",
            "Linear Regression",
            "Random Forest Tree",
            "Github"
        ],
        "projectGit": "https://github.com/myang5128/analyzing-steam-game",
        "projectLink": "https://drive.google.com/drive/folders/19ACYUNAk0u3hU0q1c_rJz-9XxKqoRAui?usp=sharing",
        "tags": ["All", "Machine Learning", "Python"],
      },
      {
        "projectName": "Professional Portfolio",
        "projectID": 4,
        "projectTeamStyle": "Independent",
        "projectDescription": "An online portfolio that encapsulates my skills, experiences, and projects",
        "projectFeatures": [
            "Developed an online portfolio using React.js and Next.js",
            "Styled website using Tailwind CSS",
            "Responsive multi-page web application",
            "Deployed on Vercel"
        ],
        "projectTechStack": [
            "Github",
            "Javascript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "HTML",
        ],
        "projectGit": "https://github.com/myang5128/Portfolio",
        "projectLink": "https://portfolio-michaely-dev.vercel.app",
        "tags": ["All", "Web Development"],
      },
      {
        "projectName": "Spotify Playlist Builder",
        "projectID": 5,
        "projectTeamStyle": "Independent",
        "projectDescription": "A script that scrapes data from Billboard Hot 100 songs and adds it to a Spotify playlist using Spotify's APIs",
        "projectFeatures": [
            "Web scraping functionality with BeautifulSoup",
            "Utilized APIs to support Spotify playlist creation",
        ],
        "projectTechStack": [
            "Python",
            "Scraping",
            "APIs",
        ],
        "projectGit": "https://github.com/myang5128/Spotify-Playlist-Builder",
        "projectLink": "",
        "tags": ["All", "Python"],
      },
    ]

const ProjectBoxes = () => {
  const [tag, setTag] = useState("All");

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 500) {
        setTag("All");
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  }

  const filteredBox = boxList.filter((project) =>
    project.tags.includes(tag)
  );
  
  return (
    <div>
      <div className="md:flex md:flex-row items-center justify-center p-6 mb-2 space-x-3 hidden">
        <ProjectTags
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTags
          onClick={handleTagChange}
          name="Java"
          isSelected={tag === "Java"}
        />
        <ProjectTags
          onClick={handleTagChange}
          name="Python"
          isSelected={tag === "Python"}
        />
        <ProjectTags
          onClick={handleTagChange}
          name="Mobile Development"
          isSelected={tag === "Mobile Development"}
        />
        <ProjectTags
          onClick={handleTagChange}
          name="Machine Learning"
          isSelected={tag === "Machine Learning"}
        />
        
        <ProjectTags
          onClick={handleTagChange}
          name="Web Development"
          isSelected={tag === "Web Development"}
        />
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 px-5 py-3">
        {filteredBox.map((project, index) => (
          <ul key={index}  className="">
            <ProjectBoxSingular 
              name={project.projectName}
              teamStyle={project.projectTeamStyle}
              description={project.projectDescription}
              features={project.projectFeatures}
              tech={project.projectTechStack}
              git={project.projectGit}
              link={project.projectLink}
              className="h-full flex flex-col"
            />
          </ul>
        ))}
      </div>
    </div>
  )
}

export default ProjectBoxes
