"use client";;
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({
  data
}) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center start"],
  });


  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    (<div
      className="w-full bg-transparent font-sans md:px-10"
      ref={containerRef}>
        <h2 className="font-bold text-8xl mt-24 w-full text-center md:text-6xl">
        Education LogBook
      </h2> 
      {/* <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Education LogBook
        </h2>
        <p
          className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          In business since &apos;02
        </p>
      </div> */}
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start gap-10 pt-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-6 w-6 border-black dark:border-white  absolute left-5 md:left-5  rounded-full bg-current flex items-center justify-center">
                  {/* Inner Circle with Scroll-Based Fill */}
                  <motion.div
                  className="h-4 w-4 bg-gradient-to-tr from-purple-500 via-blue-500  from-[0%] via-[100%] rounded-full p-2" // Fill color
                  style={{
                    scaleY: scrollYProgress,
                    originY: 1, // Fills from bottom to top
                  }}
                />
                </div>
            </div>
            
            <h3 className="block pl-20 text-left text-5xl md:-mb-4 md:pl-10 md:text-2xl md:-mt-4 font-bold text-neutral-500 dark:text-neutral-500 ">{item.title}</h3>
            <div className="block pl-20 pr-4 md:pl-4 w-full lg:-mt-4">{item.content}{" "}</div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full" />
        </div>
      </div>
    </div>)
  );
};
