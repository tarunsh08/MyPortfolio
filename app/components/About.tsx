'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaUser, FaLightbulb, FaCode, FaBrain } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

export default function About() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id='about' className="min-h-screen py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-transparent scroll-mt-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Animated Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16 relative"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-3xl -z-10"></div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Me</span>
          </h2>
          <div className="w-24 md:w-32 h-1 md:h-2 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          
          <div className="mt-4 md:mt-6 flex flex-wrap justify-center gap-2 md:gap-3">
            <span className="px-3 py-1 md:px-4 md:py-2 bg-blue-500/10 text-blue-500 dark:text-blue-400 rounded-full text-xs md:text-sm font-medium border border-blue-500/20">
              Developer
            </span>
            <span className="px-3 py-1 md:px-4 md:py-2 bg-purple-500/10 text-purple-500 dark:text-purple-400 rounded-full text-xs md:text-sm font-medium border border-purple-500/20">
              Student
            </span>
            <span className="px-3 py-1 md:px-4 md:py-2 bg-green-500/10 text-green-500 dark:text-green-400 rounded-full text-xs md:text-sm font-medium border border-green-500/20">
              Problem Solver
            </span>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8"
        >
          {/* Left Column - Story Cards (span 7 columns) */}
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-4 md:space-y-6">
            {/* Background Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl md:rounded-2xl blur opacity-25 group-hover:opacity-70 transition duration-1000 group-hover:duration-300"></div>
              <div className="relative bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg p-6 md:p-8 rounded-xl md:rounded-2xl border border-white/20 dark:border-gray-700/50 shadow-lg transition-all duration-300 group-hover:scale-[1.01]">
                <div className="absolute -top-8 -left-8 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                  <FaUser className="text-white text-xl md:text-2xl" />
                </div>
                <div className="pl-8 md:pl-10">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-3 md:mb-4">
                    My Background
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                    I&apos;m <span className="font-semibold text-blue-500 dark:text-blue-400">Tarun</span>, a passionate Computer Science student currently in my 6th semester at Raj Kumar Goel Institute of Technology. 
                    My journey in tech began with curiosity about how websites work, which evolved into a deep interest in full-stack development.
                  </p>
                </div>
              </div>
            </div>

            {/* Current Focus Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl md:rounded-2xl blur opacity-25 group-hover:opacity-70 transition duration-1000 group-hover:duration-300"></div>
              <div className="relative bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg p-6 md:p-8 rounded-xl md:rounded-2xl border border-white/20 dark:border-gray-700/50 shadow-lg transition-all duration-300 group-hover:scale-[1.01]">
                <div className="absolute -top-8 -left-8 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                  <FaCode className="text-white text-xl md:text-2xl" />
                </div>
                <div className="pl-8 md:pl-10">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-3 md:mb-4">
                    Current Focus
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                    Currently expanding my expertise in <span className="font-semibold text-purple-500 dark:text-purple-400">AI</span> and mastering <span className="font-semibold text-purple-500 dark:text-purple-400">Data Structures & Algorithms</span>. I&apos;m actively solving problems on LeetCode and GFG
                    and building projects to strengthen my practical skills.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed mt-3 md:mt-4">
                    My immediate goal is to secure a challenging internship where I can contribute meaningfully while accelerating my professional growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Philosophy Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl md:rounded-2xl blur opacity-25 group-hover:opacity-70 transition duration-1000 group-hover:duration-300"></div>
              <div className="relative bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg p-6 md:p-8 rounded-xl md:rounded-2xl border border-white/20 dark:border-gray-700/50 shadow-lg transition-all duration-300 group-hover:scale-[1.01]">
                <div className="absolute -top-8 -left-8 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                  <FaLightbulb className="text-white text-xl md:text-2xl" />
                </div>
                <div className="pl-8 md:pl-10">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-3 md:mb-4">
                    My Philosophy
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed font-medium">
                    I believe in <span className="font-semibold text-yellow-500 dark:text-yellow-400">continuous learning</span> and adapting to new technologies. The ever-evolving tech landscape excites me, 
                    and I&apos;m committed to staying at the forefront of innovation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats Cards (span 5 columns) */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-4 md:space-y-6">
            {/* Education Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl md:rounded-2xl blur opacity-25 group-hover:opacity-70 transition duration-1000 group-hover:duration-300"></div>
              <div className="relative bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg p-6 md:p-8 rounded-xl md:rounded-2xl border border-white/20 dark:border-gray-700/50 shadow-lg transition-all duration-300 group-hover:scale-[1.01]">
                <div className="absolute -top-8 -left-8 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                  <FaGraduationCap className="text-white text-xl md:text-2xl" />
                </div>
                <div className="pl-8 md:pl-10">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6">
                    Education
                  </h3>
                  <div className="space-y-4 md:space-y-6">
                    <div className="relative pl-6 md:pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-green-400 before:to-green-600 before:rounded-full">
                      <h4 className="font-bold text-base md:text-lg text-gray-800 dark:text-white">B.Tech in Computer Science</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">Raj Kumar Goel Institute of Technology</p>
                      <div className="flex items-center mt-1 space-x-2">
                        <span className="text-xs md:text-sm text-gray-500 dark:text-gray-500">2022 - 2026</span>
                        <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                        <span className="text-xs md:text-sm font-medium text-green-500">SGPA: 7/10</span>
                      </div>
                    </div>

                    <div className="relative pl-6 md:pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-green-400 before:to-green-600 before:rounded-full">
                      <h4 className="font-bold text-base md:text-lg text-gray-800 dark:text-white">Certification in Generative AI</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">HPLife</p>
                      <div className="flex items-center mt-1">
                        <span className="text-xs md:text-sm text-gray-500 dark:text-gray-500">2023</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coding Profiles Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl md:rounded-2xl blur opacity-25 group-hover:opacity-70 transition duration-1000 group-hover:duration-300"></div>
              <div className="relative bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg p-6 md:p-8 rounded-xl md:rounded-2xl border border-white/20 dark:border-gray-700/50 shadow-lg transition-all duration-300 group-hover:scale-[1.01]">
                <div className="absolute -top-8 -left-8 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                  <FaLaptopCode className="text-white text-xl md:text-2xl" />
                </div>
                <div className="pl-8 md:pl-10">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6">
                    Coding Profiles
                  </h3>
                  <div className="space-y-3 md:space-y-4">
                    <a
                      href="https://leetcode.com/u/tarunsharma08/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/card block p-3 md:p-4 bg-gradient-to-r from-gray-900/90 to-gray-800/90 dark:from-gray-800/90 dark:to-gray-700/90 rounded-lg md:rounded-xl border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 hover:-translate-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 md:gap-4">
                          <div className="p-2 md:p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-md">
                            <SiLeetcode className="text-white text-lg md:text-xl" />
                          </div>
                          <div>
                            <h4 className="font-bold text-sm md:text-base text-white">LeetCode</h4>
                            <p className="text-xs text-gray-400 group-hover/card:text-orange-400 transition-colors">@tarunsharma08</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 md:mt-3 w-full h-1 md:h-2 bg-gray-700/50 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-orange-500 to-orange-600 w-1/5 rounded-full"></div>
                      </div>
                    </a>
                    
                    <a
                      href="https://www.geeksforgeeks.org/user/tarunsharexw6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/card block p-3 md:p-4 bg-gradient-to-r from-gray-900/90 to-gray-800/90 dark:from-gray-800/90 dark:to-gray-700/90 rounded-lg md:rounded-xl border border-green-500/30 hover:border-green-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 hover:-translate-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 md:gap-4">
                          <div className="p-2 md:p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-md">
                            <SiGeeksforgeeks className="text-white text-lg md:text-xl" />
                          </div>
                          <div>
                            <h4 className="font-bold text-sm md:text-base text-white">GeeksforGeeks</h4>
                            <p className="text-xs text-gray-400 group-hover/card:text-green-400 transition-colors">@tarunsharexw6</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 md:mt-3 w-full h-1 md:h-2 bg-gray-700/50 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-500 to-green-600 w-1/5 rounded-full"></div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl md:rounded-2xl blur opacity-25 group-hover:opacity-70 transition duration-1000 group-hover:duration-300"></div>
              <div className="relative bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg p-6 md:p-8 rounded-xl md:rounded-2xl border border-white/20 dark:border-gray-700/50 shadow-lg transition-all duration-300 group-hover:scale-[1.01]">
                <div className="absolute -top-8 -left-8 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                  <FaBrain className="text-white text-xl md:text-2xl" />
                </div>
                <div className="pl-8 md:pl-10">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-3 md:mb-4">
                    Top Skills
                  </h3>
                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-2 md:p-3 text-center">
                      <span className="text-blue-500 dark:text-blue-400 text-sm md:text-base font-medium">React.js</span>
                    </div>
                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-2 md:p-3 text-center">
                      <span className="text-purple-500 dark:text-purple-400 text-sm md:text-base font-medium">Next.js</span>
                    </div>
                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-2 md:p-3 text-center">
                      <span className="text-yellow-500 dark:text-yellow-400 text-sm md:text-base font-medium">JS</span>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-2 md:p-3 text-center">
                      <span className="text-green-500 dark:text-green-400 text-sm md:text-base font-medium">Node.js</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}