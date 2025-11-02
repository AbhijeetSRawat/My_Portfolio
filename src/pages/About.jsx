import React, { useState, useEffect } from "react";
import cvFile from "../assets/AbhijeetSinghRawat_resume.pdf";

// Enhanced Animated Tech Logo Component
const TechLogo = ({ name, percentage, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const logoMap = {
    "C/C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    "DSA": "https://play-lh.googleusercontent.com/9zvNJHedNg_6lOdwcodODMVsyeHKxuTIpnbBzomRGGZAp_vKVXnd5SlF8XZcXyGYjQ",
    "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "ReactJs": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "ExpressJs": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "NodeJs": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "TailwindCSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    "NextJS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "Generative AI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    "Langchain": "https://newrelic.com/sites/default/files/styles/medium/public/quickstarts/images/icons/langchain--logo.png?itok=JPlfUXXw",
    "Pinecone": "https://s3.amazonaws.com/appforest_uf/f1679157815668x357855949495047500/io6cC6vZ_400x400.png",
    "Vector DB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  };

  const logo = logoMap[name];

  return (
    <div 
      className={`flex flex-col items-center justify-center group transition-all duration-700 ${
        isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Animated background glow */}
        <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/0 to-amber-500/0 blur-lg group-hover:from-yellow-400/40 group-hover:to-amber-500/40 transition-all duration-500 ${isHovered ? 'animate-pulse' : ''}`} />
        
        <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-yellow-400/30 flex items-center justify-center hover:border-yellow-400/80 hover:scale-125 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-yellow-400/30 relative z-10 group-hover:rotate-6">
          <img
            src={logo}
            alt={name}
            className="w-14 h-14 lg:w-16 lg:h-16 object-contain group-hover:scale-125 group-hover:rotate-12 transition-all duration-300"
          />
        </div>

        {/* Animated badge */}
        <div className={`absolute -top-3 -right-3 w-11 h-11 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 flex items-center justify-center text-black font-bold text-sm shadow-lg group-hover:scale-150 group-hover:shadow-xl group-hover:shadow-yellow-400/50 transition-all duration-300 animate-pulse`}>
          {percentage}%
        </div>
      </div>

      <h4 className={`mt-4 text-center text-xs lg:text-sm font-semibold text-gray-300 group-hover:text-yellow-300 transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}>
        {name}
      </h4>

      {/* Animated progress bar */}
      <div className="w-16 h-1 bg-gray-700/50 rounded-full mt-2 overflow-hidden group-hover:bg-yellow-400/30 transition-all duration-300">
        <div
          className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-yellow-400/50"
          style={{
            width: isVisible ? `${percentage}%` : "0%",
          }}
        />
      </div>
    </div>
  );
};

// Enhanced Animated Particle
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

// Enhanced Animated Info Card
const InfoCard = ({ label, value, href, isLink = false, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const content = (
    <div 
      className={`flex flex-col gap-2 p-4 rounded-lg border border-yellow-400/20 bg-gradient-to-br from-gray-800/50 to-gray-900/50 hover:border-yellow-400/60 hover:bg-gray-800/70 transition-all duration-300 hover:scale-110 group cursor-pointer ${
        isVisible ? "translate-x-0 opacity-100 animate-slideInLeft" : "-translate-x-5 opacity-0"
      }`} 
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`text-xs text-gray-400 uppercase tracking-wider font-semibold transition-all duration-300 ${isHovered ? 'text-yellow-400 tracking-widest' : ''}`}>
        {label}
      </div>
      <div className="text-sm lg:text-base text-gray-200 group-hover:text-yellow-300 transition-all duration-300 font-medium">
        {value}
      </div>
    </div>
  );

  if (isLink && href) {
    return <a href={href} target="_blank" rel="noopener noreferrer">{content}</a>;
  }

  return content;
};

// Enhanced Animated Timeline Item
const TimelineItem = ({ icon: Icon, date, title, description, details, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`flex w-full p-4 gap-4 lg:w-[50vw] lg:my-4 transition-all duration-700 ${
        isVisible ? "translate-x-0 opacity-100 animate-slideInLeft" : "translate-x-10 opacity-0"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center flex-shrink-0">
        <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-full flex justify-center items-center bg-gradient-to-br from-yellow-400 to-amber-500 shadow-lg hover:scale-125 transition-all duration-300 cursor-pointer group ${isHovered ? 'animate-bounce shadow-2xl shadow-yellow-400/50' : ''}`}>
          <Icon className="text-xl lg:text-2xl text-black group-hover:scale-110 transition-all duration-300 group-hover:rotate-12" />
        </div>
      </div>
      <div className={`flex flex-col gap-2 flex-1 group/card hover:bg-white/5 p-3 rounded-lg transition-all duration-300 ${isHovered ? 'bg-white/10' : ''}`}>
        <div className={`bg-gradient-to-r from-gray-700 to-gray-600 px-3 py-1 rounded-full text-xs font-semibold text-gray-300 w-fit border border-yellow-400/20 transition-all duration-300 ${isHovered ? 'border-yellow-400/60 bg-yellow-400/10 scale-110' : ''}`}>
          {date}
        </div>
        <div className="text-lg lg:text-xl font-bold text-white group-hover/card:text-yellow-300 transition-all duration-300">
          {title}
        </div>
        <div className="text-gray-300 text-sm leading-relaxed group-hover/card:text-gray-200 transition-colors duration-300">
          {description}
        </div>
        {details && (
          <div className="text-sm lg:text-base font-medium text-yellow-400 group-hover/card:text-yellow-300 transition-all duration-300 group-hover/card:scale-105">
            {details}
          </div>
        )}
      </div>
    </div>
  );
};

// Enhanced Animated Stats Card
const StatsCard = ({ number, description, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumber, setAnimatedNumber] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (isVisible) {
      const numericPart = parseInt(number.replace(/[^0-9]/g, ''));
      let current = 0;
      const increment = numericPart / 20;
      const timer = setInterval(() => {
        current += increment;
        if (current >= numericPart) {
          setAnimatedNumber(numericPart);
          clearInterval(timer);
        } else {
          setAnimatedNumber(Math.floor(current));
        }
      }, 60);
      return () => clearInterval(timer);
    }
  }, [isVisible, number]);

  return (
    <div 
      className={`border-2 border-yellow-400/30 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg p-4 hover:border-yellow-400/60 hover:bg-gray-800/70 transition-all duration-300 hover:scale-125 group cursor-pointer ${
        isVisible ? "translate-y-0 opacity-100 animate-scaleUp" : "translate-y-5 opacity-0"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent mb-2 group-hover:scale-125 transition-all duration-300 ${isHovered ? 'animate-pulse' : ''}`}>
        {animatedNumber}{number.replace(/[0-9]/g, '')}
      </div>
      <div className="text-sm lg:text-base font-medium text-gray-300 group-hover:text-white transition-all duration-300">
        {description}
      </div>
    </div>
  );
};

// Enhanced Animated Section Header
const SectionHeader = ({ title, subtitle, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`text-center mb-10 transition-all duration-700 ${
      isVisible ? "translate-y-0 opacity-100 animate-fadeInDown" : "translate-y-5 opacity-0"
    }`}>
      <h2 className="text-2xl lg:text-4xl font-bold text-white mb-2 relative inline-block group hover:scale-110 transition-all duration-300">
        {title}
        <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full group-hover:w-20 transition-all duration-500"></span>
      </h2>
      {subtitle && (
        <p className="text-gray-400 mt-6 text-sm lg:text-base group-hover:text-gray-300 transition-all duration-300">
          {subtitle}
        </p>
      )}
    </div>
  );
};

// Icon Components
const FaDownload = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const FaBriefcase = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-3a1 1 0 00-1 1v1h2V4a1 1 0 00-1-1zM4 9v2h12V9H4z" clipRule="evenodd" />
  </svg>
);

const IoSchoolSharp = () => (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
  </svg>
);

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const skills = [
    { name: "C/C++", percentage: 80 },
    { name: "DSA", percentage: 90 },
    { name: "HTML", percentage: 95 },
    { name: "CSS", percentage: 95 },
    { name: "JavaScript", percentage: 85 },
    { name: "ReactJs", percentage: 85 },
    { name: "ExpressJs", percentage: 80 },
    { name: "MongoDB", percentage: 80 },
    { name: "NodeJs", percentage: 75 },
    { name: "TailwindCSS", percentage: 95 },
    { name: "NextJS", percentage: 70 },
    { name: "SQL", percentage: 70 },
    { name: "Generative AI", percentage: 75 },
    { name: "Langchain", percentage: 65 },
    { name: "Pinecone", percentage: 60 },
    { name: "Vector DB", percentage: 65 },
  ];

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated Background */}
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
      <div className="relative z-10 flex flex-col w-full items-center pt-8 pb-16 text-white px-4">
        
        {/* Hero Section */}
        <div className="w-full text-center mb-12 animate-fadeInDown">
          <h1 className="text-4xl lg:text-5xl font-bold mb-2 group hover:scale-110 transition-all duration-300">
            About <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent group-hover:from-amber-500 group-hover:to-yellow-400">Me</span>
          </h1>
          <p className="text-gray-400 text-base lg:text-lg group-hover:text-gray-300 transition-all duration-300">MERN Stack Developer | DSA Enthusiast | AI/ML Explorer</p>
        </div>

        {/* GET TO KNOW ME SECTION */}
        <div className="w-full max-w-6xl mb-12">
          <SectionHeader title="Get to Know Me" subtitle="Let's connect and explore amazing opportunities together" delay={200} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <InfoCard label="Name" value="Abhijeet Singh Rawat" delay={400} />
            <InfoCard label="Age" value="22 years" delay={500} />
            <InfoCard label="Location" value="Kotdwara, Uttarakhand, India" delay={600} />
            <InfoCard label="Availability" value="Open for Freelance & Full-Time" delay={700} />
            <a href="https://www.linkedin.com/in/abhijeet-singh-rawat-8079011ab/" target="_blank" rel="noopener noreferrer">
              <InfoCard label="LinkedIn" value="Connect with me" delay={800} />
            </a>
            <a href="https://github.com/AbhijeetSRawat" target="_blank" rel="noopener noreferrer">
              <InfoCard label="GitHub" value="View my projects" delay={900} />
            </a>
          </div>
        </div>

        {/* Download CV Button */}
        <a
          href={cvFile}
          download="AbhijeetSinghRawat_Resume.pdf"
          className="group relative flex justify-between items-center border-2 text-lg border-yellow-400/60 bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur h-14 w-72 lg:w-80 rounded-full hover:border-yellow-400 hover:from-yellow-400/10 hover:to-amber-500/10 transition-all duration-500 hover:scale-125 hover:shadow-2xl hover:shadow-yellow-400/40 font-semibold overflow-hidden mb-12 animate-slideUp"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          
          <span className="relative z-10 pl-14 lg:pl-16 text-white group-hover:text-yellow-300 transition-colors duration-300 group-hover:tracking-wider">
            Download CV
          </span>
          <div className="relative h-14 w-14 rounded-full flex justify-center items-center bg-gradient-to-r from-yellow-400 to-amber-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 shadow-lg">
            <FaDownload className="text-black group-hover:scale-125 group-hover:animate-bounce transition-all duration-300" />
          </div>
        </a>

        {/* Stats Section */}
        <div className="w-full max-w-6xl mb-12">
          <SectionHeader title="My Journey" delay={1000} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatsCard number="2+" description="Years with MERN Stack" delay={1200} />
            <StatsCard number="400+" description="DSA Problems Solved" delay={1300} />
            <StatsCard number="2+" description="Years Project Experience" delay={1400} />
            <StatsCard number="3+" description="Years DSA Expertise" delay={1500} />
          </div>
        </div>

        {/* Experience Section */}
        <div className="w-full max-w-6xl mb-8">
          <SectionHeader title="Professional Experience" delay={1600} />
          <TimelineItem
            icon={FaBriefcase}
            date="June 2025 - Present"
            title="MERN Stack Developer"
            description="TECHBRO24 - Building scalable web applications using MongoDB, Express.js, React, and Node.js"
            details="JWT Authentication • Database Optimization • React & Tailwind CSS"
            delay={1800}
          />
        </div>

        {/* Skills Section */}
        <div className="w-full max-w-7xl mt-12 mb-12">
          <SectionHeader title="Technical Expertise" delay={2000} />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
            {skills.map((skill, index) => (
              <TechLogo
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                delay={2200 + index * 100}
              />
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="w-full max-w-6xl">
          <SectionHeader title="Educational Background" delay={4400} />
          <TimelineItem
            icon={IoSchoolSharp}
            date="2021 - 2025"
            title="Bachelor of Technology"
            description="College of Technology, Pantnagar"
            details="Information Technology • CGPA: 7.70"
            delay={4600}
          />
          <TimelineItem
            icon={IoSchoolSharp}
            date="2020"
            title="Intermediate (12th)"
            description="M.K.V.N Sr. Sec. School, Kotdwara"
            details="Physics, Chemistry, Mathematics • Percentage: 93.2%"
            delay={4700}
          />
          <TimelineItem
            icon={IoSchoolSharp}
            date="2018"
            title="High School (10th)"
            description="M.K.V.N Sr. Sec. School, Kotdwara"
            details="Percentage: 93.8%"
            delay={4800}
          />
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 mb-8 animate-fadeInUp group">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:scale-110 transition-all duration-300">Let's Build Something Amazing</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto group-hover:text-gray-300 transition-all duration-300">I'm always excited to collaborate on innovative projects and explore new opportunities.</p>
          <a href="mailto:rawatab2@gmail.com" className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold hover:shadow-2xl hover:shadow-yellow-400/40 transition-all duration-300 hover:scale-125 hover:rotate-3 active:scale-95">
            Get In Touch
          </a>
        </div>
      </div>

      {/* Enhanced Animations */}
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
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        @keyframes fadeInUp {
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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out 4.8s both;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out 1.2s both;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out;
        }

        .animate-scaleUp {
          animation: scaleUp 0.7s ease-out;
        }
      `}</style>
    </div>
  );
};

export default About;
