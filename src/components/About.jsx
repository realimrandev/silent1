import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const About = () => {
  const details = [
    {
      icon: FaGraduationCap,
      label: 'Education',
      value: '6 Months Web Development Course from Corvit',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Lahore, Punjab, Pakistan',
    },
    { icon: FaEnvelope, label: 'Email', value: 'imransabir2005@gmail.com' },
    { icon: FaPhone, label: 'Phone', value: '03294963776' },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">Get to know me better</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Who am I?</h3>
            <p>
              I'm <strong className="gradient-text">Imran Sabir</strong>, a passionate Full Stack
              Developer and Senior Prompt Engineer based in Lahore, Pakistan. I specialize in creating
              modern, responsive web applications using cutting-edge technologies.
            </p>
            <p>
              With expertise in React, frontend and backend development, and AI integration, I bring
              ideas to life through clean, efficient code and stunning designs. I'm constantly learning
              and exploring new technologies to stay ahead in the ever-evolving tech landscape.
            </p>
            <p>
              My goal is to create impactful digital solutions that make a difference. Let's build
              something amazing together!
            </p>
          </motion.div>

          <motion.div
            className="about-details"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {details.map((detail, index) => (
              <motion.div
                key={detail.label}
                className="detail-card"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <detail.icon className="detail-icon" />
                <h4>{detail.label}</h4>
                <p>{detail.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
