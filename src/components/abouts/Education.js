import Image from "next/image";
import React,{useRef} from "react";
import { Timeline } from "@/components/aceternity/timeline";
import { motion } from "framer-motion";

const Details = ({ heading, time, place, info, children }) => {
    const ref = useRef(null);
    return (
      <li
        ref={ref}
        className="my-0 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
      >
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
            <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg mb-2">{heading}</h3>
            <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">{time} | {place}</span>
            <p className="mt-2 font-medium w-full md:text-sm mb-2">{info}</p>
            {children}

            </motion.div>
      </li>
    )
  };

export function Education() {
  const data = [
    {
      title: "2021",
      content: (
        <Details
            heading="Doctor of Philosophy in Computational Biology"
            time="2021-Present"
            place="University of Pittsburgh , Pittsburgh"
            info="ML, AI, Data Science, Computational Biology and Immunology."
        //     children=           
        //     {<div className="grid grid-cols-2 gap-4">
        //     <Image
        //       src=""
        //       alt="startup template"
        //       width={500}
        //       height={500}
        //       className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
        //     <Image
        //       src=""
        //       alt="startup template"
        //       width={500}
        //       height={500}
        //       className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
        //     <Image
        //       src=""
        //       alt="startup template"
        //       width={500}
        //       height={500}
        //       className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
        //     <Image
        //       src=""
        //       alt="startup template"
        //       width={500}
        //       height={500}
        //       className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
        // </div>}
          />

      ),
    },
    {
      title: "2017",
      content: (
        <Details
            heading="Bachelor of Technology in Chemical Engineering with Minor in Biology"
            time="2017-2021"
            place="Indian Institute of Technology, Bombay"
            info="Chemical Engineering, Biology, National Service Scheme, Swimming and Dramatics."
          />
      ),
    },
    {
      title: "2002",
      content: (
        <Details
            heading="Schooling"
            time="2002-2016"
            place="Campion School, Bhopal"
            info="From where it all began."
            // children =
            // {<div>
            //     <div
            //       className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            //       ✅ Card grid component
            //     </div>
            //     <div
            //       className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            //       ✅ Startup template Aceternity
            //     </div>
            //     <div
            //       className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            //       ✅ Random file upload lol
            //     </div>
            //     <div
            //       className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            //       ✅ Himesh Reshammiya Music CD
            //     </div>
            //     <div
            //       className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            //       ✅ Salman Bhai Fan Club registrations open
            //     </div>
            //   <div className="grid grid-cols-2 gap-4">
            //     <Image
            //       src=""
            //       alt="hero template"
            //       width={500}
            //       height={500}
            //       className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            //     <Image
            //       src=""
            //       alt="feature template"
            //       width={500}
            //       height={500}
            //       className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            //     <Image
            //       src=""
            //       alt="bento template"
            //       width={500}
            //       height={500}
            //       className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            //     <Image
            //       src=""
            //       alt="cards template"
            //       width={500}
            //       height={500}
            //       className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            //   </div> 
            //   </div>}
          />
          
      ),
    },
  ];
  return (
    (<div>
      <Timeline data={data} />
    </div>)
  );
}
