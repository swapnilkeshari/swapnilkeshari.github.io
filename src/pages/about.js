import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Profile from '../../public/images/profile/Asset 1.svg';
import { useInView, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Skills from "@/components/abouts/Skills";
import Experience from "@/components/abouts/Experience";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import Education from "@/components/abouts/Education";
import { ShootingStars } from "@/components/aceternity/shooting-stars";
import { StarsBackground } from "@/components/aceternity/stars-background";
import {useTheme} from "@/components/Hooks/themecontext";

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}


export default function About() {
  const { mode, setMode } = useTheme();
  return (
    <>
      <Head>
        <title>About | Swapnil_Keshari</title>
        <meta name="description" content="" />
      </Head>
      <TransitionEffect />
      
      <main className={`flex w-full flex-col items-center justify-center dark:text-light`}>
        <Layout className="!pt-16 md:!pt-16 sm:!pt-16">

          <ShootingStars />
          <StarsBackground starDensity = {0.001} mode = {mode} />
          <AnimatedText text="Causal Variant of Chaos" className="-mt-4 mb-4 !leading-tight !text-6xl" />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 mt-10">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                About Me
              </h2>
              <p className="font-medium">
                Hi , I&apos;m <strong>Swapnil Keshari</strong>. Welcome to my digital abode!
                I love learning things, this website is one such example =). 
                In my free time I like to read, write, code, and play cricket.
                Professionally, I am a Ph.D. candidate in Computational Biology at University of Pittsburgh.
                Well, to be precise it's a joint program with Carnegie Mellon University (CPCB).
              </p>
              <p className="my-4 font-medium">
                I believe, we can learn anything if we put our mind to it.
                Started with love for Physics, Chemistry and Maths - then transitioned to Chemical Engineering -
                fell in love with biology and slowing getting adept in Computer Science.
                Life&apos;s short and hence trying whatever I like :P. 
              </p>
              <p className="my-4 font-medium">
                Beyond academics, I like to read books, write poems and fly planes. While, my friends will describe
                me as a couch potato, I like to think of myself as a wanderer.
                I love to chat with people, so feel free to reach out to me for anything.
                
              </p>
              <p className="my-4 font-medium">
              And the craziest thing I&apos;ve done is to swim 12 km in 9 hours!
              </p>

            </div>
            <div className="relative col-span-3 h-max rounded-2xl border-2 border-double border-dark 
            bg-light p-8 dark:border-light dark:bg-light/70 fill-white
            xl:col-span-4 md:col-span-8 md:order-1
            ">
                  <div>
                    <Profile className="fill-dark"/>
                  </div>
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row 
            xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={22} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of Homeworks  
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={70} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  hrs. of flight time
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={1} />
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  paper published
                </h2>
              </div>
            </div>
          </div>
          <Education />
          <Skills />
          <Experience />
          
        </Layout>
      </main>
    </>
  );
}
