import React from 'react';

const Footer = () => {
  return (
    <footer className="glass border-t border-gray-200 dark:border-white/10 pt-12 pb-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left mb-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-wider mb-4">HIGH ON HEALTH</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Run • Walk • Cycle<br/>
              42,000+ KM Challenge
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Powered By</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Yi | YUVA | CII | ONE Bharat Spirit</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Join the Movement</h4>
            <div className="flex flex-col gap-2 text-primary text-sm font-medium">
              <span>#HighOnHealth</span>
              <span>#DrugFreeFuture</span>
              <span>#42000KMChallenge</span>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-white/10 pt-8 text-center text-gray-600 dark:text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} HIGH ON HEALTH - 42,000+ KM Challenge. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
