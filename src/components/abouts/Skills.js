import { motion } from "framer-motion";
import React, { useRef } from "react";


const Skill = ({ name, x, y }) => {
  const ref = useRef(null);
  return (
    <motion.div
      ref={ref}
      whileHover={{scale:1.05}}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: {duration: 1.5} }}
      viewport={{ once: true }}
      className="cursor-pointer w-max origin-center absolute 
       font-semibold bg-dark text-light dark:bg-light dark:text-dark py-3 px-6 rounded-full
       lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3  xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold
       "
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  return (
<>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2> 
    <div
      ref={ref}
      className="w-full h-[100vh] relative flex items-center justify-center 
      mb-64 md:mb-32 rounded-full lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
      "
    >
   
      <motion.div whileHover={{scale:1.05}} className="cursor-pointer flex rounded-full font-semibold text-6xl bg-light text-dark p-8 dark:bg-dark dark:text-light lg:p-6 md:p-4 xs:text-sm xs:p-2">
      🧬 🎨 🛫 🧑🏻‍💻 
      </motion.div>
          <Skill name="Python" x="-20vw" y="2vw" />
          <Skill name="R" x="-5vw" y="-10vw" />
          <Skill name="MATLAB" x="20vw" y="6vw" />
          <Skill name="Adobe Creative Cloud" x="0vw" y="12vw" />
          <Skill name="ML" x="-20vw" y="-15vw" />
          <Skill name="AI" x="15vw" y="-12vw" />
          <Skill name="Deep Learning" x="-35vw" y="-5vw" />
          <Skill name="HPC" x="32vw" y="-5vw" />
          <Skill name="bash" x="0vw" y="-20vw" />
          <Skill name="dask" x="-25vw" y="18vw" />
          <Skill name="huggingface" x="28vw" y="18vw" />
          <Skill name="HTML" x="-30vw" y="10vw" />
          <Skill name="CSS" x="25vw" y="-18vw" />
          <Skill name="ML" x="-15vw" y="25vw" />
          <Skill name="Scikit-Learn" x="10vw" y="20vw" />
          <Skill name="Pandas" x="-10vw" y="-25vw" />
          <Skill name="NumPy" x="35vw" y="0vw" />
          <Skill name="SciPy" x="-25vw" y="-20vw" />
    </div></>
  );
};

export default Skills;
