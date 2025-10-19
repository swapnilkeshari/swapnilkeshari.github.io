import { motion } from "framer-motion";
import React from "react";

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className="absolute top-0 bottom-0 right-full w-screen h-screen z-30 bg-amber-700"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x:"0%", width:"0%" }}
        exit={{x:["0%", "100%"], width:["0%","100%"]}}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-0 bottom-0 right-full w-screen h-screen z-20 bg-sky-300 dark:bg-green-800"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-0 bottom-0 right-full w-screen h-screen z-10 bg-green-800 dark:bg-sky-300"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      />
    </>
  );
};

export default TransitionEffect;
