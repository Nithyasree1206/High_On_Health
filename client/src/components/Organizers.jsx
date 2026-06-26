import React from 'react';
import { motion } from 'framer-motion';

const organizers = [
  {
    name: "Young Indians (Yi)",
    short: "Yi",
    logo: "/logos/yi-logo.png",
    vision: "To become the voice of young Indians globally.",
    mission: "Develop leadership, entrepreneurship, and social responsibility among youth."
  },
  {
    name: "YUVA",
    short: "YUVA",
    logo: "/logos/yuva-logo.png",
    vision: "Empower students beyond academics.",
    mission: "Create future leaders through experiential learning and social engagement."
  },
  {
    name: "CII",
    short: "CII",
    logo: "/logos/cii-logo.png",
    vision: "Building a globally competitive India.",
    mission: "Create a conducive environment for India's growth through industry leadership."
  },
  {
    name: "ONE Bharat Spirit",
    short: "OBS",
    logo: "/logos/obs-logo.png",
    vision: "A united and progressive India.",
    mission: "Inspire citizens to contribute toward nation-building."
  }
];

const Organizers = () => {
  return (
    <section id="organizers" className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Powered By</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {organizers.map((org, index) => (
            <motion.div
              key={org.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="glass-card flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-white/5 mb-6 flex items-center justify-center text-2xl font-bold text-gray-900 dark:text-white group-hover:scale-110 group-hover:bg-primary/20 transition-all overflow-hidden border border-gray-200 dark:border-white/10 p-2">
                <img 
                  src={org.logo} 
                  alt={org.name} 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="hidden opacity-50">{org.short}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{org.name}</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider font-display">Vision</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{org.vision}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-success uppercase tracking-wider font-display">Mission</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{org.mission}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organizers;
