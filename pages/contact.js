import React from "react";
import { motion } from "framer-motion";
const ContactPage = () => {
    return <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{x: 100, opacity: 0}} transition={{duration: 2}}>contacts</motion.div>;
};

export default ContactPage;
