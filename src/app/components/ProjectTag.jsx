import React from 'react'

const ProjectTag = ({ name, onClick, isSelected}) => {
    const buttonStyles = isSelected 
    ? "bg-gradient-to-tr from-[#03045E] via-[#00B4D8] to-[#90E0EF] text-black hover:text-white hover:bg-gradient-to-bl"
    : "text-white border border-white bg-[#121212] hover:border-white hover:bg-[#00B4D8] hover:text-black"
  return (
    <button 
    className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
    onClick={() => onClick(name)}
    >
        {name}
    </button>
  )
}

export default ProjectTag
