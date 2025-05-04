import { useNavigate, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import mastheadImage1 from '../assets/images/masthead-1.jpg';
import mastheadImage2 from '../assets/images/masthead-2.jpg';
import mastheadImage3 from '../assets/images/masthead-3.jpg';
import mastheadImage4 from '../assets/images/masthead-4.jpg';
import mastheadImage5 from '../assets/images/masthead-5.jpg';
import mastheadImage6 from '../assets/images/masthead-6.jpg';
import mastheadImage7 from '../assets/images/masthead-7.jpg';
import mastheadImage8 from '../assets/images/masthead-8.jpg';
import mastheadImage9 from '../assets/images/masthead-9.jpg';
import mastheadImage10 from '../assets/images/masthead-10.jpg';
import mastheadImage11 from '../assets/images/masthead-11.jpg';
import mastheadImage12 from '../assets/images/masthead-12.jpg';
import mastheadImage13 from '../assets/images/masthead-13.jpg';
import mastheadImage14 from '../assets/images/masthead-14.jpg';
import mastheadImage15 from '../assets/images/masthead-15.jpg';




const titles = ["Freedom", "Lifestyle", "Nature"];
function Masthead() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prev) => (prev + 1) % titles.length);
        }, 2000); // Change every 2 seconds
        return () => clearInterval(interval);
      }, []);

  return (
    <div className="masthead flex text-center justify-center items-center">
      <div className="title-masthead-wrapper">
        <div className="title-masthead overflow-hidden relative">
        <AnimatePresence mode="wait">
            <motion.p
              key={titles[index]}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute w-full"
            >
              {titles[index]}
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="subtitle-masthead">
        <span className="start-color">Start </span><span className="from-color">From</span><span className="you-color"> You</span>
        </div>
      </div>
      <div className="masthead-image-left">
        <img src={mastheadImage3} alt="test"/>
      </div>
      <div className="masthead-image-right">
        <img src={mastheadImage5} alt="test"/>
      </div>
      <div className="masthead-image-left-second">
        <img src={mastheadImage4} alt="test"/>
      </div>
      <div className="masthead-image-right-second">
        <img src={mastheadImage1} alt="test"/>
      </div>
      <div className="masthead-image-left-third">
        <img src={mastheadImage2} alt="test"/>
      </div>
      <div className="masthead-image-right-third">
        <img src={mastheadImage8} alt="test"/>
      </div>
      <div className="masthead-image-left-fourth">
        <img src={mastheadImage14} alt="test"/>
      </div>
      <div className="masthead-image-right-fourth">
        <img src={mastheadImage13} alt="test"/>
      </div>
      <div className="masthead-image-left-fifth">
        <img src={mastheadImage15} alt="test"/>
      </div>
      <div className="masthead-image-right-fifth">
        <img src={mastheadImage11} alt="test"/>
      </div>
    </div>
  );
}

export default Masthead;
