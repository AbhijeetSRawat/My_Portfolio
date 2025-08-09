import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import portfolio from '../assets/portfoliopic.png'
import portfoliosm from '../assets/portfoliopicsm.png'

// Particle component for floating background elements
const Particle = ({ delay = 0, duration = 20, size = 4 }) => {
  const [position, setPosition] = useState({
    x: Math.random() * 100,
    y: Math.random() * 100
  });

  return (
    <div 
      className="absolute rounded-full bg-gradient-to-r from-yellow-400/20 to-amber-400/20 blur-sm"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: `${size}px`,
        height: `${size}px`,
        animation: `float ${duration}s infinite linear`,
        animationDelay: `${delay}s`
      }}
    />
  );
};

// Glowing orb component
const GlowingOrb = ({ size = 200, color = "gold" }) => (
  <div 
    className={`absolute rounded-full opacity-20 animate-pulse`}
    style={{
      width: `${size}px`,
      height: `${size}px`,
      background: `radial-gradient(circle, ${color === 'gold' ? '#fbbf24' : '#f59e0b'} 0%, transparent 70%)`,
      filter: 'blur(40px)',
      animation: 'glow 4s ease-in-out infinite alternate'
    }}
  />
);

export default function Dashboard() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gold Gradient Mesh */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, #fbbf24 0%, transparent 50%)`
          }}
        />
        
        {/* Floating Gold Particles */}
        {[...Array(25)].map((_, i) => (
          <Particle key={i} delay={i * 0.4} duration={15 + Math.random() * 10} size={2 + Math.random() * 6} />
        ))}
        
        {/* Golden Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(rgba(251, 191, 36, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251, 191, 36, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
        
        {/* Glowing Golden Orbs */}
        <div className="absolute top-20 left-20">
          <GlowingOrb size={400} color="gold" />
        </div>
        <div className="absolute bottom-20 right-20">
          <GlowingOrb size={300} color="gold" />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between p-5 lg:px-16">
        
        {/* Image Section */}
        <div className={`w-[65vw] h-[65vw] lg:w-[400px] lg:h-[500px]  flex justify-center items-center relative lg:flex-shrink-0 transition-all duration-1500 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          
          {/* Golden Ring Animation */}
          <div className="absolute inset-0 rounded-full lg:rounded-3xl border-2 border-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 animate-spin opacity-30  " style={{ animationDuration: '20s' }} />
          <div className="absolute inset-2 rounded-full lg:rounded-3xl border border-yellow-400/50 animate-spin opacity-20 " style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
          
          {/* Glassmorphism Container */}
          <div className="absolute inset-3 rounded-full lg:rounded-3xl bg-gradient-to-br from-yellow-400/10 to-amber-500/5 backdrop-blur-sm border border-yellow-400/20 shadow-2xl">
            <div className="absolute inset-0 rounded-full lg:rounded-3xl bg-gradient-to-br from-yellow-400/20 to-amber-600/20 animate-pulse" />
          </div>
          
          {/* Image Container */}
          <div className="relative z-10 rounded-full lg:rounded-3xl  overflow-hidden shadow-2xl transition-all duration-700 hover:scale-105 group">
            {/* Golden Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 group-hover:from-yellow-400/40 group-hover:to-amber-500/40 transition-all duration-500 rounded-full lg:rounded-3xl" />
            
            {/* Small Device Image - Only visible on mobile/tablet */}
            <img 
              className='block lg:hidden rounded-full w-[60vw] h-[60vw] object-cover shadow-xl border-2 border-yellow-400/30 relative z-10 transition-all duration-700 hover:border-yellow-400/60' 
              src={portfoliosm} 
              alt="Abhijeet Singh Rawat" 
              onError={() => setImageError(true)}
            />
            
            {/* Large Device Image - Only visible on lg screens and above */}
            <img 
              className='hidden lg:block rounded-3xl w-[360px] h-[460px] object-cover shadow-xl border-2 border-yellow-400/30 relative z-10 transition-all duration-700 hover:border-yellow-400/60' 
              src={portfolio} 
              alt="Abhijeet Singh Rawat"
              onError={() => setImageError(true)}
            />
            
            {/* Fallback when images don't load */}
            {imageError && (
              <div className="rounded-full lg:rounded-3xl w-[60vw] h-[60vw] lg:w-[360px] lg:h-[460px] bg-gradient-to-br from-yellow-400 to-amber-600 shadow-2xl flex items-center justify-center text-2xl lg:text-4xl font-bold text-black relative z-10">
                <div className="text-center">
                  <div className="text-lg lg:text-3xl mb-2 font-black">ABHIJEET</div>
                  <div className="text-sm lg:text-xl opacity-90 font-semibold">SINGH RAWAT</div>
                  <div className="text-xs lg:text-lg opacity-70 mt-2">DEVELOPER</div>
                </div>
              </div>
            )}
          </div>
          
          {/* Floating Golden Sparkles */}
          <div className="absolute top-5 right-5 w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
          <div className="absolute bottom-10 left-8 w-1 h-1 bg-amber-400 rounded-full animate-pulse" />
          <div className="absolute top-1/3 left-5 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Text Content Section */}
        <div className={`mt-10 lg:mt-0 flex flex-col items-center lg:items-start lg:max-w-[800px] lg:ml-20 transition-all duration-1500 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`} style={{ transitionDelay: '0.3s' }}>
          
          {/* Main Title with Golden Effect */}
          <div className="text-2xl font-bold lg:text-5xl xl:text-6xl lg:font-bold lg:mb-5 relative group text-center lg:text-left">
            <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent animate-pulse bg-300% animate-gradient">
              I'M ABHIJEET SINGH RAWAT.
            </span>
            {/* Golden Glow Background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 to-amber-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Animated Underline */}
            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 w-0 group-hover:w-full transition-all duration-700 rounded-full" />
          </div>
          
          {/* Subtitle */}
          <div className={`text-2xl font-bold my-2 lg:text-5xl xl:text-6xl lg:font-bold lg:mb-8 transition-all duration-1000 text-center lg:text-left ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.6s' }}>
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              FULL-STACK WEB DEVELOPER
            </span>
          </div>
          
          {/* Description */}
          <div className={`text-center lg:text-left px-3 lg:px-0 mt-1 mb-8 lg:text-xl xl:text-2xl lg:mb-12 text-gray-300 leading-relaxed max-w-[550px] transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.9s' }}>
            I am a Full-Stack Web Developer focused on crafting clean and user-friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
          </div>
          
          {/* CTA Button */}
          <div className={`transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1.2s' }}>
            <Link to="/about" className="group relative block">
              <div className="relative flex justify-between items-center h-[60px] w-[280px] lg:w-[320px] font-semibold rounded-full border-2 border-yellow-400/60 bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-lg hover:from-yellow-400/10 hover:to-amber-500/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-yellow-400 overflow-hidden">
                
                {/* Button Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                {/* Golden Particles Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-bounce"
                      style={{
                        left: `${20 + i * 10}%`,
                        top: `${30 + (i % 2) * 40}%`,
                        animationDelay: `${i * 0.1}s`,
                        animationDuration: '1s'
                      }}
                    />
                  ))}
                </div>
                
                {/* Button Text */}
                <div className="relative z-10 pl-8 text-white group-hover:text-yellow-300 transition-colors duration-300 font-bold text-lg">
                  MORE ABOUT ME
                </div>

                {/* Arrow Container */}
                <div className="relative h-[60px] w-[60px] flex justify-center items-center bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full group-hover:scale-110 group-hover:from-yellow-300 group-hover:to-amber-400 transition-all duration-300 shadow-lg">
                  <FaArrowRightLong className="text-black font-bold transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 text-lg" />
                  
                  {/* Golden Ripple Effect */}
                  <div className="absolute inset-0 rounded-full bg-yellow-400/50 scale-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-30px) rotate(180deg); opacity: 0.8; }
          100% { transform: translateY(0px) rotate(360deg); opacity: 0.3; }
        }
        
        @keyframes glow {
          0% { transform: scale(1); opacity: 0.2; }
          100% { transform: scale(1.2); opacity: 0.4; }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .bg-300% {
          background-size: 300% 300%;
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 4s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  )
}