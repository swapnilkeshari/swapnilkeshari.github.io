import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  XIcon,
} from "./Icons";
import { motion } from "framer-motion";
import {useTheme} from "./Hooks/themecontext";
import { SignAnimation } from "@/components/SignAnimation";
import StaggeredCard from "./animata/staggered-card";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className}  rounded relative group lg:text-light lg:dark:text-dark`}>
      {title}
      <span
        className={`
              inline-block h-[1px]  bg-dark absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease duration-300 dark:bg-light
              ${router.asPath === href ? "w-full" : " w-0"} lg:bg-light lg:dark:bg-dark
              `}
      >
        {/* &nbsp; */}
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () =>{
    toggle();
    router.push(href) 
  }

  return (
    <button className={`${className}  rounded relative group lg:text-light lg:dark:text-dark`} onClick={handleClick}>
      {title}
      <span
        className={`
              inline-block h-[1px]  bg-dark absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease duration-300 dark:bg-light
              ${router.asPath === href ? "w-full" : " w-0"} lg:bg-light lg:dark:bg-dark
              `}
      >
        {/* &nbsp; */}
      </span>
    </button>
  );
};

const Navbar = () => {
  const { mode, setMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {setIsOpen(!isOpen);};

  return (
    <header className="w-full flex items-center justify-between px-32 py-8 font-medium z-11 dark:text-light
    lg:px-16 relative z-1 md:px-12 sm:px-8
    ">
      {/* Desktop Menu creation */}
      <div className="w-full flex justify-between items-center lg:hidden z-10 ">
        <nav className="flex items-center justify-center">
          <CustomLink className="mr-4" href="/" title="Home" />
          <CustomLink className="mx-4" href="/about" title="About" />
          {/* <CustomLink className="mx-4" href="/projects" title="Projects" /> */}
          <CustomLink className="mx-4" href="/poems" title="Poems" />
          <StaggeredCard className="ml-2"
            links={[
                    { href: '/404', label: 'Aviation'},
                    { href: '/404', label: 'Art'},
                  ]}
          />
        </nav>
        <nav className="flex items-center justify-center flex-wrap lg:mt-2">
          <motion.a
            target={"_blank"}
            className="w-6 mr-3"
            href="https://twitter.com/SwapnilKeshari7"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Checkout my X profile"
          >
            <XIcon />
          </motion.a>

          <motion.a
            target={"_blank"}
            className="w-6 mx-3"
            href="https://github.com/swapnilkeshari"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Checkout my github profile"
          >
            <GithubIcon />
          </motion.a>

          <motion.a
            target={"_blank"}
            className="w-6 mx-3"
            href="https://www.linkedin.com/in/swapnilkeshari23/"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Checkout my linkedin profile"
          >
            <LinkedInIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`w-6 h-6 ease ml-3 flex items-center justify-center rounded-full p-1  
              ${mode === "light" ? "bg-dark  text-light" : "bg-light  text-dark"}
              `}
            aria-label="theme-switcher"
          >
            {mode === "light" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {/* Hamburgur Menu creation */}
      <button
        type="button"
        className=" flex-col items-center justify-center hidden lg:flex z-20"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        onClick={handleClick}
      >
        {/* Converting 3 lines to X */}
        <span className="sr-only ">Open main menu</span>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? 'xs:bg-light xs:dark:bg-dark rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? 'xs:bg-light xs:dark:bg-dark opacity-0' : 'opacity-100'} my-0.5`}></span>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? 'xs:bg-light xs:dark:bg-dark -rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>

      {/* checking if hamburger is open */}
      { isOpen ?
        <motion.div className="min-w-[70vw] sm:min-w-[90vw] flex justify-between items-center flex-col fixed top-1/2 xs:top-56 left-1/2 -translate-x-1/2
        -translate-y-1/2
        py-32 bg-dark/90 dark:bg-light/75 rounded-lg z-10 backdrop-blur-md
        "
        initial={{scale:0,x:"-50%",y:"-50%", opacity:0}}
        animate={{scale:1,opacity:1}}
        >
        <nav className="flex items-center justify-center flex-col">
          <CustomMobileLink toggle={handleClick} className="mr-4 lg:m-0 lg:my-2" href="/" title="Home" />
          <CustomMobileLink toggle={handleClick} className="mx-4 lg:m-0 lg:my-2" href="/about" title="About" />
          {/* <CustomMobileLink toggle={handleClick} className="mx-4 lg:m-0 lg:my-2" href="/projects" title="Projects" /> */}
          <CustomMobileLink toggle={handleClick} className="ml-4 lg:m-0 lg:my-2" href="/poems" title="Poems" />
        </nav>
        <nav
          className="flex items-center justify-center  mt-2"
        >
          <motion.a
            target={"_blank"}
            className="w-6 m-1 mr-3 sm:mx-1"
            href="https://twitter.com/SwapnilKeshari7"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Checkout my X profile"
          >
            <XIcon fillColor={`${mode === "light" ? "#FFFFFF" : "#000000"}`}/>
          </motion.a>
          <motion.a
            target={"_blank"}
            className="w-6 m-1 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1"
            href="https://github.com/swapnilkeshari"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Checkout my github profile"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            target={"_blank"}
            className="w-6 m-1 mx-3 sm:mx-1"
            href="https://www.linkedin.com/in/swapnilkeshari23/"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Checkout my linkedin profile"
          >
            <LinkedInIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`w-6 h-6 ease m-1 ml-3 sm:mx-1 flex items-center justify-center rounded-full p-1  
              ${mode === "light" ? "bg-dark  text-light" : "bg-light  text-dark"}
              `}
            aria-label="theme-switcher"
          >
            {mode === "light" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
        </motion.div>
        : null
      }

      <div className="absolute left-[50%] top-0 translate-x-[0%] ">
        <SignAnimation className="" />
      </div>

    </header>
  );
};

export default Navbar;
