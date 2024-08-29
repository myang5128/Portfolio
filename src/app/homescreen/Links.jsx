"use client";
import React from 'react';
import LinkSingular from '../components/LinkSingular';

const navLinks = [
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Projects and Skills",
        path: "/projects",
    },
    {
        title: "GitHub",
        path: "https://github.com/myang5128",
    },
    {
        title: "LinkedIn",
        path: "https://www.linkedin.com/in/mikeyang5128/",
    }
]

const Links = () => {
  return (
    <div className="w-full">
        <ul className="flex items-center justify-between sm:flex-row flex-col text-xl sm:space-y-0 space-y-2">
            {navLinks.map((link, index) => (
                <li key={index}>
                    <LinkSingular href={link.path} title={link.title} />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Links
