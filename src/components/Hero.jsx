import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';

const Hero = () => {
  const socialLinks = [
    {
      icon: FaInstagram,
      url: 'https://www.instagram.com/cybernaticdream?igsh=aTE2ZWtsbDhsNmxx',
      label: 'Instagram',
    },
    {
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/imran-sabir-developer',
      label: 'LinkedIn',
    },
    {
      icon: FaTiktok,
      url: 'https://www.tiktok.com/@cybernetic_dream?_r=1&_t=ZS-95MHRW2EZy4',
      label: 'TikTok',
    },
  ];

  return (
    <section id="home" className="hero">
      <div className="glow-effect"></div>
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="badge-text">👋 Welcome to my portfolio</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I'm <span className="gradient-text">Imran Sabir</span>
          </motion.h1>

          <motion.h2
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Senior Prompt Engineer & Full Stack Developer
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Crafting digital experiences with modern web technologies. Specialized in React, AI
            integration, and creating stunning user interfaces.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a href="#projects" className="btn btn-primary clickable">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary clickable">
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            className="hero-social"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link clickable"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="image-wrapper float-animation">
            <div className="image-glow"></div>
            <img
              src="/images/profile.jpg"
              alt="Imran Sabir"
              className="profile-image"
              onError={(e) => {
                e.currentTarget.src =
                  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%236366f1" width="200" height="200"/%3E%3Ctext fill="white" font-size="80" x="50%" y="50%" text-anchor="middle" dy=".3em"%3EIS%3C/text%3E%3C/svg%3E';
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
