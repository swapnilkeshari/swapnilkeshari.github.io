import AnimatedText from "@/components/AnimatedText";
import TypingText from "@/components/TypingText";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useRef } from "react";
import TransitionEffect from "@/components/TransitionEffect";
import { LinkArrow } from "@/components/Icons";

const FramerImage = motion(Image);

// Dynamically load all images in the poems directory
const images = require.context("../../public/poems", false, /\.(png|jpe?g|svg)$/);

// Array of poems data
const poems = [
  // Add more poems here...
    {
      title: "Laadki",
      time: "2 OCT 2024 AT 7:58",
      summary: "",
      link: "./poem_translation/ek_kahani",
      imgKey: "laadki-phir-sirhaane-aayi-wo-yaadein-varshon-purani-beete-ki.jpeg",
    },
    {
      title: "",
      time: "1 OCT 2024 AT 5:56",
      summary: "",
      link: "",
      imgKey: "moorkh-tu-kal-kaal-mein-jee-raha-nishabd-tu-aksharon-mein-jo.jpeg",
    },
    {
      title: "",
      time: "22 JUL 2023 AT 10:14",
      summary: "",
      link: "",
      imgKey: "zameen-pe-chalne-wale-mujhe-meri-tehzeeb-batane-chale-hai-se.jpeg",
    },
    {
      title: "Ek Kahani",
      time: "26 APR 2023 AT 18:01",
      summary: "",
      link: "",
      imgKey: "ek-kahani-bageeche-mein-baitha-hun-uss-sundar-gulab-ke-pass.jpeg",
    },
    {
      title: "Banjara",
      time: "2 DEC 2022 AT 7:49",
      summary: "",
      link: "",
      imgKey: "banjara-dar-badar-tu-you-bhatakta-jaye-aur-logon-ke-dilon-ko.jpeg",
    },
    {
      title: "",
      time: "21 APR 2022 AT 9:02",
      summary: "",
      link: "",
      imgKey: "roshni-failate-hue-uss-sooraj-ko-poocho-niswarth-jalna-kya.jpeg",
    },
    {
      title: "Tu",
      time: "21 APR 2022 AT 7:41",
      summary: "",
      link: "",
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
      summary: "",
      link: "",
      imgKey: "caar-paahiyon-pe-bhaagtii-jindgii-men-caar-pl-hmaare-saath.jpeg",
    },
    {
      title: "Unravel",
      time: "26 MAR 2019 AT 22:35",
      summary: "",
      link: "",
      imgKey: "paarkhii-hai-jo-ye-njre-hmaarii-dekh-rhii-smaaj-kii-smsyaa.jpeg",
    },
    {
      title: "",
      time: "19 MAR 2019 AT 23:35",
      summary: "",
      link: "",
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

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <>
      <Link
        href={link}
        target={"_blank"}
        className="relative"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="capitalize text-xl font hover:underline dark:text-light md:text-lg xs:text-base">
          {title}
        </h2>
        <FramerImage
          src={img}
          ref={imgRef}
          alt={title}
          className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          style={{
            x: x,
            y: y,
          }}
          sizes="(max-width: 768px) 60vw,
              (max-width: 1200px) 40vw,
              33vw"
        />
      </Link>
    </>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: false }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col items-center justify-between 
      bg-light text-dark first:mt-0 border border-solid dark:bg-dark dark:border-light
      "
    >
      <MovingImg img={img} title={title} link={link} />
      <span
        className="text-primary font dark:text-primaryDark min-w-max pl-4 sm:self-start 
      sm:pl-0 xs:text-sm"
      >
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li
      className="relative w-full p-4 col-span-1 bg-light border border-dark border-solid rounded-2xl 
    dark:bg-dark dark:border-light"
    >
      <div
        className="absolute  top-0 -right-3 w-[102%] h-[103%] rounded-[2rem]  rounded-br-3xl bg-dark 
        -z-10  "
      />
      <Link
        href={link}
        target={"_blank"}
        className="inline-block rounded-lg overflow-hidden w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="100vw"
          priority
        />
      </Link>

      <Link href={link} target={"_blank"}>
        <h2 className="capitalize text-2xl font my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm  mb-2">{summary}</p>
      <span className="text-primary font dark:text-primaryDark">{time}</span>
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
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <Layout className="pt-16">
          <TypingText 
          text="Since pen is mightier than the sword...🖋️"  
          className="`inline-block text-dark dark:text-light text-6xl w-full  ${className} xl:text-6xl`"
          repeat={false}
          delay = {120}
          />
          {/*<AnimatedText
            text="Since pen is mightier than the sword...🖋️"
            className=""
          />*/}

          <ul className="pt-16 grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            {poems.map((poem, index) => (
              <FeaturedArticle
                key={index}
                img={images(`./${poem.imgKey}`)} // Dynamically fetch the image
                title={poem.title}
                time={poem.time}
                summary={poem.summary}
                link={poem.link}
              />
            ))}
          </ul>
        </Layout>
      </main>
    </>
  );
}
