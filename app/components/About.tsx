'use client';

import React from 'react';
import { FaGraduationCap, FaLaptopCode, FaUser } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

export default function About() {
  return (
    <section id='about' className="min-h-screen py-20 px-4 sm:px-8 bg-transparent scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Me</span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg p-8 rounded-2xl border border-white/20 dark:border-gray-700/50 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
              <FaUser className="text-blue-500" /> My Journey
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I am Tarun, currently in my 5th semester of Engineering. After realizing the importance of practical skills,
              I dedicated myself to mastering web development. What started as
              curiosity has grown into genuine expertise in building modern web apps.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-4">
              Recently, I have expanded my focus to include AI and Data Structures and Algorithms, and I am making steady progress.
              My current goal is to secure an internship at a reputable tech company where I can contribute my skills
              while continuing to grow as a developer.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-4 font-medium">
              I believe in constant growth, and I am excited about what the future holds in this ever-evolving tech landscape.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg p-8 rounded-2xl border border-white/20 dark:border-gray-700/50 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <FaGraduationCap className="text-purple-500" /> Qualifications
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                  <span className='break-all'>B.Tech in Computer Science - Raj Kumar Goel Institue of Technology (2022-2026)</span>
                </li>
                {/* <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                  <span>Certification in Generative AI - By HPLife</span>
                </li> */}
              </ul>
            </div>

            <div className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg p-8 rounded-2xl border border-white/20 dark:border-gray-700/50 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <FaLaptopCode className="text-green-500" /> Coding Profiles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://leetcode.com/u/tarunsharma08/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-gray-800/80 dark:bg-gray-700/80 text-white rounded-lg hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <SiLeetcode className="text-orange-500 text-xl flex-shrink-0" />
                  <span>LeetCode</span>
                </a>
                <a
                  href="https://www.geeksforgeeks.org/user/tarunsharexw6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-gray-800/80 dark:bg-gray-700/80 text-white rounded-lg hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <SiGeeksforgeeks className="text-green-500 text-xl flex-shrink-0" />
                  <span>GFG</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}