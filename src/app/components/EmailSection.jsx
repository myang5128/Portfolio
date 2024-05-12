"use client";
import React, { useState, useRef } from 'react';
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from '@emailjs/browser';

const EmailSection = () => {

  const form = useRef();

  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs 
        .sendForm(
            'service_yw6z0dd', 
            'template_bvx3gd9', 
            form.current, {
                publicKey: 'OxIK1QayZd36M4nql',
            })
        .then(
            () => {
                console.log('SUCCESS!');
                setEmailSubmitted(true);
                setTimeout(() => {
                    setEmailSubmitted(false);
                }, 3000);
            },
            (error) => {
                console.log('FAILED', error.text);
            },
        );
  };

  return (
    <section id="contact" className="contact grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
    <div 
        className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#03045E] to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2">
    </div>
    <div className='z-10'>
        <h5 className='text-xl font-bold text-white my-2'>
            Let's Connect
        </h5>
        <p className='text-white mb-4 max-w-md'>
        {" "}
        I'm currently looking for entry level positions in the tech industry. Feel free to send 
        an email to talk or to see how my qualifications align with your company needs. Thank you!
        </p>
        <div className="socials flex flex-row gap-2">
            <Link href="https://github.com/myang5128" target="_blank">
                <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link href="https://www.linkedin.com/in/michael-yang-9b46b6208/" target="_blank">
                <Image src={LinkedinIcon} alt="LinkedIn Icon" />
            </Link>
        </div>
    </div>
    <div className='z-10'>
        <form className="flex flex-col" ref={form} onSubmit = {sendEmail}>
            <div className="mb-6">
                <label 
                    htmlFor="email" 
                    type="email" 
                    className="text-white block text-sm mb-1 font-medium">
                    Email
                </label>
                <input 
                    name="user_email"
                    className="border border-black placeholder-gray-600 text-black text-sm rounded-lg block w-full p-2.5" 
                    type="email" id="email" 
                    required placeholder="johndoe@google.com" 
                />
            </div>
            <div className="mb-6">
                <label 
                    htmlFor="name" 
                    type="name" 
                    className="text-white block text-sm mb-1 font-medium">
                    Name
                </label>
                <input 
                    name="user_name"
                    className="border border-black placeholder-gray-600 text-black text-sm rounded-lg block w-full p-2.5" 
                    type="text" id="name" 
                    required placeholder="Name" 
                />
            </div>
            <div className="mb-6">
                <label 
                    htmlFor="message"
                    className="text-white block text-sm mb-1 font-medium"
                >
                    Message
                </label>
                <textarea
                    name="message"
                    id="message"
                    className="border border-black placeholder-gray-600 text-black text-sm rounded-lg block w-full p-2.5"
                    placeholder="Let's talk about..."
                />
            </div>
            <button 
                type="submit"
                value="Send"
                className="px-6 py-3 w-full sm:w-fit rounded-full border border-white bg-gradient-to-tr from-[#03045E] via-[#00B4D8] to-[#90E0EF] text-black hover:text-white hover:bg-gradient-to-bl">
                    Send Message
            </button>
            {
                emailSubmitted &&  (
                    <p className="text-green-500 text-sm mt-2">
                        Email sent successfully!
                    </p>
                )
            }
        </form>
    </div>
    </section>
  )
}

export default EmailSection
