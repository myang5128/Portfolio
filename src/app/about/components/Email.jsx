"use client";
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const EmailSection = () => {

  const form = useRef();

  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs 
        .sendForm(
            process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID, 
            process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID, 
            form.current, {
                publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
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
    <section id="contact" className="contact flex sm:my-6 sm:py-6 py-3 my-3 gap-4 w-full items-center justify-center">
        <form className="flex flex-col" ref={form} onSubmit = {sendEmail}>
            <div className="mb-6">
                <label 
                    htmlFor="email" 
                    type="email" 
                    className="text-[#F4FDD9] block text-sm mb-1 font-medium">
                    Email
                </label>
                <input 
                    name="user_email"
                    className="border border-[#101310] placeholder-gray-600 text-[#101310] text-sm rounded-lg block w-full p-2.5" 
                    type="email" id="email" 
                    required placeholder="johndoe@google.com" 
                />
            </div>
            <div className="mb-6">
                <label 
                    htmlFor="name" 
                    type="name" 
                    className="text-[#F4FDD9] block text-sm mb-1 font-medium">
                    Name
                </label>
                <input 
                    name="user_name"
                    className="border border-[#101310] placeholder-gray-600 text-[#101310] text-sm rounded-lg block w-full p-2.5" 
                    type="text" id="name" 
                    required placeholder="Name" 
                />
            </div>
            <div className="mb-6">
                <label 
                    htmlFor="message"
                    className="text-[#F4FDD9] block text-sm mb-1 font-medium"
                >
                    Message
                </label>
                <textarea
                    name="message"
                    id="message"
                    className="border border-[#101310] placeholder-gray-600 text-[#101310] text-sm rounded-lg block w-full p-2.5"
                    placeholder="Let's talk about..."
                />
            </div>
            <button 
                type="submit"
                value="Send"
                className="px-6 py-3 w-full sm:w-fit rounded-full border border-[#F4FDD9] bg-[#101310] text-[#F4FDD9] hover:text-[#F4FDD9] hover:bg-gradient-to-bl">
                    Send Message
            </button>
            {
                emailSubmitted &&  (
                    <p className="text-[#F4FDD9] text-sm mt-2">
                        Email Sent!
                    </p>
                )
            }
        </form>
    </section>
  )
}

export default EmailSection;
