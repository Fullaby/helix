import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.classList.toggle("light", !isDark);
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm">{isDark ? "🌙" : "☀️"}</span>
      <div
        onClick={toggleTheme}
        className={`w-16 h-8 flex items-center rounded-full px-1 cursor-pointer transition-colors duration-300 ${
          isDark ? "bg-gray-800" : "bg-gray-300"
        }`}
        style={{ willChange: "background-color" }}
      >
        <motion.div
          className="w-6 h-6 bg-white dark:bg-black rounded-full shadow-md"
          animate={{ x: isDark ? 32 : 0 }}
          transition={{
            type: "spring",
            stiffness: 80,  
            damping: 25,     
            mass: 0.5,       
          }}
          style={{
            willChange: "transform", 
          }}
        />
      </div>
    </div>
  );
};

export default ThemeToggle;
