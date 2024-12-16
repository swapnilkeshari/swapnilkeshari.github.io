import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

    <div className="my-64">
    <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
      Experience
    </h2>
  
    <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
      <motion.div
        className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
          origin-top dark:bg-primaryDark dark:shadow-3xl"
        style={{ scaleY: scrollYProgress }}
      />
      <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
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
