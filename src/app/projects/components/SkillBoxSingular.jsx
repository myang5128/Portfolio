import React from 'react'

const SkillBoxSingular = ({ name, skillList }) => {
  return (
    <div className="flex-col flex-mb-3">
        <div className="flex justify-center">
            <h1 className="lg:text-3xl text-2xl text-[#F4FDD9] underline"><strong> {name} </strong></h1>
        </div>
        <div className="p-3 flex flex-col justify-center items-center mt-3">
            {skillList.map((skill, index) => (
                <li key={index} className="text-[#F4FDD9] lg:text-xl text-l mb-1">
                    {skill}
                </li>
            ))}
        </div>
    </div>
  )
}

export default SkillBoxSingular
