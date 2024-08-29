"use client";
import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/logo.png";
import Cross from '../../../public/images/cross.png';
import Menu from '../../../public/images/menu-burger.png';
import MenuOverlay from './MenuOverlay';
import LinkSingular from './LinkSingular';

const navLinks = [
  {
      title: "About",
      path: "/about",
  },
  {
      title: "Projects & Skills",
      path: "/projects",
  },
]

const Header = () => {
  const [openStatus, setOpenStatus] = useState(false);
  return (
    <header className="header lg:p-6 p-2 bg-[#090B09] mb-12">
      <div className="flex flex-row justify-between pb-2">
        <div className="w-1/4 flex justify-start items-center">
          <Link href="./" className="pl-2">
              <Image src={Logo} width={75} height={75} alt="Logo Icon" />
          </Link>
        </div>
        <div className='mobile-menu sm:hidden flex items-center'>
          {!openStatus ? (
            <button 
                onClick = {() => setOpenStatus(true)} 
                className="flex items-center px-3 py-2 border rounded bg-[#F4FDD9]">
                <Image src={Menu} width={20} height={20} alt="Menu Icon" />
            </button>
              ) : (
            <button 
                onClick = {() => setOpenStatus(false)} 
                className="flex items-center px-3 py-2 border rounded bg-[#F4FDD9]">
                <Image src={Cross} width={20} height={20} alt="Cross Icon" />
            </button>
          )
        }
        </div>
        <div className="menu hidden sm:flex sm:w-3/4 items-center justify-end px-4">
          <ul className="flex flex-row lg:space-x-24 md:space-x-18 sm:space-x-12 space-x-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <LinkSingular href={link.path} title={link.title} />
              </li> 
            ))}
          </ul>
        </div>
      </div>
      <div className="sm:hidden">
        {openStatus ? <MenuOverlay links={navLinks} /> : null}
      </div>
      
    </header>
  )
}

export default Header;
