import React from 'react';
import Links from './Links';

const Homescreen = () => {
  return (
    <main className="flex flex-col items-center p-10 sm:m-4 sm:justify-between justify-center sm-2">
        <div className="">
            <h1 className="text-[#888E7B] md:text-8xl sm:text-5xl text-4xl">Michael Yang</h1>
            <div className="flex lg:flex-row flex-col justify-between sm:mt-40 mt-20 items-center">
                <h2 className="text-[#888E7B] md:text-3xl text-2xl">Developer</h2>
                <h2 className="text-[#888E7B] md:text-3xl text-2xl">Dependable</h2>
                <h2 className="text-[#888E7B] md:text-3xl text-2xl">Analytical</h2>
            </div>
        </div>
        <div className="flex w-full sm:mt-80 mt-40">
            <Links />
        </div>
    </main>
  )
}

export default Homescreen
