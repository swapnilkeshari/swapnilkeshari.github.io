import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/images/profile/Swapnil_Keshari.jpg";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  
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
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-between md:flex-col">
            <div className="w-1/2 lg:hidden md:inline-block md:w-full">
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
          
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="A Dream"
                //className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <AnimatedText
                text="I was, I am, I will be"
                className="!text-center !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
              Designer by <span className="text-primary text-2xl px-1 dark:text-primaryDark">&#9825;	</span> 
              <br></br>
              Engineer and Scientist by mind 🧬
              <br></br>
              Wanderer by soul 🛫
              </p>
              <div className="mt-2 flex items-center self-center lg:self-center">
                <Link
                  whileHover={{
                  cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='font-size:24px;'><text y='50%'>👆</text></svg>"), auto`,
                  }}
                  href="Swapnil_Keshari_Resume.pdf"
                  target={"_blank"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
                              capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                              dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                              md:p-2 md:px-4 md:text-base
                            `}
                  download
                >
                  Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>
                <Link
                  href="mailto:98keshari@gmail.com"
                  className="ml-4 text-lg font-medium capitalize text-dark underline 
                  dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </article>
    </>
  );
}
