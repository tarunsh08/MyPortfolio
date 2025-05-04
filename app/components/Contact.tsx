'use client'

import React, { useState, useEffect } from 'react';
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaPaperPlane
} from 'react-icons/fa';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach(item => {
      observer.observe(item);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('tarunsharma08.com@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: "Twitter",
      url: "https://x.com/TarunSharm202?s=09",
      icon: <FaTwitter className="text-2xl md:text-3xl group-hover:scale-110 transition-transform" />,
      color: "bg-blue-400",
      hoverColor: "group-hover:bg-blue-500",
      textColor: "text-blue-400"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/_txrun_sh",
      icon: <FaInstagram className="text-2xl md:text-3xl group-hover:scale-110 transition-transform" />,
      color: "bg-pink-500",
      hoverColor: "group-hover:bg-pink-600",
      textColor: "text-pink-500"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tarun-sharma-a0a5552b4",
      icon: <FaLinkedin className="text-2xl md:text-3xl group-hover:scale-110 transition-transform" />,
      color: "bg-blue-600",
      hoverColor: "group-hover:bg-blue-700",
      textColor: "text-blue-600"
    },
    {
      name: "GitHub",
      url: "https://github.com/tarunsh08",
      icon: <FaGithub className="text-2xl md:text-3xl group-hover:scale-110 transition-transform" />,
      color: "bg-gray-800 dark:bg-gray-200",
      hoverColor: "group-hover:bg-gray-900 dark:group-hover:bg-white",
      textColor: "text-gray-800 dark:text-gray-200"
    },
  ];

  return (
    <section id='contact' className="min-h-screen py-20 px-4 sm:px-8 bg-transparent scroll-mt-16 overflow-hidden">
      <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-gray-800 dark:text-white">
          Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">Connect</span>
        </h2>

        <p className="text-center text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
          Ready to start a project or just want to say hello? Reach out through any of these channels.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {/* Social Media Links */}
          <div className="animate-on-scroll transform duration-700 translate-y-10 opacity-0 bg-gradient-to-br from-white/80 to-white/40 dark:from-gray-800/80 dark:to-gray-900/40 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all group">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 dark:text-white flex items-center">
              <span className="mr-3 bg-gradient-to-r from-blue-400 to-purple-500 w-1 h-8 rounded-full block"></span>
              Find Me Online
            </h3>

            <div className="space-y-5">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center sm:items-start gap-4 p-3 sm:p-4 rounded-xl hover:bg-white/30 dark:hover:bg-gray-700/50 transition-all duration-300 hover:translate-x-1"
                >
                  <div className={`p-2 sm:p-3 rounded-full ${social.color} text-white shadow-lg transform transition-all duration-300`}>
                    {social.icon}
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <p className="font-medium text-gray-700 dark:text-white group-hover:font-semibold transition-all text-sm sm:text-base">
                      {social.name}
                    </p>
                    <p className={`text-xs sm:text-sm truncate ${social.textColor}`}>
                      {social.url.replace('https://', '').replace('www.', '')}
                    </p>
                  </div>
                </a>
              ))}
            </div>

          </div>

          {/* Contact Information */}
          <div className="animate-on-scroll transform duration-700 delay-100 translate-y-10 opacity-0 bg-gradient-to-br from-white/80 to-white/40 dark:from-gray-800/80 dark:to-gray-900/40 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 dark:text-white flex items-center">
              <span className="mr-3 bg-gradient-to-r from-purple-400 to-pink-500 w-1 h-8 rounded-full block"></span>
              Direct Contact
            </h3>

            <div className="space-y-5">
              <div className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/30 dark:hover:bg-gray-700/50 transition-all duration-300">
                <div className="p-3 rounded-full bg-red-500 text-white shadow-lg transform transition-all duration-300 group-hover:scale-110">
                  <FaEnvelope className="text-2xl md:text-3xl" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-700 dark:text-white">Email</p>
                  <p className="text-sm text-red-500 break-all">tarunsharma08.com@gmail.com</p>
                </div>
                <button
                  onClick={copyEmail}
                  className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors text-sm flex items-center gap-2"
                >
                  {copied ? 'Copied!' : 'Copy'}
                  <FaPaperPlane className={copied ? 'animate-ping' : ''} />
                </button>
              </div>

              <div className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/30 dark:hover:bg-gray-700/50 transition-all duration-300">
                <div className="p-3 rounded-full bg-green-500 text-white shadow-lg transform transition-all duration-300 group-hover:scale-110">
                  <FaPhone className="text-2xl md:text-3xl" />
                </div>
                <div>
                  <p className="font-medium text-gray-700 dark:text-white">Phone</p>
                  <p className="text-sm text-green-500">+91 9368394188</p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
                <a
                  href="mailto:tarunsharma08.com@gmail.com"
                  className="block w-full py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all text-center font-medium text-lg hover:translate-y-[-2px]"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="animate-on-scroll transform transition-all duration-700 delay-200 translate-y-10 opacity-0 mt-16 md:mt-20 text-center bg-gradient-to-br from-white/60 to-white/20 dark:from-gray-800/60 dark:to-gray-900/20 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-gray-700/50 shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Have a project in mind or want to collaborate?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <a
            href="mailto:tarunsharma08.com@gmail.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all text-lg font-medium hover:translate-y-[-2px] group"
          >
            Let&apos;s Make Something Amazing
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientFlow 3s ease infinite;
        }
      `}</style>
    </section>
  );
}