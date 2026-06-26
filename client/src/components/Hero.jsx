import React from 'react';
import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import { FaRunning, FaBiking, FaWalking } from 'react-icons/fa';

const Hero = () => {
  const handleLoadedMetadata = (e) => {
    const video = e.target;
    // When video loads, seek to 4 seconds before the end
    if (video.duration > 4) {
      video.currentTime = video.duration - 4;
    }
  };

  const handleTimeUpdate = (e) => {
    const video = e.target;
    // When video reaches the end (with a tiny 0.2s buffer), loop back to the last 4 seconds
    if (video.duration && video.currentTime >= video.duration - 0.2) {
      video.currentTime = Math.max(0, video.duration - 4);
      video.play().catch(() => {});
    }
  };

  return (
    <section id="hero" className="dark relative min-h-screen flex items-center justify-center p-4 overflow-hidden pt-20 bg-background">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px]"></div>
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCA0MGw0MC00ME0wIDIwbDIwLTIwTTAgNjBsNjAtNjBNMjAgNDBsMjAtMjAiLz48L2c+PC9zdmc+')] opacity-20"></div>
      </div>

      {/* Video Background Centerpiece */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-30 md:opacity-50 mix-blend-screen overflow-hidden"
      >
        <video 
          autoPlay 
          muted 
          playsInline
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
          className="min-w-full min-h-full object-cover"
        >
          <source src="/background-video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Futuristic Rotating Earth Animation */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-20 md:opacity-30 mix-blend-screen"
      >
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-primary/20 shadow-[0_0_100px_rgba(37,99,235,0.2)] flex items-center justify-center relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-transparent"></div>
          {/* Faux continents */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-success/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-40 h-24 bg-success/20 rounded-full blur-2xl"></div>
          {/* Animated Latitude/Longitude Lines */}
          <div className="w-full h-[1px] bg-primary/20 absolute top-1/2 left-0"></div>
          <div className="w-[1px] h-full bg-primary/20 absolute top-0 left-1/2"></div>
          <div className="w-full h-full rounded-full border border-primary/20 scale-75"></div>
          <div className="w-full h-full rounded-full border border-primary/20 scale-50"></div>
        </div>
      </motion.div>

      {/* Floating Fitness Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[10%] text-accent/30 text-6xl"
        >
          <FaRunning />
        </motion.div>
        <motion.div 
          animate={{ x: [0, -30, 0], y: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-[15%] text-success/30 text-6xl"
        >
          <FaBiking />
        </motion.div>
        <motion.div 
          animate={{ x: [0, 15, 0], y: [0, 25, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-[20%] text-primary/30 text-5xl"
        >
          <FaWalking />
        </motion.div>
      </div>

      <div className="container mx-auto z-10 text-center relative mt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <span className="text-sm font-semibold tracking-widest text-primary uppercase">The Global Fitness Initiative</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-display text-5xl md:text-8xl font-black mb-6 tracking-tight leading-tight"
        >
          <span className="text-gray-900 dark:text-white">HIGH ON</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">HEALTH</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto font-light"
        >
          Join the <strong className="text-gray-900 dark:text-white font-medium">42,000+ KM Challenge</strong>. Run, walk, and cycle for a drug-free future and a healthier planet.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <CountdownTimer targetDate="2026-07-19T00:00:00" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-14 flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a href="#register" className="btn-cta text-lg flex items-center gap-2">
            Register Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
          </a>
          <a href="#leaderboard" className="text-gray-800 dark:text-white font-medium hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-2">
            View Leaderboard
          </a>
        </motion.div>
        
        {/* Live Stats Cards Row */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 text-left"
        >
          <div className="glass-card text-center group">
            <h3 className="font-display text-4xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">1,240</h3>
            <p className="text-xs tracking-widest text-gray-500 dark:text-gray-400 uppercase mt-2">Participants</p>
          </div>
          <div className="glass-card text-center group">
            <h3 className="font-display text-4xl font-bold text-gray-900 dark:text-white group-hover:text-success transition-colors">14.3K</h3>
            <p className="text-xs tracking-widest text-gray-500 dark:text-gray-400 uppercase mt-2">KM Covered</p>
          </div>
          <div className="glass-card text-center group">
            <h3 className="font-display text-4xl font-bold text-gray-900 dark:text-white group-hover:text-accent transition-colors">34%</h3>
            <p className="text-xs tracking-widest text-gray-500 dark:text-gray-400 uppercase mt-2">Goal Reached</p>
          </div>
          <div className="glass-card text-center group">
            <h3 className="font-display text-4xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">45</h3>
            <p className="text-xs tracking-widest text-gray-500 dark:text-gray-400 uppercase mt-2">Cities</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
