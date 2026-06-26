import React from 'react';
import { motion } from 'framer-motion';

const Mission = () => {
  const percentage = 34; // Mock value
  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <section id="mission" className="py-24 bg-white/5 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Animated Circular Progress */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
            <svg className="w-64 h-64 md:w-80 md:h-80 transform -rotate-90">
              <circle
                cx="50%"
                cy="50%"
                r={radius}
                className="stroke-gray-800"
                strokeWidth="20"
                fill="none"
              />
              <motion.circle
                initial={{ strokeDashoffset: circumference }}
                whileInView={{ strokeDashoffset }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                cx="50%"
                cy="50%"
                r={radius}
                className="stroke-primary"
                strokeWidth="20"
                fill="none"
                strokeLinecap="round"
                style={{ strokeDasharray: circumference }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-bold text-gray-900 dark:text-white">{percentage}%</span>
              <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">Completed</span>
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white font-display">
              42,000 KM <br/><span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Around The Earth</span>
            </h2>
            
            <div className="space-y-6 mt-8">
              <div className="glass-card !p-4 rounded-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">1</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Anti-Drug Awareness</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Spreading the message for a cleaner future.</p>
                </div>
              </div>
              <div className="glass-card !p-4 rounded-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center text-success font-bold text-xl">2</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Mental Health</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Physical activity boosts mental wellbeing.</p>
                </div>
              </div>
              <div className="glass-card !p-4 rounded-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-warning/20 flex items-center justify-center text-warning font-bold text-xl">3</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Youth Wellness</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Engaging the youth in positive actions.</p>
                </div>
              </div>
              <div className="glass-card !p-4 rounded-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-xl">4</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Fitness & Living</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Promoting a healthy lifestyle.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
