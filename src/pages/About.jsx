import React, { useState, useEffect } from "react";

import cvFile from "../assets/AbhijeetSinghRawat_resume.pdf"; 

// Icon Components (using simple SVG since react-icons not available)
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

// Animated Skill Circle Component
const SkillCircle = ({ skill, percentage, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (circumference * percentage) / 100;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="h-[20vh] w-[20vh] relative flex justify-center items-center group hover:scale-110 transition-all duration-500">
      <svg viewBox="0 0 100 100" className="absolute w-full h-full transform -rotate-90">
        {/* Background circle */}
        <circle 
          cx="50" 
          cy="50" 
          r="45" 
          fill="none" 
          stroke="rgba(75, 85, 99, 0.3)" 
          strokeWidth="8"
        />
        {/* Progress circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={isVisible ? strokeDashoffset : circumference}
          className="transition-all duration-2000 ease-out"
        />
      </svg>
      <div className="relative z-10 text-white text-center">
        <div className="text-lg font-bold">{skill}</div>
        <div className="text-sm text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {percentage}%
        </div>
      </div>
      
      {/* SVG Gradient Definition */}
      <svg className="absolute w-0 h-0">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// Timeline Item Component
const TimelineItem = ({ icon: Icon, date, title, description, details,  delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`flex w-full p-5 gap-4 lg:w-[50vw] lg:my-6 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
      <div className="flex relative flex-col">
        <div className="w-[8vh] h-[8vh] rounded-full z-10 flex justify-center items-center bg-gradient-to-r from-yellow-400 to-amber-500 shadow-lg hover:scale-110 transition-all duration-300 group">
          <Icon className="text-2xl lg:text-3xl text-black group-hover:scale-110 transition-transform duration-300" />
        </div>
        { (
          <div className="w-[2px] absolute left-[4vh] top-[8vh] h-[calc(100%-8vh)] bg-gradient-to-b from-yellow-400/60 to-transparent"></div>
        )}
      </div>
      <div className="flex flex-col gap-5 flex-1">
        <div className="bg-gradient-to-r from-gray-700 to-gray-600 px-4 py-2 rounded-full text-center text-sm lg:text-base font-semibold shadow-lg max-w-fit">
          {date}
        </div>
        <div className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          {title}
        </div>
        <div className="text-gray-300 leading-relaxed">
          {description}
        </div>
        {details && (
          <div className="text-lg lg:text-xl font-medium text-yellow-400">
            {details}
          </div>
        )}
      </div>
    </div>
  );
};

// Stats Card Component
const StatsCard = ({ number, description, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumber, setAnimatedNumber] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (isVisible) {
      const numericPart = parseInt(number.replace(/[^0-9]/g, ''));
      let current = 0;
      const increment = numericPart / 30;
      const timer = setInterval(() => {
        current += increment;
        if (current >= numericPart) {
          setAnimatedNumber(numericPart);
          clearInterval(timer);
        } else {
          setAnimatedNumber(Math.floor(current));
        }
      }, 50);
      return () => clearInterval(timer);
    }
  }, [isVisible, number]);

  return (
    <div className={`border-2 border-yellow-400/30 bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-lg h-[20vh] rounded-xl p-7 hover:border-yellow-400/60 hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-500 hover:scale-105 group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent mb-2 lg:mb-4 group-hover:scale-110 transition-transform duration-300">
        {animatedNumber}{number.replace(/[0-9]/g, '')}
      </div>
      <div className="text-lg lg:text-xl font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
        {description}
      </div>
    </div>
  );
};

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Import your CV file - replace with your actual import
  // const cvFile = require('../assets/AbhijeetSinghRawat_resume.pdf');
  // Update this path to your actual CV file

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
        {/* Gold Gradient Mesh */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, #fbbf24 0%, transparent 50%)`
          }}
        />
        
        {/* Floating Gold Particles */}
        {[...Array(30)].map((_, i) => (
          <Particle key={i} delay={i * 0.3} duration={20 + Math.random() * 15} size={2 + Math.random() * 6} />
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
        <div className="absolute top-10 left-10">
          <GlowingOrb size={300} color="gold" />
        </div>
        <div className="absolute bottom-20 right-20">
          <GlowingOrb size={400} color="gold" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col w-full items-center pt-10 pb-20 text-white">
        
        {/* Header Section */}
        <div className={`w-full relative h-[15vh] lg:h-[20vh] flex justify-center items-center transition-all duration-1500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-[-20px] opacity-0'}`}>
          {/* Background text */}
          <div className="text-6xl lg:text-9xl font-extrabold text-gray-600/40 select-none">
            RESUME
          </div>
          {/* Foreground text */}
          <div className="absolute text-3xl lg:text-6xl font-bold">
            ABOUT <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">ME</span>
          </div>
        </div>

        {/* Personal Info Section */}
        <div className={`flex flex-col items-center mt-10 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.3s' }}>
          <div className="mb-8">
            <div className="text-2xl lg:text-5xl lg:my-6 font-bold text-center bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              PERSONAL INFO
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 p-4 lg:p-8">
              {/* Left Column */}
              <div className={`flex flex-col gap-4 lg:gap-6 transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'}`} style={{ transitionDelay: '0.6s' }}>
                <div className="flex gap-2 text-lg lg:text-2xl items-center">
                  <span className="font-semibold">First Name :</span> 
                  <div className="text-gray-400">Abhijeet</div>
                </div>
                <div className="flex gap-2 text-lg lg:text-2xl items-center">
                  <span className="font-semibold">Last Name :</span> 
                  <div className="text-gray-400">Rawat</div>
                </div>
                <div className="flex gap-2 text-lg lg:text-2xl items-center">
                  <span className="font-semibold">Age :</span> 
                  <div className="text-gray-400">22</div>
                </div>
                <div className="flex gap-2 text-lg lg:text-2xl items-center">
                  <span className="font-semibold">Freelance :</span> 
                  <div className="text-green-400 font-semibold">Available</div>
                </div>
                <div className="flex gap-2 text-lg lg:text-2xl items-center">
                  <span className="font-semibold">Phone :</span> 
                  <div className="text-gray-400">+91 91491 87519</div>
                </div>
                <div className="flex gap-2 text-lg lg:text-2xl items-center">
                  <span className="font-semibold">GitHub :</span> 
                  <div className="text-gray-400">
                    <a
                      href="https://github.com/AbhijeetSRawat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-yellow-400 transition-colors duration-300 hover:underline"
                    >
                      Click Here!
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Right Column */}
              <div className={`flex flex-col gap-4 lg:gap-6 transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-[50px] opacity-0'}`} style={{ transitionDelay: '0.9s' }}>
                <div className="flex gap-2 text-lg lg:text-2xl items-center">
                  <span className="font-semibold">LinkedIn :</span>
                  <a
                    href="https://www.linkedin.com/in/abhijeet-singh-rawat-8079011ab/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-yellow-400 transition-colors duration-300 hover:underline"
                  >
                    Click Here!
                  </a>
                </div>
                <div className="flex gap-2 text-lg lg:text-2xl items-center">
                  <span className="font-semibold">Nationality :</span> 
                  <div className="text-gray-400">Indian</div>
                </div>
                <div className="flex gap-2 text-lg lg:text-2xl items-center">
                  <span className="font-semibold">Address :</span>
                  <div className="text-gray-400">Kotdwara, Uttarakhand</div>
                </div>
                <div className="flex gap-2 text-lg lg:text-2xl items-center">
                  <span className="font-semibold">E-mail :</span> 
                  <div className="text-gray-400">rawatab2@gmail.com</div>
                </div>
                <div className="flex gap-2 text-lg lg:text-2xl items-center">
                  <span className="font-semibold">Languages :</span> 
                  <div className="text-gray-400">Hindi, English</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download CV Button */}
        <div className={`w-full lg:w-[25vw] flex justify-center items-center my-8 lg:my-16 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1.2s' }}>
          <a
            href={cvFile}
            download="AbhijeetSinghRawat_Resume.pdf"
            onClick={(e) => {
              // Fallback for when the file path might not work in artifact environment
              if (!cvFile.startsWith('http') && !cvFile.startsWith('/')) {
                e.preventDefault();
                alert('Please update the CV file path in the component. Current path: ' + cvFile);
              }
            }}
            className="group relative flex justify-between items-center border-2 text-xl border-yellow-400/60 bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-lg h-[60px] w-[280px] lg:w-[320px] rounded-full hover:border-yellow-400 hover:from-yellow-400/10 hover:to-amber-500/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl font-semibold overflow-hidden"
          >
            {/* Button Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <span className="relative z-10 pl-16 lg:pl-20 text-white group-hover:text-yellow-300 transition-colors duration-300">
              Download CV
            </span>
            <div className="relative h-[60px] w-[60px] rounded-full flex justify-center items-center bg-gradient-to-r from-yellow-400 to-amber-500 group-hover:scale-110 transition-all duration-300 shadow-lg">
              <FaDownload className="text-black group-hover:scale-110 transition-transform duration-300" />
            </div>
          </a>
        </div>

        {/* Stats Cards */}
        <div className="flex flex-col lg:flex-row lg:gap-10 p-5 mt-5 gap-3 max-w-6xl">
          <div className="flex flex-col gap-3 lg:gap-10">
            <StatsCard number="2+" description="Years of experience with MERN Stack" delay={1500} />
            <StatsCard number="400+" description="Questions done on GFG" delay={1700} />
          </div>
          <div className="flex flex-col gap-3 lg:gap-10">
            <StatsCard number="2+" description="Years of hands on project experience" delay={1600} />
            <StatsCard number="3+" description="Years of experience with DSA" delay={1800} />
          </div>
        </div>

        {/* Experience Section */}
        <div className="w-full flex justify-center text-3xl lg:text-4xl mb-8 font-bold mt-16 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
          EXPERIENCE
        </div>

        <TimelineItem
          icon={FaBriefcase}
          date="June 2025 - Present"
          title="MERN Stack Developer - TECHBRO24"
          description={
            <>
              -Developing scalable web applications using MongoDB, Express.js, React, and Node.js (MERN stack). <br /><br />
              -Building RESTful APIs with JWT authentication & optimizing database performance in MongoDB. <br /> <br />
              -Implementing responsive UIs with React and Tailwind CSS. <br /> <br />
              -Collaborating in agile teams to deliver features and troubleshoot issues.
            </>
          }
          delay={2000}
        />

        {/* Skills Section */}
        <div className="w-full flex justify-center text-3xl lg:text-4xl mb-8 font-bold mt-16 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
          MY SKILLS
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-16 w-full items-center max-w-7xl px-4">
          <div className="grid grid-cols-2 gap-4 lg:gap-8">
            {skills.slice(0, 6).map((skill, index) => (
              <SkillCircle
                key={skill.name}
                skill={skill.name}
                percentage={skill.percentage}
                delay={2200 + index * 100}
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 lg:gap-8 mt-4 lg:mt-0">
            {skills.slice(6, 12).map((skill, index) => (
              <SkillCircle
                key={skill.name}
                skill={skill.name}
                percentage={skill.percentage}
                delay={2800 + index * 100}
              />
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="w-full flex justify-center text-3xl lg:text-4xl mb-8 font-bold mt-16 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
          EDUCATION
        </div>

        <TimelineItem
          icon={IoSchoolSharp}
          date="2021 - 2025"
          title="Bachelor of Technology - College of Technology, Pantnagar"
          description="Pursuing Bachelor of Technology from College of Technology, Pantnagar in Information Technology."
          details="CGPA : 7.70"
          delay={3400}
        />

        <TimelineItem
          icon={IoSchoolSharp}
          date="2020"
          title="Intermediate - M.K.V.N Sr. Sec. School, Kotdwara"
          description="Completed Intermediate in Physics, Chemistry and Mathematics from M.K.V.N Sr. Sec. School, Kotdwara"
          details="Percentage : 93.2%"
          delay={3600}
        />

        <TimelineItem
          icon={IoSchoolSharp}
          date="2018"
          title="High School - M.K.V.N Sr. Sec. School, Kotdwara"
          description="Completed High-School from M.K.V.N Sr. Sec. School, Kotdwara"
          details="Percentage : 93.8%"
          
          delay={3800}
        />
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
        
        .transition-all {
          transition-property: all;
        }
        
        .duration-2000 {
          transition-duration: 2s;
        }
      `}</style>
    </div>
  );
};

export default About;