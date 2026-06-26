import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const timerComponents = Object.keys(timeLeft).map((interval, i) => {
    return (
      <motion.div 
        key={interval}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 * i, duration: 0.5 }}
        className="glass-card flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28"
      >
        <span className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">{timeLeft[interval]}</span>
        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider mt-1">{interval}</span>
      </motion.div>
    );
  });

  return (
    <div className="flex justify-center gap-4 mt-8">
      {timerComponents.length ? timerComponents : <span>Event Started!</span>}
    </div>
  );
};

export default CountdownTimer;
