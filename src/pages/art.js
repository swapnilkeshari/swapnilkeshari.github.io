"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import AnimatedText from "@/components/AnimatedText";

// Example data structure
const artsContent = [
  {
    type: "image",
    title: "Abstract Art",
    date: "April 30, 2020",
    description: "Just random musings",
    src: "/art/circle_from_line.jpg",
    alt: "Abstract Art"
  },
{
    type: "image",
    title: "Frenemies",
    date: "March 23, 2020",
    description: "Best Friends Forever",
    src: "/art/frenemies.jpg",
    alt: "Frenemies"
  },
  {
    type: "image",
    title: "Dream",
    date: "March 23, 2020",
    description: "A Dream",
    src: "/art/i_am_a_dream.jpg",
    alt: "Dream"
  },
  {
    type: "video",
    title: "From IITB to CPCB | Swapnil Keshari",
    date: "October 30, 2021",
    description: "An interview discussing my journey from IIT Bombay to the Joint Carnegie Mellon University of Pittsburgh Computational Biology at the University of Pittsburgh.",
    youtubeUrl: "https://www.youtube.com/embed/76CliQT1fwc"
  },
//   {
//     type: "link",
//     title: "Digital Portfolio Exhibition",
//     date: "August 9, 2025",
//     description: "My latest curated digital works, available online.",
//     link: "https://example.com/portfolio"
//   }
  // Add more entries as needed
];

export default function ArtsPage() {
  return (
    <>
      <Head>
        <title>Arts Gallery | Swapnil_Keshari</title>
        <meta name="description" content="Artworks, interviews, and videos by Swapnil Keshari" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden">
        <AnimatedText text="Causal Variant of Chaos" className="-mt-4 mb-4 !leading-tight !text-6xl" />

        <div className="w-full max-w-6xl px-8">
          <h1 className="text-4xl font-bold text-center pt-16 mb-8">Arts Gallery</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {artsContent.map((item, idx) => (
              <div key={idx} className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-1 text-purple-800 dark:text-purple-400">{item.title}</h2>
                  <p className="text-xs mb-4 text-gray-500">{item.date}</p>
                  <p className="mb-4">{item.description}</p>
                  {item.type === "image" && (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={600}
                      height={340}
                      className="rounded-lg object-cover"
                    />
                  )}
                  {item.type === "video" && (
                    <div className="aspect-w-16 aspect-h-9 mb-2">
                      <iframe
                        src={item.youtubeUrl}
                        title={item.title}
                        allowFullScreen
                        className="w-full h-64 rounded-lg"
                      />
                    </div>
                  )}
                  {item.type === "link" && (
                    <Link href={item.link} target="_blank" rel="noopener noreferrer">
                      <span className="inline-block mt-2 bg-primary text-white px-5 py-2 rounded-md font-semibold hover:bg-primaryDark transition">
                        View Portfolio →
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
