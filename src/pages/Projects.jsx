import React, { useState, useEffect } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

import studynotion from "../assets/studynotion.png"
import pennytrack from "../assets/pennytrack.png"
import kisandiary from "../assets/kisandiary.png"
import dsaguide from "../assets/dsaguide.png"
import mbappe from "../assets/Mbappe.png"

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

// Enhanced Project Card Component
const ProjectCard = ({ project, index, isLoaded }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl gap-8 lg:gap-16 my-16 transition-all duration-1000 ease-out group ${
        isLoaded ? 'translate-y-0 opacity-100 animate-scaleUp' : 'translate-y-20 opacity-0'
      } ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
      style={{ transitionDelay: `${0.3 + index * 0.3}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative w-[90vw] lg:w-[500px] xl:w-[600px] group/image">
        {/* Enhanced Golden Ring Animation */}
        <div 
          className="absolute -inset-4 rounded-2xl border-2 border-yellow-400/30 opacity-60 group-hover/image:opacity-100 group-hover/image:border-yellow-400/60 transition-all duration-500" 
          style={{ animation: `spin 20s linear infinite` }}
        />
        <div 
          className="absolute -inset-2 rounded-2xl border border-yellow-400/20 opacity-40 group-hover/image:opacity-80 transition-all duration-500" 
          style={{ animation: `spin 15s linear infinite reverse` }}
        />
        
        {/* Enhanced Glassmorphism Container */}
        <div className="relative rounded-2xl bg-gradient-to-br from-yellow-400/5 to-amber-500/5 backdrop-blur-sm border border-yellow-400/20 shadow-2xl overflow-hidden group-hover/image:shadow-yellow-400/30 group-hover/image:border-yellow-400/60 transition-all duration-700">
          
          {/* Project Number - Enhanced */}
          <div className="absolute top-4 left-4 z-20 text-5xl lg:text-6xl font-black text-yellow-400 opacity-90 group-hover/image:scale-125 group-hover/image:rotate-12 transition-all duration-300">
            {project.id}
          </div>
          
          {/* Enhanced Golden Glow Effect */}
          <div className={`absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-amber-500/10 transition-all duration-500 group-hover/image:from-yellow-400/30 group-hover/image:to-amber-500/30`} />
          
          {/* Enhanced Shine Effect */}
          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent transition-all duration-1000 group-hover/image:translate-x-full`} style={{ transform: isHovered ? 'translateX(0)' : 'translateX(-100%)' }} />
          
          {/* Image - Enhanced */}
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-[250px] lg:h-[350px] object-cover transition-all duration-700 group-hover/image:scale-110"
          />
          
          {/* Enhanced Overlay on Hover */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-all duration-500 flex items-end justify-center pb-8 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-yellow-400 font-bold text-lg animate-bounce group-hover/image:scale-125 transition-transform duration-300">
              <ExternalLink size={28} className="group-hover/image:text-yellow-300" />
            </div>
          </div>
          
          {/* Enhanced Floating Golden Sparkles */}
          <div className="absolute top-8 right-8 w-2 h-2 bg-yellow-400 rounded-full animate-ping group-hover/image:scale-150 transition-transform duration-300" />
          <div className="absolute bottom-12 left-12 w-1 h-1 bg-amber-400 rounded-full animate-pulse group-hover/image:scale-125 transition-transform duration-300" />
          <div className="absolute top-1/3 right-12 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-bounce group-hover/image:scale-150 transition-all duration-300" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>

      {/* Project Details - Enhanced */}
      <div className="w-[90vw] lg:w-[500px] xl:w-[600px] flex flex-col gap-4 lg:gap-8 text-center lg:text-left group/details">
        {/* Title - Enhanced */}
        <div className="relative group/title">
          <h3 className="text-2xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent group-hover/title:from-amber-500 group-hover/title:to-yellow-400 transition-all duration-500 animate-shimmer">
            {project.title}
          </h3>
          {/* Enhanced Golden Glow Background */}
          <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/0 to-amber-500/0 group-hover/title:from-yellow-400/20 group-hover/title:to-amber-500/20 rounded-lg blur opacity-0 group-hover/title:opacity-100 transition-all duration-500" />
          {/* Enhanced Animated Underline */}
          <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 w-0 group-hover/title:w-full transition-all duration-700 rounded-full" />
        </div>

        {/* Visit Link - Enhanced */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link relative inline-flex items-center justify-center lg:justify-start gap-3 text-blue-400 hover:text-blue-300 text-xl lg:text-2xl font-semibold transition-all duration-300 group-hover/link:scale-110"
        >
          <span className="relative group-hover/link:text-yellow-400 transition-colors duration-300">
            Click Here to Visit
            <div className="absolute bottom-0 left-0 h-0.5 bg-blue-400 w-0 group-hover/link:w-full group-hover/link:bg-yellow-400 transition-all duration-500" />
          </span>
          <ArrowRight className="group-hover/link:translate-x-2 group-hover/link:scale-125 transition-all duration-300" size={20} />
          
          {/* Enhanced Glowing Effect */}
          <div className="absolute -inset-2 bg-blue-400/0 group-hover/link:bg-yellow-400/20 rounded-lg blur opacity-0 group-hover/link:opacity-100 transition-all duration-300" />
        </a>

        {/* Description - Enhanced */}
        <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-green-400/20 shadow-lg group/desc hover:border-green-400/60 hover:bg-gray-800/70 transition-all duration-500 hover:scale-105">
          {/* Description Text */}
          <p className="text-green-300 text-base lg:text-lg leading-relaxed group-hover/desc:text-green-200 transition-colors duration-300">
            {project.description}
          </p>
          
          {/* Enhanced Corner Decorations */}
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-green-400/40 group-hover/desc:border-green-400/80 group-hover/desc:scale-125 transition-all duration-300" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-green-400/40 group-hover/desc:border-green-400/80 group-hover/desc:scale-125 transition-all duration-300" />
          
          {/* Enhanced Subtle Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent rounded-2xl opacity-0 group-hover/desc:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

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

  const projects = [
    {
      id: '01',
      title: 'StudyNotion - The Ed-Tech Website',
      link: 'https://final-yr-project-nine.vercel.app',
      image: studynotion,
      description: 'StudyNotion is a full-stack Ed-Tech platform built with the MERN stack (MongoDB, Express.js, React, Node.js) that provides a seamless learning experience with role-based access control for students and instructors, enabling course creation, enrollment, progress tracking, and secure payment integration (Razorpay) while delivering a responsive, user-friendly interface powered by Tailwind CSS for optimal accessibility across devices.'
    },
    {
      id: '02',
      title: 'MBAPPE Arts - The Furniture Solution',
      link: 'https://mbappe-arts.vercel.app',
      image: mbappe,
      description: 'MBappe Arts is a furniture e-commerce platform that offers a curated collection of high-quality home furnishings and decor items. The website provides customers with an easy-to-browse online shopping experience where they can explore, select, and purchase furniture pieces that suit their home design preferences.'
    },
    {
      id: '03',
      title: 'PennyTrack - The Finance Tracker',
      link: 'https://finance-tracker-nine-phi.vercel.app/',
      image: pennytrack,
      description: 'PennyTrack is a finance tracker web app built with React, Firebase, and Tailwind CSS that helps users manage expenses in real-time, featuring Firebase authentication, CSV import/export, search/filter functionality, and Google Sign-In for seamless financial tracking.'
    },
    {
      id: '04',
      title: "DSA Assistant - The DSA Guide",
      link: 'https://dsa-agent.vercel.app/',
      image: dsaguide,
      description: "DSA Assistant is an intelligent chatbot built with React, Node.js, and Google Gemini API using RAG (Retrieval-Augmented Generation) architecture. It leverages Pinecone vector database and LangChain framework to answer Data Structures & Algorithms queries by retrieving relevant context from indexed PDF documents, providing accurate, context-aware responses through a beautiful, dark/light themed chat interface."
    },
    {
      id: '05',
      title: "Kisan E-Portal - The Farmer's Guide",
      link: 'https://kisan-diary-xi5k.vercel.app/',
      image: kisandiary,
      description: "Kisan E-Portal is a farmer-centric React app designed for the Agricultural Science Congress, offering 50+ crop guides, real-time weather updates, and government scheme information to enhance farming productivity through an intuitive, mobile-friendly interface."
    }
  ];

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

      {/* Main Content */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center px-5 lg:px-16 py-20">
        
        {/* Enhanced Header Section */}
        <div className={`relative h-[15vh] lg:h-[20vh] flex justify-center items-center mb-16 transition-all duration-1500 ease-out ${isLoaded ? 'translate-y-0 opacity-100 animate-fadeInDown' : 'translate-y-[-50px] opacity-0'}`}>
          {/* Background Text */}
          <div className="absolute text-6xl lg:text-8xl xl:text-9xl font-black text-gray-700/30 select-none animate-pulse group-hover:scale-110 transition-transform duration-300">
            PROJECTS
          </div>
          
          {/* Foreground Text - Enhanced */}
          <div className="relative text-3xl lg:text-5xl xl:text-6xl font-bold z-10 group hover:scale-110 transition-all duration-300">
            <span className="text-white group-hover:text-yellow-300 transition-colors duration-300">MY </span>
            <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent group-hover:from-amber-500 group-hover:to-yellow-400 transition-all duration-500 animate-shimmer">
              WORK
            </span>
          </div>
          
          {/* Enhanced Golden Sparkles */}
          <div className="absolute top-0 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping group-hover:scale-150 transition-transform duration-300" />
          <div className="absolute bottom-0 right-1/4 w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300" />
          <div className="absolute top-1/2 right-0 w-1 h-1 bg-yellow-300 rounded-full animate-bounce group-hover:scale-150 transition-all duration-300" />
        </div>

        {/* Projects List */}
        <div className="flex flex-col items-center w-full">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              isLoaded={isLoaded}
            />
          ))}
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

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
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

        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out;
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }

        .animate-scaleUp {
          animation: scaleUp 0.7s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Projects;
