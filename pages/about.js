import React from "react";
import {motion} from 'framer-motion'

const About = () => {
    return <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{x: 100, opacity: 0}} transition={{duration: 1}}>about</motion.div>;
};

export default About;
