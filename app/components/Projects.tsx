import Image from 'next/image';
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  githubLink: string;
  technologies: string[];
  demoLink?: string;
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Nattygyatt",
      description: "A fitness platform where you can create your account, upload posts and buy memberships based on your preference.",
      imageUrl: "/images/nattygyatt.jpg", 
      githubLink: "https://github.com/tarunsh08/ProjectFitness",
      technologies: ["Typescript","Next.js", "Node.js", "MongoDB","Supabase", "Tailwind CSS", "Razorpay"],
      demoLink: "https://project-fitness-q5msjgtw8-tarunsh08s-projects.vercel.app" 
    },
    {
      title: "PDF Chatter",
      description: "A trained bot that chats about the PDF you upload, answers to the questions and also provide references.",
      imageUrl: "/images/pdfchat.jpg",
      githubLink: "https://github.com/tarunsh08/PDFchat",
      technologies: ["Next.js", "Tailwind CSS", "Langchain", "Docker", "Express.js", "Clerk"]
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
    },
    {
      title: "Go to github",
      description: "Check out more on GitHub",
      imageUrl: "/images/mygithub.jpg",
      githubLink: "https://github.com/tarunsh08/",
      technologies: []
    },
  ];

  return (
    <section id='projects' className="min-h-screen py-20 px-4 sm:px-8 bg-transparent scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20 text-gray-800 dark:text-white">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 animate-text-shimmer">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-3"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white drop-shadow-lg">
                  {project.title}
                </h3>
              </div>
              
              <div className="p-6 relative">
                <p className="text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-white/20 dark:bg-gray-700/50 text-sm rounded-full text-gray-800 dark:text-gray-200 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-800/80 dark:bg-gray-700/80 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-all hover:shadow-lg"
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
          ))}
        </div>
      </div>
    </section>
  );
}