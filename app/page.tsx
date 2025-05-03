import Spline from '@splinetool/react-spline/next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

export default function Home() {
  return (
    <main className="relative w-full h-screen ">
      {/* Enhanced Spline background */}
      <div className="fixed inset-0 z-0 opacity-75 pointer-events-none">
        <Spline 
          scene="https://prod.spline.design/aNWXq8T71oJUEITh/scene.splinecode" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
      </div>
      
      {/* Content layer */}
      <div className="relative z-10 h-full flex flex-col">
        <Navbar />
        
        {/* Hero section with better contrast */}
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
    </main>
  );
}