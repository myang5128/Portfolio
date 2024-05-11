import React from 'react';

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? 'text-[#90E0EF] border-b border-blue-400' : 'text-gray-200'

  return (
    <button onClick={selectTab}>
    <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
    {children}
    </p>
    </button>
  )
}

export default TabButton
