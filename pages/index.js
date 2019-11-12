import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { inherits } from "util";
import BasicCard from "../components/material-mocks/cards/BasicCard";

const imageUrl =
  "https://images.unsplash.com/photo-1573506717854-d9b24b74d7e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80";

const pageVarients = {
  initial: { opacity: 0, x: 100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.2, duration: 2, delayChildren: 2 }
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: { staggerChildren: 0.2, duration: 2, delay: 1 }
  } // if page has orchastration on mount explicit delay is necessary to onmount nested elements first
};

const listVariants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0, transition: { duration: 2 } },
  exit: { opacity: 0, x: 100, transition: { duration: 2 } }
};

const ulVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

const Home = () => {
  return (
    <div>
      <h2>I am pre rendered pre animated</h2>

      <motion.div
        // initial={{ opacity: 0, x: 100 }}
        // animate={{ opacity: 1, x: 0 }}
        // exit={{ opacity: 0, x: 100 }}
        variants={pageVarients}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Hero />
        <div>
           <h3>normal flow render</h3>
        </div>
        <List>
          <motion.li variants={listVariants}>
            <BasicCard />
          </motion.li>
          <motion.li variants={listVariants}>
            <BasicCard />
          </motion.li>
          <motion.li variants={listVariants}>
            <BasicCard />
          </motion.li>
        </List>
        <div>
           <h3>normal flow render</h3>
        </div>
      </motion.div>
    </div>
  );
};

const Hero = styled.section`
  height: 30vh;
  width: 100%;
  background: url(${imageUrl}) center/cover;
`;

const List = styled(motion.ul)`
  display: flex;
  align-items: center;
  justify-content: center;
  & > li {
    margin: 10px;
    max-width: 350px;
  }
`;

export default Home;
