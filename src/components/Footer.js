import React from "react";
import Layout from "./Layout";
import FibonacciLines from "@/components/animata/fibonacci-lines"

const Footer = () => {
  return (
    
    <footer
      className=" z-0 w-full border-transparent font-medium text-lg dark:text-light dark:border-light sm:text-base">
        <div className="w-full relative inset-0">
        <FibonacciLines className="absolute z-0" />
      <Layout className="flex bg-light/80 dark:bg-dark/80 z-10 items-center justify-between lg:flex-col lg:py-6">
      
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Built with <span className="text-primary text-2xl px-1 dark:text-primaryDark">&#9825;	</span> by Swapnil&nbsp;
        </div>
      </Layout>
      </div>
    </footer>
   
  );
};

export default Footer;