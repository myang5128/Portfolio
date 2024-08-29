import React from 'react';

const NodeSingular = ({ title, id, info }) => {
  return (
    <div className="p-3">
      <div className="flex justify-center">
        <h1 className="lg:text-3xl text-2xl text-[#F4FDD9] mb-5"><strong>{title}</strong></h1>
      </div>
      {info.map((section, index) => (
        <div className="mb-3" key={index}>
          <h2 className="text-[#F4FDD9] underline text-xl">{section.infoName}</h2>
          <div className="text-[#F4FDD9] flex justify-between lg:text-xl text-l">
            <p>{section.infoTitle}</p>
            <p>{section.infoDates}</p>
          </div>
          <ul className="px-2">
            {section.infoInfo.map((sectionInfo, infoIndex) => (
              <li key={infoIndex} className="text-[#F4FDD9] lg:text-xl text-l mb-1">
                {sectionInfo}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default NodeSingular
