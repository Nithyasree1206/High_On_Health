import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await axios.get('/api/leaderboard');
        if (Array.isArray(res.data)) {
          setLeaders(res.data);
        } else {
          throw new Error('Invalid data format received from server.');
        }
      } catch (err) {
        setError('Failed to load leaderboard data.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchLeaderboard();
  }, []);

  return (
    <section id="leaderboard" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="section-title">Top 10 Leaders</h2>
        
        <div className="glass-card mt-12">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400">
                  <th className="pb-4 font-semibold pl-4">Rank</th>
                  <th className="pb-4 font-semibold">Name</th>
                  <th className="pb-4 font-semibold">City</th>
                  <th className="pb-4 font-semibold text-right pr-4">Distance (KM)</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="4" className="py-8 text-center text-gray-500 dark:text-gray-400">Loading leaderboard...</td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan="4" className="py-8 text-center text-red-600 dark:text-red-400">{error}</td>
                  </tr>
                ) : leaders.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="py-8 text-center text-gray-500 dark:text-gray-400">No participants have recorded distance yet.</td>
                  </tr>
                ) : (
                  leaders.map((leader, index) => {
                    const rank = index + 1;
                    return (
                      <motion.tr 
                        key={leader._id || index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="border-b border-gray-300 dark:border-gray-800 hover:bg-gray-100/50 dark:hover:bg-white/5 transition-colors"
                      >
                        <td className="py-4 pl-4">
                          {rank === 1 && <span className="text-yellow-400 font-bold text-xl">🥇</span>}
                          {rank === 2 && <span className="text-gray-400 dark:text-gray-300 font-bold text-xl">🥈</span>}
                          {rank === 3 && <span className="text-amber-600 font-bold text-xl">🥉</span>}
                          {rank > 3 && <span className="font-bold text-gray-600 dark:text-gray-400 ml-2">{rank}</span>}
                        </td>
                        <td className="py-4 font-medium text-gray-900 dark:text-white">{leader.name}</td>
                        <td className="py-4 text-gray-600 dark:text-gray-400">{leader.city}</td>
                        <td className="py-4 text-right pr-4 font-bold text-primary">{leader.totalDistance || 0}</td>
                      </motion.tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 text-center">
            <button className="btn-primary">View Full Leaderboard</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
