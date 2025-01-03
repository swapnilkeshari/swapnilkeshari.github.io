import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ year, institution, time, degree, info, children }) => {
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
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
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
                {year}
              </h3>
            </div>

            {/* Right Content: Other Details */}
            <div>
            <a
                  className="capitalize font-medium"
                  rel="noopener noreferrer"
                >
                {degree}
                </a>
                <br/>
              <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
                {institution} | {time}
              </span>
              <p className="font-medium w-full md:text-sm mt-2">
                {info}
                &nbsp;
              </p>
              <br/>
              {children}
            </div>
          </div>

      </motion.div>
    </li>
  );
};


const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 40%", "end 50%"],
  });
  return (

    <div ref={ref} className="my-64">
    <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
      NavLog
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
          year="2021"
          degree="Doctor of Philosophy in Computational Biology"
          time="2021-Present"
          institution="University of Pittsburgh , Pittsburgh"
          info="ML, AI, Data Science, Computational Biology and Immunology."
        />
        <Details
          year="2017"
          degree="Bachelor of Technology in Chemical Engineering with Minor in Biology"
          time="2017-2021"
          institution="Indian Institute of Technology, Bombay"
          info="Chemical Engineering, Biology, National Service Scheme, Swimming and Dramatics."
        />
        <Details
          year="2002"
          degree="Schooling"
          time="2002-2016"
          institution="Campion School, Bhopal"
          info="From where it all began."
        />
      </ul>
      </div>
    </div>
  
    );
};

export default Education;


// export function Education() {
//   const data = [
//     {
//       title: "2021",
//       content: (
//         <Details
//             heading="Doctor of Philosophy in Computational Biology"
//             time="2021-Present"
//             place="University of Pittsburgh , Pittsburgh"
//             info="ML, AI, Data Science, Computational Biology and Immunology."
//           />

//       ),
//     },
//     {
//       title: "2017",
//       content: (
//         <Details
//             heading="Bachelor of Technology in Chemical Engineering with Minor in Biology"
//             time="2017-2021"
//             place="Indian Institute of Technology, Bombay"
//             info="Chemical Engineering, Biology, National Service Scheme, Swimming and Dramatics."
//           />
//       ),
//     },
//     {
//       title: "2002",
//       content: (
//         <Details
//             heading="Schooling"
//             time="2002-2016"
//             place="Campion School, Bhopal"
//             info="From where it all began."
//           />
          
//       ),
//     },
//   ];
//   return (
//     (<div>
//       <Timeline data={data} />
//     </div>)
//   );
// }