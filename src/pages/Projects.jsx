import React, { useState, useEffect } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

// Mock images - replace with your actual imports
import studynotion from "../assets/studynotion.png"
import pennytrack from "../assets/pennytrack.png"
import kisandiary from "../assets/kisandiary.png"
import dsaguide from "../assets/dsaguide.png"
import mbappe from "../assets/mbappe.png"

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

// Project Card Component
const ProjectCard = ({ project, index, isLoaded }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl gap-8 lg:gap-16 my-16 transition-all duration-1000 ease-out ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      } ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
      style={{ transitionDelay: `${0.3 + index * 0.2}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative w-[90vw] lg:w-[500px] xl:w-[600px] group">
        {/* Golden Ring Animation */}
        <div className="absolute -inset-4 rounded-2xl border-2 border-yellow-400/30 animate-spin opacity-60" style={{ animationDuration: '20s' }} />
        <div className="absolute -inset-2 rounded-2xl border border-yellow-400/20 animate-spin opacity-40" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
        
        {/* Glassmorphism Container */}
        <div className="relative rounded-2xl bg-gradient-to-br from-yellow-400/5 to-amber-500/5 backdrop-blur-sm border border-yellow-400/20 shadow-2xl overflow-hidden group-hover:shadow-yellow-400/20 transition-all duration-700 group-hover:border-yellow-400/40">
          
          {/* Project Number */}
          <div className="absolute top-4 left-4 z-20 text-5xl lg:text-6xl font-black text-yellow-400 opacity-90 group-hover:scale-110 transition-transform duration-300">
            {project.id}
          </div>
          
          {/* Golden Glow Effect */}
          <div className={`absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-amber-500/10 transition-all duration-500 ${isHovered ? 'from-yellow-400/20 to-amber-500/20' : ''}`} />
          
          {/* Shine Effect */}
          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent transition-all duration-1000 ${isHovered ? 'translate-x-full' : '-translate-x-full'}`} />
          
          {/* Image */}
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-[250px] lg:h-[350px] object-cover transition-all duration-700 group-hover:scale-105"
          />
          
          {/* Overlay on Hover */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'} flex items-end justify-center pb-8`}>
            <div className="text-yellow-400 font-bold text-lg animate-bounce">
              <ExternalLink size={24} />
            </div>
          </div>
          
          {/* Floating Golden Sparkles */}
          <div className="absolute top-8 right-8 w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
          <div className="absolute bottom-12 left-12 w-1 h-1 bg-amber-400 rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-12 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>

      {/* Project Details */}
      <div className="w-[90vw] lg:w-[500px] xl:w-[600px] flex flex-col gap-4 lg:gap-8 text-center lg:text-left">
        {/* Title */}
        <div className="relative group">
          <h3 className="text-2xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent animate-gradient bg-300%">
            {project.title}
          </h3>
          {/* Golden Glow Background */}
          <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/10 to-amber-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          {/* Animated Underline */}
          <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 w-0 group-hover:w-full transition-all duration-700 rounded-full" />
        </div>

        {/* Visit Link */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center lg:justify-start gap-3 text-blue-400 hover:text-blue-300 text-xl lg:text-2xl font-semibold transition-all duration-300"
        >
          <span className="relative">
            Click Here to Visit
            <div className="absolute bottom-0 left-0 h-0.5 bg-blue-400 w-0 group-hover:w-full transition-all duration-500" />
          </span>
          <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} />
          
          {/* Glowing Effect */}
          <div className="absolute -inset-2 bg-blue-400/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>

        {/* Description */}
        <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-green-400/20 shadow-lg group hover:border-green-400/40 transition-all duration-500">
          {/* Description Text */}
          <p className="text-green-300 text-base lg:text-lg leading-relaxed">
            {project.description}
          </p>
          
          {/* Corner Decorations */}
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-green-400/40 group-hover:border-green-400/80 transition-colors duration-300" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-green-400/40 group-hover:border-green-400/80 transition-colors duration-300" />
          
          {/* Subtle Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
      id: '03',
      title: "DSA Assistant - The DSA Guide",
      link: 'https://dsa-agent.vercel.app/',
      image: dsaguide,
      description: "DSA Assistant is an intelligent chatbot built with React, Node.js, and Google Gemini API using RAG (Retrieval-Augmented Generation) architecture. It leverages Pinecone vector database and LangChain framework to answer Data Structures & Algorithms queries by retrieving relevant context from indexed PDF documents, providing accurate, context-aware responses through a beautiful, dark/light themed chat interface."
    },
    {
      id: '04',
      title: "Kisan E-Portal - The Farmer's Guide",
      link: 'https://kisan-diary-xi5k.vercel.app/',
      image: kisandiary,
      description: "Kisan E-Portal is a farmer-centric React app designed for the Agricultural Science Congress, offering 50+ crop guides, real-time weather updates, and government scheme information to enhance farming productivity through an intuitive, mobile-friendly interface."
    }
  ];

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
        {[...Array(30)].map((_, i) => (
          <Particle key={i} delay={i * 0.3} duration={12 + Math.random() * 8} size={2 + Math.random() * 6} />
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
        <div className="absolute top-32 left-20">
          <GlowingOrb size={400} color="gold" />
        </div>
        <div className="absolute bottom-32 right-20">
          <GlowingOrb size={300} color="gold" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <GlowingOrb size={500} color="gold" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center px-5 lg:px-16 py-20">
        
        {/* Header Section */}
        <div className={`relative h-[15vh] lg:h-[20vh] flex justify-center items-center mb-16 transition-all duration-1500 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-[-50px] opacity-0'}`}>
          {/* Background Text */}
          <div className="absolute text-6xl lg:text-8xl xl:text-9xl font-black text-gray-700/30 select-none animate-pulse">
            PROJECTS
          </div>
          
          {/* Foreground Text */}
          <div className="relative text-3xl lg:text-5xl xl:text-6xl font-bold z-10">
            <span className="text-white">MY </span>
            <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent animate-gradient bg-300%">
              WORK
            </span>
          </div>
          
          {/* Golden Sparkles */}
          <div className="absolute top-0 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
          <div className="absolute bottom-0 right-1/4 w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
          <div className="absolute top-1/2 right-0 w-1 h-1 bg-yellow-300 rounded-full animate-bounce" />
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

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
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
  );
};

export default Projects;