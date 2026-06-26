import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="glass-card flex flex-col md:flex-row gap-12 mt-12">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Yi Chennai Chapter</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1 shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-gray-800 dark:text-gray-300 font-medium">Address</h4>
                  <p className="text-gray-600 dark:text-gray-500 mt-1">123, Wellness Street, Health City, Chennai - 600001, Tamil Nadu, India.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center text-success mt-1 shrink-0">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="text-gray-800 dark:text-gray-300 font-medium">Phone Number</h4>
                  <p className="text-gray-600 dark:text-gray-500 mt-1">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent mt-1 shrink-0">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-gray-800 dark:text-gray-300 font-medium">Email</h4>
                  <p className="text-gray-600 dark:text-gray-500 mt-1">info@highonhealth.in</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Follow Us</h3>
              <p className="text-gray-600 dark:text-gray-500 mb-6">Stay updated with our latest news and events.</p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all"><FaFacebookF /></a>
                <a href="#" className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-400 hover:text-white transition-all"><FaTwitter /></a>
                <a href="#" className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-pink-600 hover:text-white transition-all"><FaInstagram /></a>
                <a href="#" className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white transition-all"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
