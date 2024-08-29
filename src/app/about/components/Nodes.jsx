'use client'
import React from 'react';
import NodeSingular from './NodeSingular';

const nodesList = [
  {
    "title": "Education",
    "id": 1,
    "info": [
      {
        "infoName": "Vassar College",
        "infoDates": "August 2020 - May 2024",
        "infoTitle": "Computer Science",
        "infoInfo": [
          "Major GPA: 3.51", 
          "Tech Coursework: Computer Organization, Theory of Computation, Analysis of Algorithms, Compilers, Operating Systems, Computational Linguistics, Graphics, Intermediate Data Science",
          "Interesting Coursework: Calculus 2, Multivariable Calculus, Fencing Fundamentals, Linear Algebra, Elementary Chinese",
        ],
      }
    ]
  },
  {
    "title": "Work",
    "id": 2,
    "info": [
      {
        "infoName": "Vassar College",
        "infoDates": "January 2021 - May 2024",
        "infoTitle": "Library Associate",
        "infoInfo": [
          "Work study position during college",
          "Exhibited strong organization and teamwork skills by distributing library materials throughout Vassar Main Library’s 1 million+ collection of books",
          "Exceeded job expectations by taking on new responsibilities from library management",
        ],
      },
      {
        "infoName": "Chipotle",
        "infoDates": "September 2019 - June 2021",
        "infoTitle": "Crew Member",
        "infoInfo": [
          "Collaborated within a team-oriented environment at Chipotle, providing versatile support throughout the restaurant as needed, ensuring a smooth and efficient workflow while emphasizing high-quality customer service",
        ],
      },
      {
        "infoName": "Youngstown State University",
        "infoDates" : "June 2019 - July 2019",
        "infoTitle": "Chemistry Intern",
        "infoInfo": [
          "Paid internship as part of the Summer Experiences for the Economically Disadvantaged program",
          "Aided postdoctoral scholar and physics professor by creating and preparing semiconductor and sapphire lens",
          "Communicated results to peer researchers, professors, and the American Chemical Society",
        ],
      },
    ]
  },
  {
    "title": "Leadership",
    "id": 3,
    "info": [
      {
        "infoName": "The Miscellany News",
        "infoDates" : "September 2023 - May 2024",
        "infoTitle": "Webmaster",
        "infoInfo": [
          "Maintained and updated Vassar College's student-run newspaper organization, The Miscellany News, on a weekly basis using WordPress",
          "Completed organization requests and website issues in a timely manner",
          "Communicated weekly with the election board regarding website concerns and updates",
        ],
      },
      {
        "infoName": "Vassar American Chemical Society",
        "infoDates" : "September 2022 - May 2023",
        "infoTitle" : "Vice President",
        "infoInfo": [
          "Led meetings with faculty members and other student organizations to increase chemistry interest from the student body",
          "Led an initiative in creating and educating others in crystal making",
        ],
      },
      {
        "infoName": "Vassar American Chemical Society",
        "infoDates" : "February 2022 - May 2022",
        "infoTitle" : "Secretary",
        "infoInfo": [
          "Kept detailed meeting minutes of all general and electoral board meetings",
          "Served as a liaison between the board, Vassar's administration, and the student body",
        ],
      },
    ]
  },
]

const Nodes = () => {
  return (
    <div className="flex md:flex-row flex-col md:space-x-3 md:space-y-0 space-y-3 justify-between px-5 py-3">
      {nodesList.map((node, index) => (
        <ul key={index}  className={`flex-1 ${index !== nodesList.length - 1 ? 'md:border-r-2 md:border-[#F4FDD9] md:border-b-0 sm:border-b-2 sm:border-[#F4FDD9]' : ''} md:px-5`}>
          <NodeSingular 
            title={node.title} 
            id={node.id} 
            info={node.info} 
          />
        </ul>
      ))}
    </div>
  );
}


export default Nodes
