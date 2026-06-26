import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="section-title">Say No To Drugs. <span className="bg-clip-text text-transparent bg-gradient-to-r from-success to-emerald-400">Say Yes To Life.</span></h2>
          
          <div className="glass-card mt-12 text-left group">
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
              <strong className="text-gray-900 dark:text-white font-semibold">High On Health</strong> is a statewide awareness initiative organized by Yi Chennai Chapter, YUVA, CII, and ONE Bharat Spirit.
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mt-6 font-light">
              Participants contribute towards a collective target of <span className="text-primary font-medium">42,000+ kilometers</span>, symbolizing a journey around the Earth while promoting healthy living and anti-drug awareness.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
