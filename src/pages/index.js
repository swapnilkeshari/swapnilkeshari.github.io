"use client";
import React from "react";
import profilePic from "../../public/images/profile/Swapnil_Keshari.jpg";
import TransitionEffect from "@/components/TransitionEffect";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import { Button } from "@/components/aceternity/moving-border";
import { FlipWords } from "@/components/aceternity/flip-words";
import {Sparkles} from "@/components/home/UseSparkles";
import {useTheme} from "@/components/Hooks/themecontext";
import { ShootingStars } from "@/components/aceternity/shooting-stars";


export default function Home() {
  const words = ["I was", "I am", "I will be"];
  const { mode, setMode } = useTheme();
  return (
    <>

      <Head>
        <title>Home | Swapnil_Keshari</title>
        <meta
          name="description"
          content="Immerse in the story of my life"
        />
      </Head>

      <TransitionEffect />

      <Sparkles 
      particleDensity = {40}
      particleColor = {`${mode === "dark" ? "#FFFFFF" : "#000000"}`} 
      className="absolute -inset-0 -z-0"/>
      <ShootingStars />

      <article className={`flex min-h-screen items-center bg-light/80 dark:bg-dark/80 sm:items-start text-dark dark:text-light `}>
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className={`flex w-full items-start justify-between md:flex-col ${mode === "dark" ? "bg-dark" : "bg-light"}`}>
          
            <div className="w-1/2 lg:inline-block md:inline-block md:w-full">
            <Image
                className="h-auto w-full rounded-2xl"
                src={profilePic}
                alt="Swapnil_Keshari_Profile_Picture"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
              />
            </div>
            
            <br/>

            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center ">
              <div
                className="!text-center !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl text-neutral-600 dark:text-neutral-400">
                A Dream:
                <FlipWords words={words} duration = {8000} />
              </div>

              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
              Designer by <span className="text-primary text-2xl px-1 dark:text-primaryDark">&#9825;	</span> 
              <br></br>
              Engineer and Scientist by mind 🧬
              <br></br>
              Wanderer by soul 🛫
              </p>
              
              <div className="mt-2 flex items-center self-center lg:self-center space-x-4">
                <Button
                  borderRadius = "1rem"
                  duration={10000}
                  className={`flex items-center bg-light border-0
                              capitalize text-dark hover:border-dark hover:bg-dark hover:text-light
                              dark:bg-dark dark:text-light dark:hover:border-light dark:hover:bg-light dark:hover:text-dark
                            `}
                  containerClassName = "bg-transparent relative text-base p overflow-hidden  h-auto w-auto">
                  <Link
                    whileHover={{
                    cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='font-size:24px;'><text y='50%'>👆</text></svg>"), auto`,
                    }}
                    href="Swapnil_Keshari_Resume.pdf"
                    target={"_blank"}
                    className={`flex p-2.5 px-6 text-lg font-base md:p-2 md:px-4 md:text-base`}
                    download
                  >
                  Resumé <LinkArrow className="ml-1 !w-6 md:!w-4" />
                  </Link>
                </Button>

                <Button
                  borderRadius = "1rem"
                  duration={11000}
                  className={`flex items-center bg-light border-0
                              capitalize text-dark hover:border-dark hover:bg-dark hover:text-light
                              dark:bg-dark dark:text-light dark:hover:border-light dark:hover:bg-light dark:hover:text-dark
                            `}
                  containerClassName = "bg-transparent relative text-base p overflow-hidden  h-auto w-auto">
                  <Link
                    whileHover={{
                    cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='font-size:24px;'><text y='50%'>👆</text></svg>"), auto`,
                    }}
                    href="mailto:98keshari@gmail.com"
                    target={"_blank"}
                    className={`flex p-2.5 px-6 text-lg font-base md:p-2 md:px-4 md:text-base`}
                    download
                  >
                  Contact
                  </Link>
                </Button>

              </div>
            </div>
          </div>
          
            
        </Layout>
      </article>
    </>
  );
}
