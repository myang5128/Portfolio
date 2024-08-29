import React from 'react';
import LinkSingular from './LinkSingular';

const MenuOverlay = ({ links }) => {
  return (
    <ul className='flex flex-col items-center border-2'>
    {links.map((link, index) => (
    <li key={index}>
       <LinkSingular href={link.path} title={link.title} />
    </li>
    ))}
    </ul>
  )
}

export default MenuOverlay
