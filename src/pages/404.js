import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Swapnil Keshari Website | 404 Page </title>
        <meta
          name="description"
          content=""
        />
      </Head>
      <TransitionEffect />
      <main className="h-[75vh] w-full dark:bg-dark ">
        <Layout className="relative !bg-transparent !pt-16 flex flex-col items-center justify-center">
          <AnimatedText text="404" className=" " />
          <AnimatedText
            text="Oops! Looks like you took a wrong turn on the internet 🚧. Don't worry, it happens to the best of us. Maybe try going back home before the search party arrives?🧭"
            className=" !text-xl "
          />
          <Link
            href="/"
            className="self-center !mt-4 inline-block rounded-lg border-2 border-solid bg-dark px-4 py-2
        font-semibold text-light hover:border-dark hover:bg-light hover:text-dark 
        dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
        "
          >
            Take Me Home 🏡
          </Link>
        </Layout>
      </main>
    </>
  );
};

export default NotFound;
