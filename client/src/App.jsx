import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Hero from './components/Hero';
import About from './components/About';
import Mission from './components/Mission';
import Organizers from './components/Organizers';
import Tracking from './components/Tracking';
import Leaderboard from './components/Leaderboard';
import Registration from './components/Registration';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';

const Home = () => {
  return (
    <div className="min-h-screen relative">
      {/* Navigation */}
      <header className="bg-white/80 dark:glass fixed top-0 w-full z-50 p-4 border-b border-gray-200 dark:border-white/10 backdrop-blur-xl">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wider text-gray-900 dark:text-white">HIGH ON HEALTH</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium">About</a>
            <a href="#mission" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium">Mission</a>
            <a href="#tracking" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium">Tracking</a>
            <a href="#leaderboard" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium">Leaderboard</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="#register" className="btn-cta text-sm px-5 py-2">Join Now</a>
          </div>
        </div>
      </header>

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Mission />
        <Organizers />
        <Tracking />
        <Leaderboard />
        <Registration />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
};

export default App;
