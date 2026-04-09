import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
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
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="footer-brand">
            <h3 className="footer-logo">Imran Sabir</h3>
            <p>Full Stack Developer & Prompt Engineer</p>
          </div>

          <div className="footer-social">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link clickable"
                whileHover={{ scale: 1.2, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} Imran Sabir. All rights reserved.</p>
          <p className="made-with">Made with love in Lahore, Pakistan</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
