import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle, ArrowRight } from 'lucide-react';
import emailjs from "@emailjs/browser";

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

// Enhanced Contact Info Card Component
const ContactCard = ({ icon: Icon, title, info, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-yellow-400/20 shadow-lg hover:border-yellow-400/60 hover:shadow-yellow-400/30 transition-all duration-500 group hover:scale-105 animate-slideInLeft`}
      style={{ animationDelay: `${delay}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced Icon Container */}
      <div className="relative flex-shrink-0">
        {/* Enhanced Golden Ring Animation */}
        <div 
          className="absolute -inset-2 rounded-full border border-yellow-400/30 opacity-60 group-hover:opacity-100 group-hover:border-yellow-400/80 transition-all duration-500" 
          style={{ animation: `spin 8s linear infinite` }}
        />
        
        {/* Enhanced Icon Background */}
        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-lg group-hover:scale-125 group-hover:shadow-xl group-hover:shadow-yellow-400/50 transition-all duration-300 group-hover:rotate-12">
          <Icon className="text-black text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" size={28} />
          
          {/* Enhanced Pulse Effect */}
          <div className="absolute inset-0 rounded-full bg-yellow-400/50 scale-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700" />
        </div>
        
        {/* Enhanced Floating Sparkles */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300" />
      </div>

      {/* Enhanced Content */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-yellow-400 mb-1 group-hover:text-yellow-300 group-hover:scale-105 transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-300 group-hover:text-white group-hover:font-medium transition-all duration-300 leading-relaxed">
          {info}
        </p>
      </div>

      {/* Enhanced Subtle Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-amber-500/10 rounded-2xl transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  );
};

// Enhanced Form Input Component
const FormInput = ({ type = 'text', name, placeholder, required = false, isTextarea = false, rows = 5, value, onChange, className = '' }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasContent, setHasContent] = useState(false);

  const baseClasses = `
    w-full p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border transition-all duration-300 outline-none text-white placeholder-gray-400
    ${isFocused || hasContent ? 'border-yellow-400/80 shadow-lg shadow-yellow-400/30 scale-105 origin-top' : 'border-gray-600/50'}
    hover:border-yellow-400/60 focus:border-yellow-400/80 focus:shadow-xl focus:shadow-yellow-400/30
    ${className}
  `;

  const handleChange = (e) => {
    setHasContent(e.target.value.length > 0);
    if (onChange) onChange(e);
  };

  if (isTextarea) {
    return (
      <div className="relative group">
        <textarea
          name={name}
          rows={rows}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={baseClasses + ' resize-none'}
        />
        {/* Enhanced Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-amber-400/10 rounded-xl transition-all duration-300 pointer-events-none ${isFocused ? 'opacity-100' : 'opacity-0'}`} />
      </div>
    );
  }

  return (
    <div className="relative group">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={baseClasses}
      />
      {/* Enhanced Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-amber-400/10 rounded-xl transition-all duration-300 pointer-events-none ${isFocused ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  );
};

const Contact = () => {
  const formRef = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill in all fields!");
      return;
    }

    setIsSending(true);

    const hiddenForm = document.createElement('form');
    
    const formFields = [
      { name: 'name', value: formData.name },
      { name: 'email', value: formData.email },
      { name: 'subject', value: formData.subject },
      { name: 'message', value: formData.message }
    ];

    formFields.forEach(field => {
      const input = document.createElement('input');
      input.name = field.name;
      input.value = field.value;
      input.type = 'hidden';
      hiddenForm.appendChild(input);
    });

    document.body.appendChild(hiddenForm);

    emailjs
      .sendForm(
        "service_gaskfo8",
        "template_s3f9vmp",
        hiddenForm,
        "U-ZJSLrOsP8M6nHvj"
      )
      .then(() => {
        setIsSent(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        console.log('Email sent successfully!');
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert("Failed to send message! Please try again.");
      })
      .finally(() => {
        setIsSending(false);
        document.body.removeChild(hiddenForm);
      });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "ADDRESS POINT",
      info: "Jhandichaur west, Kishanpuri, Kotdwara, Uttarakhand, Pin: 246149"
    },
    {
      icon: Mail,
      title: "MAIL ME",
      info: "rawatab2@gmail.com"
    },
    {
      icon: Phone,
      title: "CALL ME",
      info: "+91 91491 87519"
    }
  ];

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Enhanced Animated Background - Same as other pages */}
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
            CONTACT
          </div>
          
          {/* Enhanced Foreground Text */}
          <div className="relative text-3xl lg:text-5xl xl:text-6xl font-bold z-10 group hover:scale-110 transition-all duration-300">
            <span className="text-white group-hover:text-yellow-300 transition-colors duration-300">GET IN </span>
            <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent group-hover:from-amber-500 group-hover:to-yellow-400 transition-all duration-500 animate-shimmer">
              TOUCH
            </span>
          </div>
          
          {/* Enhanced Golden Sparkles */}
          <div className="absolute top-0 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping group-hover:scale-150 transition-transform duration-300" />
          <div className="absolute bottom-0 right-1/4 w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300" />
        </div>

        {/* Main Content Container */}
        <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-16">
          
          {/* Enhanced Contact Information Section */}
          <div className={`flex-1 transition-all duration-1000 ease-out ${isLoaded ? 'translate-x-0 opacity-100 animate-slideInLeft' : 'translate-x-[-100px] opacity-0'}`} style={{ transitionDelay: '0.3s' }}>
            
            {/* Don't be shy! Header - Enhanced */}
            <div className="mb-8 group">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent mb-6 group-hover:from-amber-500 group-hover:to-yellow-400 transition-all duration-300 group-hover:scale-110">
                Don't be shy !
              </h2>
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
            </div>

            {/* Enhanced Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <ContactCard
                  key={index}
                  icon={contact.icon}
                  title={contact.title}
                  info={contact.info}
                  delay={0.6 + index * 0.2}
                />
              ))}
            </div>
          </div>

          {/* Enhanced Contact Form Section */}
          <div className={`flex-1 transition-all duration-1000 ease-out ${isLoaded ? 'translate-x-0 opacity-100 animate-slideInRight' : 'translate-x-[100px] opacity-0'}`} style={{ transitionDelay: '0.6s' }}>
            
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-yellow-400/20 shadow-2xl hover:border-yellow-400/40 hover:shadow-yellow-400/20 transition-all duration-500 group">
              
              {/* Enhanced Form Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-amber-500/5 rounded-3xl group-hover:from-yellow-400/10 group-hover:to-amber-500/10 transition-all duration-500" />
              <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-yellow-400/40 group-hover:border-yellow-400/80 group-hover:scale-125 transition-all duration-300" />
              <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-yellow-400/40 group-hover:border-yellow-400/80 group-hover:scale-125 transition-all duration-300" />

              {isSent ? (
                /* Enhanced Success State */
                <div className="relative z-10 text-center py-16 animate-fadeInUp">
                  <div className="mb-6 inline-block group/success">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg group-hover/success:scale-125 group-hover/success:shadow-2xl group-hover/success:shadow-green-400/50 transition-all duration-300">
                      <CheckCircle size={40} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-green-400 mb-4 group-hover/success:text-green-300 transition-colors duration-300">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-300 mb-8 text-lg group-hover/success:text-gray-200 transition-colors duration-300">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                  <button
                    onClick={() => setIsSent(false)}
                    className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold rounded-xl hover:from-yellow-300 hover:to-amber-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 hover:rotate-2"
                  >
                    {/* Button Shine */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 rounded-xl" />
                    
                    Send Another Message
                    <ArrowRight className="group-hover/btn:translate-x-2 group-hover/btn:scale-125 transition-all duration-300" size={20} />
                  </button>
                </div>
              ) : (
                /* Enhanced Form Container */
                <div className="relative z-10 space-y-6">
                  
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <FormInput
                      name="name"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    <FormInput
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Subject */}
                  <FormInput
                    name="subject"
                    placeholder="Subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                  />

                  {/* Message */}
                  <FormInput
                    name="message"
                    placeholder="Your Message"
                    isTextarea
                    rows={9}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                  />

                  {/* Enhanced Submit Button */}
                  <button
                    onClick={sendEmail}
                    disabled={isSending}
                    className={`group/submit relative w-full py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 overflow-hidden ${
                      isSending
                        ? "bg-gray-600/50 cursor-not-allowed text-gray-400"
                        : "bg-gradient-to-r from-yellow-400 to-amber-500 text-black hover:from-yellow-300 hover:to-amber-400 hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/40 active:scale-95"
                    }`}
                  >
                    {/* Enhanced Button Shine Effect */}
                    {!isSending && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/submit:translate-x-full transition-transform duration-1000" />
                    )}
                    
                    {/* Enhanced Button Content */}
                    <div className="relative flex items-center justify-center gap-3 group-hover/submit:scale-110 transition-all duration-300">
                      {isSending ? (
                        <>
                          <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="group-hover/submit:translate-x-2 group-hover/submit:scale-125 transition-all duration-300" size={20} />
                        </>
                      )}
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Animations - Same as other pages */}
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

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;
