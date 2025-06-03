import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiJavascript, 
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiSupabase,
  SiFirebase 
} from 'react-icons/si';

type SkillKey = 
  | 'JavaScript' 
  | 'TypeScript' 
  | 'React.js' 
  | 'Next.js' 
  | 'Node.js' 
  | 'Express.js' 
  | 'Redux.js' 
  | 'Tailwind CSS' 
  | 'Bootstrap' 
  | 'MongoDB' 
  | 'Supabase' 
  | 'LangChain.js';

export default function Services() {
  const skills: SkillKey[] = [
    'JavaScript', 'TypeScript', 'React.js', 'Next.js', 
    'Node.js', 'Express.js', 'Redux.js', 
    'Tailwind CSS', 'Bootstrap', 'MongoDB','Supabase', 'LangChain.js'
  ];

  return (
    <section id="services">
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen py-20 px-4 sm:px-8 bg-transparent"
      >
        <div className="max-w-6xl mx-auto">
          {/* Animated Title */}
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-center mb-16"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500">
              My Tech Stack
            </span>
            <motion.div 
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1.5 }}
              className="w-24 h-1 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
            />
          </motion.h2>

          {/* Skills Grid */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                }}
                className="relative group overflow-hidden rounded-xl p-6 bg-white/20 dark:bg-gray-800/50 backdrop-blur-md border border-white/20 dark:border-gray-700 shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-purple-100/30 dark:from-blue-900/30 dark:to-purple-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <motion.div 
                    initial={{ opacity: 0.5, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl mb-3 opacity-80 group-hover:opacity-100 transition-opacity"
                  >
                    {getSkillIcon(skill)}
                  </motion.div>
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-center"
                  >
                    {skill}
                  </motion.h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.main>
    </section>
  );
}

function getSkillIcon(skill: SkillKey): React.ReactElement {
  const iconClass = "w-10 h-10 opacity-80 group-hover:opacity-100 transition-opacity duration-300";
  
  const icons: Record<SkillKey, React.ReactElement> = {
    'JavaScript': <SiJavascript className={`${iconClass} text-yellow-400`} />,
    'TypeScript': <SiTypescript className={`${iconClass} text-blue-600`} />,
    'React.js': <SiReact className={`${iconClass} text-blue-500`} />,
    'Next.js': <SiNextdotjs className={`${iconClass} text-black dark:text-white`} />,
    'Node.js': <SiNodedotjs className={`${iconClass} text-green-600`} />,
    'Express.js': <SiExpress className={`${iconClass} text-gray-800 dark:text-gray-300`} />,
    'Redux.js': <SiRedux className={`${iconClass} text-purple-500`} />,
    'Tailwind CSS': <SiTailwindcss className={`${iconClass} text-cyan-500`} />,
    'Bootstrap': <SiBootstrap className={`${iconClass} text-purple-600`} />,
    'MongoDB': <SiMongodb className={`${iconClass} text-green-600`} />,
    'Supabase': <SiSupabase className={`${iconClass} text-green-500`} />,
    'LangChain.js': <SiFirebase className={`${iconClass} text-orange-500`} />
  };

  return icons[skill];
}