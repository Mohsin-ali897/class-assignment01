
import Link from "next/link";
import React from 'react';

export default function Navbar() {
  return (
    <div className="bg-black pl-4 pr-4">
      <nav className="flex justify-between items-center h-10 ">
        <h1 className="text-yellow-500 text-2xl">Mohsin Ali</h1>
        <ul className="flex space-x-10 ml-auto mr-10rem">
          <li>
            <Link className="text-white hover:text-blue-500 transition-colors duration-300" href="/">Home</Link>
          </li>
          <li>
            <Link className="text-white hover:text-blue-500 transition-colors duration-300" href="/about">About</Link>
          </li>
          <li>
            <Link className="text-white hover:text-blue-500 transition-colors duration-300" href="/about/contact">Contact</Link>
          </li>
          <li>
            <Link className="text-white hover:text-blue-500 transition-colors duration-300" href="/about/contact/jobs">Jobs</Link>
          </li>
          <li>
            <Link className="text-white hover:text-blue-500 transition-colors duration-300" href="/about/contact/jobs/projects">Project</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}