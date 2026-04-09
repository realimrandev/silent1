import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaFigma,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { icon: FaReact, name: 'React', level: 90 },
    { icon: SiNextdotjs, name: 'Next.js', level: 85 },
    { icon: FaJs, name: 'JavaScript', level: 88 },
    { icon: SiTypescript, name: 'TypeScript', level: 75 },
    { icon: FaHtml5, name: 'HTML5', level: 95 },
    { icon: FaCss3Alt, name: 'CSS3', level: 92 },
    { icon: SiTailwindcss, name: 'Tailwind CSS', level: 90 },
    { icon: FaNodeJs, name: 'Node.js', level: 80 },
    { icon: SiMongodb, name: 'MongoDB', level: 75 },
    { icon: FaPython, name: 'Python', level: 70 },
    { icon: FaGitAlt, name: 'Git', level: 85 },
    { icon: FaFigma, name: 'Figma', level: 75 },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">Technologies I work with</p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <skill.icon className="skill-icon" />
              <h3>{skill.name}</h3>
              <div className="skill-bar">
                <motion.div
                  className="skill-progress"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
              <span className="skill-level">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
