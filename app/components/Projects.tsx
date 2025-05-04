'use client'

import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  githubLink: string;
  technologies: string[];
  demoLink?: string;
  featured?: boolean;
};

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
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
    
    document.querySelectorAll('.project-card').forEach((item) => {
      observer.observe(item);
    });
    
    return () => {
      document.querySelectorAll('.project-card').forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  const projects: Project[] = [
    {
      title: "Nattygyatt",
      description: "A fitness platform where you can create your account, upload posts and buy memberships based on your preference.",
      imageUrl: "/images/nattygyatt.jpg", 
      githubLink: "https://github.com/tarunsh08/ProjectFitness",
      technologies: ["Typescript","Next.js", "Node.js", "MongoDB","Supabase", "Tailwind CSS", "Razorpay"],
      demoLink: "https://project-fitness-q5msjgtw8-tarunsh08s-projects.vercel.app",
      featured: true
    },
    {
      title: "PDF Chatter",
      description: "A trained bot that chats about the PDF you upload, answers to the questions and also provide references.",
      imageUrl: "/images/pdfchat.jpg",
      githubLink: "https://github.com/tarunsh08/PDFchat",
      technologies: ["Next.js", "Tailwind CSS", "Langchain", "Docker", "Express.js", "Clerk"],
      featured: true
    },
    {
      title: "MyDrive",
      description: "Stores images and saves them to supabase which user can access anytime if authenticated.",
      imageUrl: "/images/Gdrive.jpg",
      githubLink: "https://github.com/tarunsh08/Gdrive",
      technologies: ["React.js", "Tailwind CSS", "Supabase", "MongoDB", "Express.js"]
    },
    {
      title: "NewsBot",
      description: "A news web that fetches real time data and displays news of various categories.",
      imageUrl: "/images/newsbot.jpg",
      githubLink: "https://github.com/tarunsh08/NewsBot",
      technologies: ["React.js", "Bootstrap"]
    }
  ];

  return (
    <section 
      id='projects' 
      className="min-h-screen py-20 px-4 sm:px-8 bg-transparent scroll-mt-16 overflow-hidden"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 text-gray-800 dark:text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">Projects</span>
          </h2>
          
          <p className="text-center text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Explore my recent work and side projects that showcase my skills and passion for development
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`project-card opacity-0 translate-y-10 transition-all duration-700 delay-${index * 100} cursor-pointer`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/80 to-white/40 dark:from-gray-800/80 dark:to-gray-900/40 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 ${hoveredProject === index ? 'scale-[1.02] shadow-purple-500/20' : ''}`}>
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-medium rounded-full shadow-lg animate-pulse">
                    <FaStar className="text-yellow-200" />
                    Featured
                  </div>
                )}
                
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <Image
                    src={project.imageUrl} 
                    alt={project.title}
                    width={500}
                    height={300}
                    className={`w-full h-full object-cover transition-all duration-700 ${hoveredProject === index ? 'scale-110 filter brightness-110' : 'scale-100'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Project Title with Animated Underline */}
                  <div className="absolute bottom-4 left-4 z-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                      {project.title}
                    </h3>
                    <div className={`h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded transition-all duration-500 ${hoveredProject === index ? 'w-full' : 'w-0'}`}></div>
                  </div>
                </div>
                
                {/* Project Details */}
                <div className="p-6 relative">
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-white/20 dark:bg-gray-700/50 text-gray-800 dark:text-gray-200 group-hover:bg-white/30 dark:group-hover:bg-gray-600/50 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-800/80 dark:bg-gray-700/80 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-all hover:shadow-lg transform hover:translate-y-[-2px]"
                    >
                      <FaGithub className="text-lg" />
                      <span>Code</span>
                    </a>
                    
                  
                    {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-purple-500/30 transition-all hover:shadow-lg"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                      <span>Live Demo</span>
                    </a>
                  )}
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* "See More Projects" Button */}
        <div className="mt-16 text-center">
          <a 
            href="https://github.com/tarunsh08"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all text-lg font-medium hover:translate-y-[-2px] group"
          >
            See More on GitHub
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