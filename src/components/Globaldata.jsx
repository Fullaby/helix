import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function Globaldata() {
  const [isVisible, setIsVisible] = useState(false);
  const observer = useRef(null);

  const observeElement = (entry) => {
    if (entry.isIntersecting) {
      setIsVisible(true); // Element enters the viewport, trigger animation
    } else {
      setIsVisible(false); // Element leaves the viewport, trigger reverse animation
    }
  };

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(observeElement);
    }, { threshold: 0.1 }); // Trigger when 10% of the element is in view

    const elements = document.querySelectorAll('.global-data-items');
    elements.forEach((element) => observer.current.observe(element));

    return () => observer.current.disconnect();
  }, []);

  return (
    <div className="global-data-wrapper">
      <div className="global-data">
        <motion.div
          className="global-data-items global-data-items-1"
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: isVisible ? 0 : 50, // Move up when in view, move down when out of view
            opacity: isVisible ? 1 : 0, // Fade in when in view, fade out when out of view
          }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 25,
          }}
        >
          <span className="global-data-items-title">52%</span>
          <span>Nature is healing overtime with climate issue</span>
        </motion.div>

        <motion.div
          className="global-data-items global-data-items-2"
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: isVisible ? 0 : 50, // Move up when in view, move down when out of view
            opacity: isVisible ? 1 : 0, // Fade in when in view, fade out when out of view
          }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 25,
          }}
        >
          <span className="global-data-items-title">9 in 10</span>
          <span>Nature is healing overtime with climate issue</span>
        </motion.div>

        <motion.div
          className="global-data-items global-data-items-3"
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: isVisible ? 0 : 50, // Move up when in view, move down when out of view
            opacity: isVisible ? 1 : 0, // Fade in when in view, fade out when out of view
          }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 25,
          }}
        >
          <span className="global-data-items-title">100%</span>
          <span>Nature is healing overtime with climate issue</span>
        </motion.div>
      </div>
    </div>
  );
}

export default Globaldata;
