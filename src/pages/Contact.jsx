import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle, ArrowRight } from 'lucide-react';
import emailjs from "@emailjs/browser"; 

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

// Contact Info Card Component
const ContactCard = ({ icon: Icon, title, info, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-yellow-400/20 shadow-lg hover:border-yellow-400/40 hover:shadow-yellow-400/10 transition-all duration-700 group animate-fadeInUp`}
      style={{ animationDelay: `${delay}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon Container */}
      <div className="relative flex-shrink-0">
        {/* Golden Ring Animation */}
        <div className="absolute -inset-2 rounded-full border border-yellow-400/30 animate-spin opacity-60 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDuration: '8s' }} />
        
        {/* Icon Background */}
        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <Icon className="text-black text-2xl" size={28} />
          
          {/* Pulse Effect */}
          <div className="absolute inset-0 rounded-full bg-yellow-400/50 scale-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700" />
        </div>
        
        {/* Floating Sparkles */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-yellow-400 mb-1 group-hover:text-yellow-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
          {info}
        </p>
      </div>

      {/* Subtle Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-2xl transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  );
};

// Form Input Component
const FormInput = ({ type = 'text', name, placeholder, required = false, isTextarea = false, rows = 5, value, onChange, className = '' }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasContent, setHasContent] = useState(false);

  const baseClasses = `
    w-full p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border transition-all duration-300 outline-none text-white placeholder-gray-400
    ${isFocused || hasContent ? 'border-yellow-400/60 shadow-lg shadow-yellow-400/10' : 'border-gray-600/50'}
    hover:border-yellow-400/40 focus:border-yellow-400/80 focus:shadow-xl focus:shadow-yellow-400/20
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
        {/* Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-amber-400/5 rounded-xl transition-opacity duration-300 pointer-events-none ${isFocused ? 'opacity-100' : 'opacity-0'}`} />
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
      {/* Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-amber-400/5 rounded-xl transition-opacity duration-300 pointer-events-none ${isFocused ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  );
};

const Contact = () => {
  const formRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

  // EmailJS Integration Function
  const sendEmail = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill in all fields!");
      return;
    }

    setIsSending(true);

    // Create a form element with the current data for EmailJS
    const formElement = document.createElement('div');
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

    formElement.appendChild(hiddenForm);
    document.body.appendChild(formElement);

    // EmailJS Implementation - Uncomment when you install EmailJS
    
    emailjs
      .sendForm(
        "service_gaskfo8",    // Your service ID
        "template_s3f9vmp",   // Your template ID  
        hiddenForm,
        "U-ZJSLrOsP8M6nHvj"   // Your public key
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
        // Clean up the temporary form
        document.body.removeChild(formElement);
      });
    
    
    // Temporary simulation for demo (REMOVE this when implementing actual EmailJS)
    setTimeout(() => {
      setIsSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSending(false);
      console.log('Demo: Email would be sent with data:', formData);
    }, 2000);
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
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center px-5 lg:px-16 py-20">
        
        {/* Header Section */}
        <div className={`relative h-[15vh] lg:h-[20vh] flex justify-center items-center mb-16 transition-all duration-1500 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-[-50px] opacity-0'}`}>
          {/* Background Text */}
          <div className="absolute text-6xl lg:text-8xl xl:text-9xl font-black text-gray-700/30 select-none animate-pulse">
            CONTACT
          </div>
          
          {/* Foreground Text */}
          <div className="relative text-3xl lg:text-5xl xl:text-6xl font-bold z-10">
            <span className="text-white">GET IN </span>
            <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent animate-gradient bg-300%">
              TOUCH
            </span>
          </div>
          
          {/* Golden Sparkles */}
          <div className="absolute top-0 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
          <div className="absolute bottom-0 right-1/4 w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
        </div>

        {/* Main Content Container */}
        <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-16">
          
          {/* Contact Information Section */}
          <div className={`flex-1 transition-all duration-1000 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-[-100px] opacity-0'}`} style={{ transitionDelay: '0.3s' }}>
            
            {/* Don't be shy! Header */}
            <div className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent mb-6">
                Don't be shy !
              </h2>
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
            </div>

            {/* Contact Cards */}
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

          {/* Contact Form Section */}
          <div className={`flex-1 transition-all duration-1000 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-[100px] opacity-0'}`} style={{ transitionDelay: '0.6s' }}>
            
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm border border-yellow-400/20 shadow-2xl">
              
              {/* Form Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-amber-500/5 rounded-3xl" />
              <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-yellow-400/40" />
              <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-yellow-400/40" />

              {isSent ? (
                /* Success State */
                <div className="relative z-10 text-center py-16">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg">
                      <CheckCircle size={40} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-green-400 mb-4">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-300 mb-8 text-lg">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                  <button
                    onClick={() => setIsSent(false)}
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold rounded-xl hover:from-yellow-300 hover:to-amber-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Send Another Message
                    <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                  </button>
                </div>
              ) : (
                /* Form Container */
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

                  {/* Submit Button */}
                  <button
                    onClick={sendEmail}
                    disabled={isSending}
                    className={`group relative w-full py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 overflow-hidden ${
                      isSending
                        ? "bg-gray-600/50 cursor-not-allowed text-gray-400"
                        : "bg-gradient-to-r from-yellow-400 to-amber-500 text-black hover:from-yellow-300 hover:to-amber-400 hover:scale-[1.02] shadow-lg hover:shadow-xl hover:shadow-yellow-400/25"
                    }`}
                  >
                    {/* Button Shine Effect */}
                    {!isSending && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    )}
                    
                    {/* Button Content */}
                    <div className="relative flex items-center justify-center gap-3">
                      {isSending ? (
                        <>
                          <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
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
        
        .bg-300% {
          background-size: 300% 300%;
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Contact;