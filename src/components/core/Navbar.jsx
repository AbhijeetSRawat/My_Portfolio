import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Mail, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/portfolio logo.jpeg"

// Logo component
const LogoImage = ({ className }) => (
  <div className={`bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-black font-bold text-lg ${className}`}>
    <img src={logo} alt="logo" className='rounded-full' />
  </div>
);

// Enhanced Navigation Item Component
const NavItem = ({ to, icon: Icon, label, isActive, onClick, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative group animate-fadeInUp`}
      style={{ animationDelay: `${delay}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={() => onClick(to)}
        className={`relative text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center lg:h-16 lg:w-16 transition-all duration-500 ease-in-out transform group-hover:scale-125 ${
          isActive 
            ? 'bg-gradient-to-br from-yellow-400 to-amber-500 text-black shadow-lg shadow-yellow-400/50 scale-110' 
            : 'bg-gradient-to-br from-gray-700/80 to-gray-800/80 backdrop-blur-sm text-white hover:from-yellow-400 hover:to-amber-500 hover:text-black border border-yellow-400/20 hover:border-yellow-400/80 hover:shadow-lg hover:shadow-yellow-400/30'
        }`}
      >
        {/* Enhanced Icon with animation */}
        <Icon className={`transition-all duration-300 ${isHovered || isActive ? 'scale-125 rotate-12' : 'scale-100'}`} size={22} />
        
        {/* Enhanced Pulse effect for active state */}
        {isActive && (
          <>
            <div className="absolute inset-0 rounded-full bg-yellow-400/50 animate-ping" />
            <div className="absolute inset-0 rounded-full border-2 border-yellow-400/30 animate-pulse" />
          </>
        )}
        
        {/* Enhanced Glow effect */}
        <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400/30 to-amber-500/30 transition-all duration-500 blur-sm ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      </button>

      {/* Enhanced Desktop Tooltip */}
      <div className={`absolute left-0 top-0 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full opacity-0 invisible lg:group-hover:visible lg:group-hover:opacity-100 transition-all duration-700 ease-out transform lg:group-hover:scale-100 lg:group-hover:translate-x-20 flex items-center pl-6 pr-4 text-black font-bold shadow-lg shadow-yellow-400/40 z-10 whitespace-nowrap group-hover:scale-110 group-hover:shadow-2xl`}>
        {label}
        
        {/* Arrow pointing to the button */}
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[8px] border-b-[8px] border-r-[12px] border-transparent border-r-yellow-400" />
      </div>

      {/* Enhanced Floating sparkles */}
      <div className={`absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full transition-all duration-300 ${isHovered ? 'animate-ping opacity-100 scale-150' : 'opacity-0 scale-0'}`} />
      <div className={`absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-amber-400 rounded-full transition-all duration-500 ${isHovered ? 'animate-pulse opacity-100 scale-150' : 'opacity-0 scale-0'}`} />
    </div>
  );
};

