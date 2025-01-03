"use client";
import TypingText from "@/components/TypingText";
import { motion} from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/aceternity/3d-card";
import { ShootingStars } from "@/components/aceternity/shooting-stars";
import { StarsBackground } from "@/components/aceternity/stars-background";

const FramerImage = motion(Image);

// Dynamically load all images in the poems directory
const images = require.context("../../public/poems", false, /\.(png|jpe?g|svg)$/);

// Array of poems data
const poems = [
  // Add more poems here...
    {
      title: "Laadki",
      time: "2 OCT 2024 AT 7:58",
      summary: "Click on the title to read the poem and its translation.",
      link: "./poem_translation/laadki",
      imgKey: "laadki-phir-sirhaane-aayi-wo-yaadein-varshon-purani-beete-ki.jpeg",
    },
    {
      title: "",
      time: "1 OCT 2024 AT 5:56",
      summary: "Click on the title to read the poem and its translation.",
      link: "./poem_translation/moorkh_tu",
      imgKey: "moorkh-tu-kal-kaal-mein-jee-raha-nishabd-tu-aksharon-mein-jo.jpeg",
    },
    {
      title: "",
      time: "22 JUL 2023 AT 10:14",
      summary: "Click on the title to read the poem and its translation.",
      link: "./poem_translation/zameen_pe",
      imgKey: "zameen-pe-chalne-wale-mujhe-meri-tehzeeb-batane-chale-hai-se.jpeg",
    },
    {
      title: "Ek Kahani",
      time: "26 APR 2023 AT 18:01",
      summary: "Click on the title to read the poem and its translation.",
      link: "./poem_translation/ek_kahani",
      imgKey: "ek-kahani-bageeche-mein-baitha-hun-uss-sundar-gulab-ke-pass.jpeg",
    },
    {
      title: "Banjara",
      time: "2 DEC 2022 AT 7:49",
      summary: "Click on the title to read the poem and its translation.",
      link: "./poem_translation/banjara",
      imgKey: "banjara-dar-badar-tu-you-bhatakta-jaye-aur-logon-ke-dilon-ko.jpeg",
    },
    {
      title: "",
      time: "21 APR 2022 AT 9:02",
      summary: "Click on the title to read the poem and its translation.",
      link: "./poem_translation/roshni_failate",
      imgKey: "roshni-failate-hue-uss-sooraj-ko-poocho-niswarth-jalna-kya.jpeg",
    },
    {
      title: "Tu",
      time: "21 APR 2022 AT 7:41",
      summary: "Click on the title to read the poem and its translation.",
      link: "./poem_translation/tu",
      imgKey: "tu-anginat-aansuon-ko-sahejta-tu-pyar-ka-samandar-hai-re-hai.jpeg",
    },
    {
      title: "Love",
      time: "10 SEP 2021 AT 2:59",
      summary: "",
      link: "",
      imgKey: "love-raw-pure-pristine.jpeg",
    },
    {
      title: "Stories",
      time: "15 JUN 2021 AT 21:31",
      summary: "",
      link: "",
      imgKey: "stories-most-beautiful-often-ones-remained-incomplete.jpeg",
    },
    {
      title: "Breathe",
      time: "22 DEC 2020 AT 15:53",
      summary: "",
      link: "",
      imgKey: "breathe-my-heart-bleeds-nourishing-sorrow-seeds-filling-i-my.jpeg",
    },
    {
      title: "",
      time: "6 JUL 2020 AT 19:45",
      summary: "",
      link: "",
      imgKey: "i-shine-so-bright-all-your-might-you-t-stop-my-light.jpeg",
    },
    {
      title: "",
      time: "22 JUN 2019 AT 23:10",
      summary: "Click on the title to read the poem and its translation.",
      link: "./poem_translation/chaar_paahiyon",
      imgKey: "caar-paahiyon-pe-bhaagtii-jindgii-men-caar-pl-hmaare-saath.jpeg",
    },
    {
      title: "Unravel",
      time: "26 MAR 2019 AT 22:35",
      summary: "Click on the title to read the poem and its translation.",
      link: "./poem_translation/unravel",
      imgKey: "paarkhii-hai-jo-ye-njre-hmaarii-dekh-rhii-smaaj-kii-smsyaa.jpeg",
    },
    {
      title: "",
      time: "19 MAR 2019 AT 23:35",
      summary: "Click on the title to read the poem and its translation.",
      link: "./poem_translation/jaankar_bhi",
      imgKey: "jaankar-bhi-anjaan-wo-nazrein-garamjoshi-ke-chand-alfaaz-jo.jpeg",
    },
    {
      title: "",
      time: "28 FEB 2018 AT 12:17",
      summary: "",
      link: "",
      imgKey: "i-look-into-his-grey-eyes-chats-smiles-i-wonder-she-only-one.jpeg",
    },
];

