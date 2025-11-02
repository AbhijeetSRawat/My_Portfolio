import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import portfolio from '../assets/portfoliopic.png'
import portfoliosm from '../assets/portfoliopicsm.png'

// Enhanced Particle component
const Particle = ({ delay = 0 }) => {
  const [position] = useState({
    x: Math.random() * 100,
    y: Math.random() * 100
  });

  return (
    <div 
      className="absolute rounded-full bg-yellow-400/20 blur-sm animate-pulse"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: "4px",
        height: "4px",
        animation: `float 6s infinite ease-in-out`,
        animationDelay: `${delay}s`,
        opacity: 0.8
      }}
    />
  );
};

export default function Dashboard() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
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
      {/* Enhanced Animated Background - Same as About Page */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Enhanced mouse-tracking gradient */}
        <div 
          className="absolute inset-0 opacity-20 transition-all duration-200"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, #fbbf24 0%, transparent 50%)`
          }}
        />
        
        {/* Enhanced Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <Particle key={i} delay={i * 0.2} />
        ))}
        
        {/* Golden Grid Pattern */}
        <div className="absolute inset-0 opacity-5 animate-pulse" style={{
          backgroundImage: `
            linear-gradient(rgba(251, 191, 36, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251, 191, 36, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between p-5 lg:px-16 gap-8 lg:gap-16">
        
        {/* Image Section - Enhanced Animation */}
        <div className="w-[65vw] h-[65vw] lg:w-[400px] lg:h-[500px] flex justify-center items-center relative lg:flex-shrink-0 animate-fadeIn">
          
          {/* Enhanced Golden Ring Animation */}
          <div 
            className="absolute inset-0 rounded-full lg:rounded-3xl border-2 border-yellow-400 opacity-30 group-hover:opacity-60 transition-opacity duration-500" 
            style={{ 
              animation: `spin 20s linear infinite`,
              borderImage: 'linear-gradient(45deg, #fbbf24, #f59e0b, #fbbf24) 1'
            }} 
          />
          <div 
            className="absolute inset-2 rounded-full lg:rounded-3xl border border-yellow-400/50 opacity-20" 
            style={{ 
              animation: `spin 15s linear infinite reverse`,
              animationDirection: 'reverse'
            }} 
          />
          
          {/* Enhanced Glassmorphism Container */}
          <div className="absolute inset-3 rounded-full lg:rounded-3xl bg-gradient-to-br from-yellow-400/10 to-amber-500/5 backdrop-blur-sm border border-yellow-400/20 shadow-2xl group-hover:from-yellow-400/20 group-hover:to-amber-500/15 transition-all duration-500">
            <div className="absolute inset-0 rounded-full lg:rounded-3xl bg-gradient-to-br from-yellow-400/20 to-amber-600/20 animate-pulse" />
          </div>
          
          {/* Image Container - Enhanced */}
          <div className="relative z-10 rounded-full lg:rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-110 group cursor-pointer">
            {/* Enhanced Golden Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-amber-500/0 group-hover:from-yellow-400/40 group-hover:to-amber-500/40 transition-all duration-500 rounded-full lg:rounded-3xl z-10" />
            
            {/* Small Device Image */}
            <img 
              className='block lg:hidden rounded-full w-[60vw] h-[60vw] object-cover shadow-xl border-2 border-yellow-400/30 group-hover:border-yellow-400/80 group-hover:scale-105 relative z-10 transition-all duration-500' 
              src={portfoliosm} 
              alt="Abhijeet Singh Rawat" 
              onError={() => setImageError(true)}
            />
            
            {/* Large Device Image */}
            <img 
              className='hidden lg:block rounded-3xl w-[360px] h-[460px] object-cover shadow-xl border-2 border-yellow-400/30 group-hover:border-yellow-400/80 group-hover:scale-110 relative z-10 transition-all duration-500' 
              src={portfolio} 
              alt="Abhijeet Singh Rawat"
              onError={() => setImageError(true)}
            />
            
            {/* Fallback */}
            {imageError && (
              <div className="rounded-full lg:rounded-3xl w-[60vw] h-[60vw] lg:w-[360px] lg:h-[460px] bg-gradient-to-br from-yellow-400 to-amber-600 shadow-2xl flex items-center justify-center text-2xl lg:text-4xl font-bold text-black group-hover:scale-110 transition-all duration-500">
                <div className="text-center">
                  <div className="text-lg lg:text-3xl mb-2 font-black">ABHIJEET</div>
                  <div className="text-sm lg:text-xl opacity-90 font-semibold">SINGH RAWAT</div>
                  <div className="text-xs lg:text-lg opacity-70 mt-2">DEVELOPER</div>
                </div>
              </div>
            )}
          </div>
          
          {/* Enhanced Floating Golden Sparkles */}
          <div className="absolute top-5 right-5 w-2 h-2 bg-yellow-400 rounded-full animate-ping group-hover:scale-150 transition-transform duration-300" />
          <div className="absolute bottom-10 left-8 w-1 h-1 bg-amber-400 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300" />
          <div className="absolute top-1/3 left-5 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-bounce group-hover:scale-150 transition-all duration-300" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Text Content Section - Enhanced Animation */}
        <div className="mt-6 lg:mt-0 flex flex-col items-center lg:items-start lg:max-w-[700px] animate-slideIn group">
          
          {/* Main Title with Enhanced Animation */}
          <div className="text-3xl font-bold lg:text-5xl xl:text-6xl lg:mb-4 relative group/title text-center lg:text-left hover:scale-110 transition-all duration-300">
            <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent group-hover/title:from-amber-500 group-hover/title:to-yellow-400 transition-all duration-500 animate-shimmer">
              I'M ABHIJEET SINGH RAWAT.
            </span>
            {/* Enhanced Animated Underline */}
            <div className="absolute bottom-0 left-1/2 lg:left-0 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 w-0 group-hover/title:w-full transition-all duration-700 rounded-full" />
          </div>
          
          {/* Subtitle - Enhanced */}
          <h2 className="text-2xl font-bold my-3 lg:text-4xl xl:text-5xl lg:mb-6 text-center lg:text-left text-white group-hover:scale-105 transition-all duration-300 animate-slideInDown">
            FULL-STACK WEB DEVELOPER
          </h2>
          
          {/* Description - Enhanced */}
          <p className="text-center lg:text-left px-3 lg:px-0 mt-2 mb-8 text-base lg:text-lg xl:text-xl lg:mb-10 text-gray-300 leading-relaxed max-w-[600px] group-hover:text-gray-200 transition-all duration-300 animate-slideInUp">
            I am a Full-Stack Web Developer focused on crafting clean and user-friendly experiences. I am passionate about building excellent software that improves the lives of those around me.
          </p>
          
          {/* CTA Button - Enhanced with animations matching About page */}
          <Link to="/about" className="group/btn relative block animate-slideUp">
            <div className="relative flex justify-between items-center border-2 text-lg border-yellow-400/60 bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur h-14 w-72 lg:w-80 rounded-full hover:border-yellow-400 hover:from-yellow-400/10 hover:to-amber-500/10 transition-all duration-500 hover:scale-125 hover:shadow-2xl hover:shadow-yellow-400/40 font-semibold overflow-hidden">
              
              {/* Enhanced Button Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
              
              {/* Enhanced Golden Particles Effect */}
              <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-bounce"
                    style={{
                      left: `${15 + i * 8}%`,
                      top: `${25 + (i % 2) * 50}%`,
                      animationDelay: `${i * 0.1}s`,
                      animationDuration: '0.8s'
                    }}
                  />
                ))}
              </div>
              
              {/* Button Text */}
              <span className="relative z-10 pl-12 lg:pl-14 text-white group-hover/btn:text-yellow-300 transition-all duration-300 font-bold group-hover/btn:tracking-wider">
                MORE ABOUT ME
              </span>

              {/* Arrow Container - Enhanced */}
              <div className="relative h-14 w-14 rounded-full flex justify-center items-center bg-gradient-to-r from-yellow-400 to-amber-500 group-hover/btn:scale-125 group-hover/btn:rotate-12 transition-all duration-300 shadow-lg">
                <FaArrowRightLong className="text-black transition-all duration-300 group-hover/btn:translate-x-2 group-hover/btn:scale-125 text-lg group-hover/btn:animate-bounce" />
                
                {/* Enhanced Golden Ripple Effect */}
                <div className="absolute inset-0 rounded-full bg-yellow-400/50 scale-0 group-hover/btn:scale-150 group-hover/btn:opacity-0 transition-all duration-700" />
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Enhanced Animations - Same as About Page */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px); 
          }
          50% { 
            transform: translateY(-25px) translateX(15px); 
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes shimmer {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-slideIn {
          animation: slideIn 0.8s ease-out 0.3s both;
        }

        .animate-slideInDown {
          animation: slideInDown 0.8s ease-out 0.5s both;
        }

        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out 0.7s both;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out 0.9s both;
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
