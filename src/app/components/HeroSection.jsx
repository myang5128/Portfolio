"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section>
            <div className="place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-2xl sm:text-5xl lg:text-6xl font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#03045E] to-[#00B4D8] ">Hi, I'm{" "}</span>
                <br />
                <TypeAnimation
                    sequence={[
                        'Michael',
                        1000,
                        'A Python Developer',
                        1000,
                        'A Data Analyst',
                        1000,
                        'A Java Developer',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
                </h1>
                <p className="text-white text-base sm:text-lg mb-6 lg:text-xl">
                I'm a passionate programmer who loves to learn and create new projects with a focus on Python and Java development.
                </p>
                <div className="mt-10">
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-tr from-[#03045E] via-[#00B4D8] to-[#90E0EF] text-black hover:text-white hover:bg-gradient-to-bl">
                    Contact Me
                    </button>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-[#121212] text-white border border-white  hover:bg-[#00B4D8] mt-3 hover:text-black">
                    Download Resume
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;