import React from 'react';
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const Footer = () => {
  return (
    <footer className="footer border border-t-gray-800 border-l-transparent border-r-transparent">
        <div className="container p-12 flex justify-between">
          <div className="socials flex flex-row gap-2">
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
