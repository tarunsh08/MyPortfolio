'use client';

import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

export default function Home() {
  const [particles, setParticles] = useState<Array<{
    width: number;
    height: number;
    top: number;
    left: number;
    delay: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    setParticles(Array.from({ length: 20 }, () => ({
      width: Math.random() * 4 + 1,
      height: Math.random() * 4 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10
    })));
  }, []);

  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden">
      <div className="fixed inset-0 z-0 opacity-80 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,182,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,182,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent,transparent,rgba(56,182,255,0.1),transparent)]"></div>
          
          <div className="absolute inset-y-0 left-1/2 w-px bg-blue-400/30 transform -translate-x-1/2"></div>
          <div className="absolute inset-y-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-blue-400 to-transparent transform -translate-x-1/2"></div>
          
          <div className="absolute inset-x-0 top-1/2 h-px bg-blue-400/30 transform -translate-y-1/2"></div>
          <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent transform -translate-y-1/2"></div>
          
          <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-blue-400/50 opacity-70"></div>
          <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-blue-400/50 opacity-70"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-blue-400/50 opacity-70"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-blue-400/50 opacity-70"></div>
        </div>
        
        {particles.map((particle, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-400/30"
            style={{
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              animation: `float ${particle.duration}s linear infinite`,
              animationDelay: `${particle.delay}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <Navbar />

        <div className="flex-1 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full backdrop-blur-sm bg-white/5 rounded-xl p-8 border border-white/10">
            <Hero />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full backdrop-blur-sm bg-white/5 rounded-xl p-8 border border-white/10">
            <Services />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full backdrop-blur-sm bg-white/5 rounded-xl p-8 border border-white/10">
            <Projects />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full backdrop-blur-sm bg-white/5 rounded-xl p-8 border border-white/10">
            <Contact/>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full backdrop-blur-sm bg-white/5 rounded-xl p-8 border border-white/10">
            <About />
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(56, 182, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 182, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
          }
        }
      `}</style>
    </main>
  );
}