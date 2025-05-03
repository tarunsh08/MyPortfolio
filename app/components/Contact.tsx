'use client'

import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id='contact' className="min-h-screen py-20 px-4 sm:px-8 bg-transparent scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Connect</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Social Media Links */}
          <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-xl p-6 md:p-8 border border-white/20 dark:border-gray-700 shadow-lg">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Find Me Online</h3>
            
            <div className="space-y-3 md:space-y-4">
              <a href="https://x.com/TarunSharm202?s=09" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-3 p-2 md:p-3 rounded-lg hover:bg-white/20 dark:hover:bg-gray-700/50 transition-colors">
                <FaTwitter className="text-blue-400 text-xl md:text-2xl flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 truncate">@TarunSharm202</span>
              </a>
              
              <a href="https://www.instagram.com/_txrun_sh" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-3 p-2 md:p-3 rounded-lg hover:bg-white/20 dark:hover:bg-gray-700/50 transition-colors">
                <FaInstagram className="text-pink-500 text-xl md:text-2xl flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 truncate">@_txrun_sh</span>
              </a>
              
              <a href="https://www.linkedin.com/in/tarun-sharma-a0a5552b4" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-3 p-2 md:p-3 rounded-lg hover:bg-white/20 dark:hover:bg-gray-700/50 transition-colors">
                <FaLinkedin className="text-blue-600 text-xl md:text-2xl flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 truncate">linkedin.com/in/tarun-sharma</span>
              </a>
              
              <a href="https://github.com/tarunsh08" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-3 p-2 md:p-3 rounded-lg hover:bg-white/20 dark:hover:bg-gray-700/50 transition-colors">
                <FaGithub className="text-gray-800 dark:text-gray-200 text-xl md:text-2xl flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 truncate">github.com/tarunsh08</span>
              </a>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-xl p-6 md:p-8 border border-white/20 dark:border-gray-700 shadow-lg">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Direct Contact</h3>
            
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-3 p-2 md:p-3 rounded-lg hover:bg-white/20 dark:hover:bg-gray-700/50 transition-colors">
                <FaEnvelope className="text-red-500 text-xl md:text-2xl flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 break-all">tarunsharma08.com@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-3 p-2 md:p-3 rounded-lg hover:bg-white/20 dark:hover:bg-gray-700/50 transition-colors">
                <FaPhone className="text-green-500 text-xl md:text-2xl flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">+91 9368394188</span>
              </div>
              
              <div className="pt-4">
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText('tarunsharma08.com@gmail.com');
                    alert('Email copied to clipboard!');
                  }}
                  className="w-full md:w-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm md:text-base"
                >
                  Copy Email
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-12 md:mt-16 text-center">
          <h3 className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300 mb-4 md:mb-6">
            Have a project in mind or want to collaborate?
          </h3>
          <a 
            href="mailto:tarunsharma08.com@gmail.com" 
            className="inline-block px-5 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all text-sm md:text-base"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}