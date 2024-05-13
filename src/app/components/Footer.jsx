"use client";
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Logo from "../../../public/images/logo.png";

const Footer = () => {

    const handleClick = (e) => {
      e.preventDefault();
      const target = document.querySelector(".hero");
      if (target) {
          window.scrollTo({
              top: target,
              behavior: 'smooth',
          });
        }
    };

  return (
    <footer className="footer border border-t-gray-800 border-l-transparent border-r-transparent">
        <div className="container p-12 flex justify-between">
          <div className="socials flex flex-row gap-2">
            <Link href=".about" target="_blank" onClick={handleClick}>
                <Image src={Logo} width={50} height={50} alt="Logo Icon" />
            </Link>
            <Link href="https://github.com/myang5128" target="_blank">
                <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link href="https://www.linkedin.com/in/michael-yang-9b46b6208/" target="_blank">
                <Image src={LinkedinIcon} alt="LinkedIn Icon" />
            </Link>
          </div>
            <p className="text-gray-600">
                All rights reserved.
            </p>
        </div>
    </footer>
  );
};

export default Footer;
