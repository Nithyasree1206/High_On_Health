import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    stravaProfile: '',
    address: '',
    city: ''
  });

  const [status, setStatus] = useState({ loading: false, error: null, success: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });
    
    try {
      await axios.post('/api/participants/register', formData);
      setStatus({ loading: false, error: null, success: true });
      setFormData({
        name: '', phone: '', email: '', age: '', stravaProfile: '', address: '', city: ''
      });
      // Clear success message after 5 seconds
      setTimeout(() => setStatus(s => ({ ...s, success: false })), 5000);
    } catch (err) {
      setStatus({ 
        loading: false, 
        error: err.response?.data?.message || 'Registration failed. Please try again.',
        success: false 
      });
    }
  };

  return (
    <section id="register" className="py-24 bg-black/5 dark:bg-white/5 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="section-title">Join The Challenge</h2>
        
        <div className="flex flex-col md:flex-row gap-8 mt-12">
          {/* Strava Connect Card */}
          <div className="w-full md:w-1/3 glass-card p-6 md:p-8 flex flex-col justify-center items-center text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Connect Strava</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
              We use Strava to automatically sync your activities and update the live distance.
            </p>
            <button className="bg-[#FC4C02] text-white px-6 py-3 rounded-full font-bold hover:bg-[#E34402] transition-colors shadow-lg hover:shadow-[#FC4C02]/40">
              Connect with Strava
            </button>
          </div>

          {/* Registration Form */}
          <div className="w-full md:w-2/3 glass-card p-6 md:p-8">
            {status.success && (
              <div className="mb-6 p-4 bg-success/20 border border-success/50 rounded-lg text-success text-center font-medium">
                Registration submitted successfully! We will review your application.
              </div>
            )}
            {status.error && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center font-medium">
                {status.error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">Full Name *</label>
                  <input required type="text" name="name" onChange={handleChange} className="w-full bg-white dark:bg-surface/50 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">Phone Number *</label>
                  <input required type="tel" name="phone" onChange={handleChange} className="w-full bg-white dark:bg-surface/50 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">Email Address *</label>
                  <input required type="email" name="email" onChange={handleChange} className="w-full bg-white dark:bg-surface/50 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">Age *</label>
                  <input required type="number" name="age" onChange={handleChange} className="w-full bg-white dark:bg-surface/50 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">City *</label>
                  <input required type="text" name="city" onChange={handleChange} className="w-full bg-white dark:bg-surface/50 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">Strava Profile URL</label>
                  <input type="url" name="stravaProfile" onChange={handleChange} className="w-full bg-white dark:bg-surface/50 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">Address</label>
                <textarea name="address" onChange={handleChange} rows="3" className="w-full bg-white dark:bg-surface/50 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary transition-colors"></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status.loading}
                className="w-full btn-primary text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.loading ? 'Submitting...' : 'Submit Registration'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
