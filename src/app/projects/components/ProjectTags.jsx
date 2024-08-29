import React from 'react'

const ProjectTag = ({ name, onClick, isSelected}) => {
    const buttonStyles = isSelected 
    ? "text-[#090B09] bg-[#F4FDD9]"
    : "text-[#F4FDD9] border-2 border-[F4FDD9] bg-[#090B09]"
  return (
    <button 
    className={`${buttonStyles} rounded-full border-2 px-6 py-3 lg:text-xl text-l cursor-pointer`}
    onClick={() => onClick(name)}
    >
        {name}
    </button>
  )
}

export default ProjectTag
