import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const data = [
  { name: 'Mon', distance: 4000 },
  { name: 'Tue', distance: 3000 },
  { name: 'Wed', distance: 2000 },
  { name: 'Thu', distance: 2780 },
  { name: 'Fri', distance: 1890 },
  { name: 'Sat', distance: 2390 },
  { name: 'Sun', distance: 3490 },
];

const Tracking = () => {
  const [stats, setStats] = useState({
    totalParticipants: 0,
    totalDistance: 0,
    participatingCities: 0
  });

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await axios.get('/api/analytics');
        if (res.data && typeof res.data.totalDistance !== 'undefined') {
          setStats(res.data);
        }
      } catch (err) {
        console.error('Error fetching analytics:', err);
      }
    };
    fetchAnalytics();
  }, []);

  return (
    <section id="tracking" className="py-24 bg-black/5 dark:bg-white/5 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Live Distance Tracking</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="glass-card text-center group">
            <h4 className="text-gray-400 text-sm tracking-widest uppercase mb-2">Total Distance</h4>
            <p className="text-3xl font-bold text-primary group-hover:scale-105 transition-transform">{stats.totalDistance.toLocaleString()} KM</p>
          </div>
          <div className="glass-card text-center group">
            <h4 className="text-gray-400 text-sm tracking-widest uppercase mb-2">Participating Cities</h4>
            <p className="text-3xl font-bold text-success group-hover:scale-105 transition-transform">{stats.participatingCities}</p>
          </div>
          <div className="glass-card text-center group">
            <h4 className="text-gray-400 text-sm tracking-widest uppercase mb-2">Avg Per Participant</h4>
            <p className="text-3xl font-bold text-gray-900 dark:text-white group-hover:scale-105 transition-transform">
              {stats.totalParticipants > 0 ? (stats.totalDistance / stats.totalParticipants).toFixed(1) : 0} KM
            </p>
          </div>
          <div className="glass-card text-center group">
            <h4 className="text-gray-400 text-sm tracking-widest uppercase mb-2">Active Participants</h4>
            <p className="text-3xl font-bold text-accent group-hover:scale-105 transition-transform">{stats.totalParticipants}</p>
          </div>
        </div>

        <div className="glass-card h-96">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorDistance" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563EB" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '0.5rem' }}
                itemStyle={{ color: '#fff' }}
              />
              <Area type="monotone" dataKey="distance" stroke="#2563EB" fillOpacity={1} fill="url(#colorDistance)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default Tracking;
