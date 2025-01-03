import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work, children }) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[90%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} height={height}/>
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        
        <div className="grid grid-cols-2 gap-10 pt-0 items-start">
            {/* Left Content: Title */}
            <div className="md:pr-8">
              <h3 className="text-right capitalize font-bold text-2xl sm:text-xl xs:text-lg  text-dark/50 dark:text-light/50">
                {position}
              </h3>
            </div>

            {/* Right Content: Other Details */}
            <div>
            <a
                  className="capitalize font-medium"
                  href={companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                {company}
                </a>
                <br/>
              <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
                {time} | {address}
              </span>
              <p className="font-medium w-full md:text-sm mt-2">
                {work}
              </p>
              {children}
            </div>
          </div>

      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 40%", "end 50%"],
  });
  return (

    <div ref={ref} className="my-64">
    <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
      Experience
    </h2>
  
    <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
      <motion.div
        className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-transparent 
        bg-gradient-to-b from-transparent via-blue-500 to-purple-500 from-[30%] via-[70%]
        dark:bg-gradient-to-t dark:from-purple-500 dark:via-blue-500 dark:to-transparent dark:from-[0%] dark:via-[10%]
        origin-top "

        style={{ scaleY: scrollYProgress }}
      />
      <ul className="w-full flex flex-col items-start justify-between -ml-4 xs:ml-2 ">
        <Details
          position="Ph.D. Candidate"
          company="University of Pittsburgh and Carnegie Mellon University"
          companyLink="https://www.cmu.edu"
          time="Aug 2021 – May 2026 (Expected)"
          address="Pittsburgh, PA"
          work="Conducting cutting-edge research in computational biology, developing tools such as DISCo-Net for large-scale co-authorship network analysis, and modeling gene regulatory networks to understand B-cell fate transitions."
        />
  
        <Details
          position="Intern"
          company="Bizongo"
          companyLink="https://www.bizongo.com/"
          time="June 2019 – July 2019"
          address="Mumbai, India"
          work="Analyzed B2B payment failures, categorizing 84% into root causes, which reduced held payments and improved partner experience. Performed high-frequency analysis of payment settlements to improve performance metrics."
        />
  
        <Details
          position="Researcher"
          company="University of Rochester Medical Center"
          companyLink="https://www.urmc.rochester.edu"
          time="Apr 2020 – May 2021"
          address="Rochester, NY, USA"
          work="Analyzed high-dimensional datasets to infer conserved pathways and reformulated network topologies using HPC. Contributed to the development of the BONITA package for network topology analysis."
        />
  
        <Details
          position="B.Tech. Thesis Researcher"
          company="IIT Bombay"
          companyLink="https://www.iitb.ac.in"
          time="Nov 2019 – May 2021"
          address="Mumbai, India"
          work="Developed mechanistic network models to identify key nodes in programmed cell death pathways. Simulated temporal network updates to predict steady-state transition probabilities across large-scale networks."
        />
      </ul>
      </div>
    </div>
  
    );
};

export default Experience;
