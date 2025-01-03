import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const LiIcon = ({ reference, time }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
    layoutEffect: false,
  });
  return (
    <figure className="stroke-emerald-500 absolute left-0 dark:stroke-teal-500 ">
      <svg className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]" width="75" height="75" viewBox="0 0 100 100"> 
        <circle
          cx="75"
          cy="50"
          r="20"
          pathLength="1"
          className="stroke-0 fill-light dark:fill-dark"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          pathLength="1"
          className="fill-transparent stroke-[5px] dark:fill-transparent"
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          pathLength="1"
          className="animate-pulse stroke-0 fill-fuchsia-800 dark:fill-blue-500"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;