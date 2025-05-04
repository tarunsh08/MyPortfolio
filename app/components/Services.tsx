import React from 'react';
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
    <main className="min-h-screen py-20 px-4 sm:px-8 bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Animated Title */}
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500">
            My Tech Stack
          </span>
          <div className="w-24 h-1 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-xl p-6 bg-white/20 dark:bg-gray-800/50 backdrop-blur-md border border-white/20 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-purple-100/30 dark:from-blue-900/30 dark:to-purple-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="text-4xl mb-3 opacity-80 group-hover:opacity-100 transition-opacity">
                  {getSkillIcon(skill)}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-center">
                  {skill}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
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