// const FeaturedArticle = ({ img, title, time, summary, link }) => {
//   return (
// <li
//     className="relative w-full p-4 col-span-1 bg-light border-collapse border-dark border-solid rounded-2xl 
//   dark:bg-dark dark:border-light"
//   >
//     <div
//       className="absolute  top-0 -right-3 w-[102%] h-[103%] rounded-[2rem]  rounded-br-3xl bg-dark 
//       -z-10  "
//     />
//     <Link
//       href={link}
//       target={"_blank"}
//       className="inline-block rounded-lg overflow-hidden w-full"
//     >
//       <FramerImage
//         src={img}
//         alt={title}
//         className="w-full h-auto"
//         whileHover={{ scale: 1.05 }}
//         transition={{ duration: 0.2 }}
//         sizes="100vw"
//         priority
//       />
//     </Link>

//     <Link href={link} target={"_blank"}>
//       <h2 className="capitalize text-2xl font my-2 mt-4 hover:underline xs:text-lg">
//         {title}
//       </h2>
//     </Link>
//     <p className="text-sm  mb-2">{summary}</p>
//     <span className="text-primary font dark:text-primaryDark">{time}</span>
//   </li>
//   );
// };

const PoemsWrapper = ({ img, title, time, summary, link }) => {

  return (
    <li className="">
  <CardContainer className="inter-var">
      <CardBody
        className="bg-gray-100 relative group/card  hover:shadow-2xl hover:shadow-purple-500/[0.3] dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.3] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white">
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          {time}
        </CardItem>
        <CardItem 
          translateZ="100" 
          className=" mt-4"
          as="button"
          onClick={() => window.open(link, "_blank")}>
          <Image
            src={img}
            // height="100"
            // width="100"
            className="mt-4 mb-0 rounded-xl group-hover/card:shadow-2xl"
            alt="thumbnail" />
        </CardItem>
        <div className="flex items-center mt-10">
          <CardItem
            translateZ="20"
            as="p"
            className="rounded-xl text-xs font-normal dark:text-white">
            {summary}
          </CardItem>
          <CardItem
            translateZ="20"
            as="button"
            onClick={() => window.open(link, "_blank")}
            className="px-2 py-2 w-auto h-auto rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-normal">
            Translation
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    </li>
  );
};

export default function Articles() {
  return (
    <>
      <Head>
        <title>Poems | Swapnil_Keshari</title>
        <meta name="description" content="Poems straight from the heart <3" />
      </Head>
      <TransitionEffect />
      <main
        className={`items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
        <ShootingStars />
        <StarsBackground 
        starDensity = {0.001}
        />
          <TypingText 
          text="Pen is mightier than the sword...🖋️" 
          className= "-mt-24 mb-4 !leading-tight !text-6xl lg:!text-6xl md:!text-5xl sm:!text-4xl md:-mt-16 sm:-mt-16 lg:-mt-32"
          repeat={false}
          delay = {120}
          />
          <div className="">
          <ul className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-8">
            {poems.map((poem,index) => (
                  <PoemsWrapper
                  img={images(`./${poem.imgKey}`)}
                  title={poem.title}
                  time={poem.time}
                  summary={poem.summary}
                  link={poem.link}
                  className={index === 0 ? "mt-4" : ""}
                />
            ))}
          </ul>
          </div>
        </Layout>
      </main>
    </>
  );
}
