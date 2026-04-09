import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
} from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', icon: FaHome, href: '#home' },
    { name: 'About', icon: FaUser, href: '#about' },
    { name: 'Skills', icon: FaCode, href: '#skills' },
    { name: 'Projects', icon: FaProjectDiagram, href: '#projects' },
    { name: 'Contact', icon: FaEnvelope, href: '#contact' },
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="nav-container">
        <motion.div className="logo" whileHover={{ scale: 1.05 }}>
          <span className="logo-text">IS</span>
        </motion.div>

        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={item.href}
                className="clickable"
                onClick={() => setMobileMenuOpen(false)}
              >
                <item.icon className="nav-icon" />
                <span>{item.name}</span>
              </a>
            </motion.li>
          ))}
        </ul>

        <button
          className="mobile-menu-btn clickable"
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
