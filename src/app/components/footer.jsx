"use client";
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/images/github-mark.png";
import LinkedinIcon from "../../../public/images/LI-In-Bug.png";
import Logo from "../../../public/images/logo.png";
import FooterSingular from './FooterSingular';

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

const Footer = () => {

  return (
    <footer className="footer lg:p-6 p-2 bg-[#090B09] mt-10">
        <div className="flex flex-row justify-between">
          <div className="w-1/4 flex justify-center items-center">
            <Link href="./">
                <Image src={Logo} width={100} height={100} alt="Logo Icon" />
            </Link>
          </div>
          <div className="w-1/2 flex sm:flex-row flex-col justify-center items-center py-5 sm:space-x-10">
            {navLinks.map((link, index) => (
                <ul key={index}>
                  <FooterSingular href={link.path} title={link.title} />
                </ul> 
              ))}
          </div>
          <div className="w-1/4 flex flex-row justify-center items-center md:gap-6 sm:gap-4 gap-2">
            <Link href="https://github.com/myang5128" target="_blank">
                <Image src={GithubIcon} width={50} height={50} alt="Github Icon" />
            </Link>
            <Link href="https://www.linkedin.com/in/mikeyang5128/" target="_blank">
                <Image src={LinkedinIcon} width={50} height={50} alt="LinkedIn Icon" />
            </Link>
          </div>
        </div>
    </footer>
  );
};

export default Footer;  
