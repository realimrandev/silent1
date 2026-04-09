import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const GhostCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const followerX = useMotionValue(-100);
  const followerY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const followerSpringConfig = { damping: 30, stiffness: 400 };

  const smoothCursorX = useSpring(cursorX, springConfig);
  const smoothCursorY = useSpring(cursorY, springConfig);
  const smoothFollowerX = useSpring(followerX, followerSpringConfig);
  const smoothFollowerY = useSpring(followerY, followerSpringConfig);

  useEffect(() => {
    const onMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      window.setTimeout(() => {
        followerX.set(e.clientX);
        followerY.set(e.clientY);
      }, 100);
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    const onHoverStart = () => setIsHovering(true);
    const onHoverEnd = () => setIsHovering(false);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    const interactiveElements = document.querySelectorAll('a, button, .clickable');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onHoverStart);
      el.addEventListener('mouseleave', onHoverEnd);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onHoverStart);
        el.removeEventListener('mouseleave', onHoverEnd);
      });
    };
  }, [cursorX, cursorY, followerX, followerY]);

  if (typeof window === 'undefined') return null;

  return (
    <>
      {isVisible && (
        <>
          <motion.div
            className="cursor-dot"
            style={{
              x: smoothCursorX,
              y: smoothCursorY,
              translateX: '-50%',
              translateY: '-50%',
            }}
          />
          <motion.div
            className={`cursor-follower ${isHovering ? 'hovering' : ''}`}
            style={{
              x: smoothFollowerX,
              y: smoothFollowerY,
              translateX: '-50%',
              translateY: '-50%',
            }}
          />
        </>
      )}
    </>
  );
};

export default GhostCursor;