const Navbar = () => {
  const [activeRoute, setActiveRoute] = useState('/');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
    setActiveRoute(window.location.pathname || '/');
    
    const addMobilePadding = () => {
      if (window.innerWidth < 1024) {
        document.body.style.paddingBottom = '5rem';
      } else {
        document.body.style.paddingBottom = '0';
        document.body.style.paddingLeft = '6rem';
      }
    };
    
    addMobilePadding();
    window.addEventListener('resize', addMobilePadding);
    
    return () => {
      window.removeEventListener('resize', addMobilePadding);
      document.body.style.paddingBottom = '0';
      document.body.style.paddingLeft = '0';
    };
  }, []);

  const handleNavigation = (route) => {
    setActiveRoute(route);
    setIsMobileMenuOpen(false);
    navigate(route);
  };

  const navigationItems = [
    { to: '/', icon: Home, label: 'HOME' },
    { to: '/about', icon: User, label: 'ABOUT ME' },
    { to: '/projects', icon: Briefcase, label: 'MY PROJECTS' },
    { to: '/contact', icon: Mail, label: 'CONTACT ME' }
  ];

  return (
    <>
      {/* Enhanced Background overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-lg z-40 lg:hidden animate-fadeIn"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Main Navigation Container */}
      <div className="relative">
        {/* Enhanced Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed top-4 right-4 z-50 lg:hidden bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm p-3 rounded-full border border-yellow-400/20 hover:border-yellow-400/80 hover:scale-125 hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 shadow-lg group"
        >
          {isMobileMenuOpen ? 
            <X className="text-yellow-400 group-hover:rotate-90 transition-transform duration-300" size={20} /> : 
            <Menu className="text-yellow-400 group-hover:scale-110 transition-transform duration-300" size={20} />
          }
        </button>

        {/* Enhanced Navigation Bar */}
        <nav className={`
          fixed bottom-0 left-0 right-0 lg:top-0 lg:left-0 lg:bottom-auto lg:right-auto
          h-20 lg:h-screen lg:w-24
          bg-gradient-to-r lg:bg-gradient-to-b from-black/90 via-gray-900/95 to-black/90 
          backdrop-blur-xl border-t lg:border-t-0 lg:border-r border-yellow-400/30
          flex lg:flex-col items-center justify-around lg:justify-center lg:gap-8 
          px-4 lg:px-0 py-2 lg:py-8
          transition-all duration-700 ease-out z-30
          shadow-2xl shadow-yellow-400/10
          ${isLoaded ? 'translate-y-0 lg:translate-x-0 opacity-100' : 'translate-y-full lg:translate-x-[-100%] opacity-0'}
          ${isMobileMenuOpen ? 'translate-y-0' : 'translate-y-0'}
        `}>
          
          {/* Enhanced Logo */}
          <div className={`hidden lg:block absolute top-6 transition-all duration-1000 ease-out ${isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-[-20px] opacity-0 scale-75'}`} style={{ transitionDelay: '0.2s' }}>
            <button onClick={() => handleNavigation('/')} className="relative group/logo">
              <LogoImage className="h-16 w-16 shadow-lg group-hover/logo:shadow-yellow-400/50 transition-all duration-300 transform group-hover/logo:scale-125 group-hover/logo:rotate-12" />
              
              {/* Enhanced Logo glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400/30 to-amber-500/30 opacity-0 group-hover/logo:opacity-100 transition-all duration-500 blur-lg" />
              
              {/* Enhanced Spinning ring around logo */}
              <div className="absolute -inset-2 rounded-full border-2 border-yellow-400/30 opacity-0 group-hover/logo:opacity-100 animate-spin transition-all duration-500" style={{ animationDuration: '3s' }} />
              
              {/* Floating sparkles around logo */}
              <div className="absolute -top-2 -right-2 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover/logo:opacity-100 group-hover/logo:animate-ping transition-opacity duration-300" />
            </button>
          </div>

          {/* Enhanced Navigation Items */}
          <div className="flex lg:flex-col items-center gap-4 lg:gap-8 w-full lg:w-auto justify-around lg:justify-center">
            {navigationItems.map((item, index) => (
              <NavItem
                key={item.to}
                to={item.to}
                icon={item.icon}
                label={item.label}
                isActive={activeRoute === item.to}
                onClick={handleNavigation}
                delay={0.1 + index * 0.12}
              />
            ))}
          </div>

          {/* Enhanced Decorative Elements */}
          <div className="hidden lg:block absolute bottom-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-yellow-400/70 to-transparent group-hover:via-yellow-400 transition-all duration-500" />
          </div>

          {/* Enhanced Floating Particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-yellow-400/40 rounded-full animate-pulse"
                style={{
                  left: `${15 + i * 12}%`,
                  top: `${25 + (i % 4) * 20}%`,
                  animationDelay: `${i * 0.4}s`,
                  animationDuration: `${1.5 + i * 0.4}s`
                }}
              />
            ))}
          </div>
        </nav>

        {/* Enhanced Mobile Menu */}
        <div className={`
          fixed top-0 left-0 w-80 h-full bg-gradient-to-b from-black/95 via-gray-900/98 to-black/95 
          backdrop-blur-2xl border-r border-yellow-400/30 z-40 lg:hidden
          transition-all duration-500 ease-out shadow-2xl shadow-yellow-400/20
          ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-[-100%] opacity-0 pointer-events-none'}
        `}>
          
          {/* Enhanced Mobile Logo */}
          <div className={`flex items-center gap-4 p-6 border-b border-yellow-400/30 transition-all duration-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`} style={{ transitionDelay: '0.1s' }}>
            <LogoImage className="h-12 w-12 hover:scale-110 hover:shadow-lg hover:shadow-yellow-400/40 transition-all duration-300" />
            <div className="text-white text-xl font-bold group hover:text-yellow-400 transition-colors duration-300">Abhijeet Rawat</div>
          </div>

          {/* Enhanced Mobile Navigation Items */}
          <div className="flex flex-col gap-3 p-6">
            {navigationItems.map((item, index) => (
              <button
                key={item.to}
                onClick={() => handleNavigation(item.to)}
                className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 transform hover:scale-110 group/mobile-item ${
                  activeRoute === item.to
                    ? 'bg-gradient-to-r from-yellow-400/30 to-amber-500/30 border-2 border-yellow-400/80 text-yellow-400 shadow-lg shadow-yellow-400/30'
                    : 'text-gray-300 hover:bg-gray-800/70 hover:text-yellow-400 border border-transparent hover:border-yellow-400/40 hover:shadow-lg hover:shadow-yellow-400/20'
                }`}
                style={{
                  animation: isMobileMenuOpen ? `slideInLeft 0.5s ease-out forwards` : 'none',
                  animationDelay: isMobileMenuOpen ? `${0.2 + index * 0.1}s` : '0s'
                }}
              >
                <div className={`p-2 rounded-lg transition-all duration-300 group-hover/mobile-item:scale-110 ${
                  activeRoute === item.to 
                    ? 'bg-gradient-to-br from-yellow-400 to-amber-500 text-black shadow-lg' 
                    : 'bg-gray-700/50 text-gray-300 group-hover/mobile-item:bg-yellow-400/20 group-hover/mobile-item:text-yellow-400'
                }`}>
                  <item.icon size={20} />
                </div>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Enhanced Mobile Menu Footer */}
          <div className="absolute bottom-6 left-6 right-6 transition-all duration-500">
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent mb-4 group-hover:via-yellow-400 transition-all duration-500" />
            <p className="text-gray-400 text-sm text-center hover:text-gray-300 transition-colors duration-300">Navigate through my portfolio</p>
          </div>
        </div>
      </div>

      {/* Enhanced Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        /* Custom scrollbar for mobile menu */
        .mobile-menu::-webkit-scrollbar {
          width: 4px;
        }
        
        .mobile-menu::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }
        
        .mobile-menu::-webkit-scrollbar-thumb {
          background: rgba(251, 191, 36, 0.4);
          border-radius: 4px;
        }

        .mobile-menu::-webkit-scrollbar-thumb:hover {
          background: rgba(251, 191, 36, 0.6);
        }
      `}</style>
    </>
  );
};

export default Navbar;
