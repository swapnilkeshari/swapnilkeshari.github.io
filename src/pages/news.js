import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import AnimatedText from "@/components/AnimatedText";

const newsArticles = [
  {
    title: "PhD student Swapnil Keshari reaches new heights as a pilot",
    date: "October 23, 2025",
    summary: "Swapnil Keshari was looking for a way to de-stress from his PhD studies when he stumbled upon YouTube reels about aviation. After watching those first few videos about the freedom of flight, he knew he wanted to earn his private pilot license.",
    link: "https://www.csb.pitt.edu/2025/10/23/phd-student-swapnil-keshari-reaches-new-heights-as-a-pilot/"
  },
  {
    title: "Volunteer of the Month: Swapnil Keshari",
    date: "May 1, 2025",
    summary: "Swapnil Keshari is a fourth-year PhD student in computational biology and network science, serving as Vice President of the IITBHF Pittsburgh Chapter where he revitalized the community and launched initiatives to enhance alumni engagement.",
    link: "https://www.iitbombay.org/page/volunteer-of-the-month-swapnil-keshari-may-2025"
  },  
  {
    title: "Machine learning tool reveals new insights about global scientific collaboration",
    date: "March 27, 2025",
    summary: "How do you analyze millions of papers in the life sciences and physical sciences that have been published in the past 25 years? Assistant Professor Jishnu Das and PhD student Swapnil Keshari are harnessing the power of machine learning to address this question.",
    link: "https://www.csb.pitt.edu/2025/03/27/machine-learning-tool-reveals-new-insights-about-global-scientific-collaboration/"
  },
  {
    title: "PhD student Swapnil Keshari recognized for mentorship excellence",
    date: "June 21, 2024",
    summary: "CPCB student Swapnil Keshari is achieving statewide recognition for his work mentoring women in STEM.",
    link: "https://www.csb.pitt.edu/2024/06/21/phd-student-swapnil-keshari-recognized-for-mentorship-excellence/"
  }
];

export default function NewsPage() {
  return (
    <>
      <Head>
        <title>News | Swapnil_Keshari</title>
        <meta name="description" content="Latest news and articles " />
      </Head>
      <TransitionEffect />
      
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden">
        <AnimatedText text="Fresh from the Press" className="-mt-4 mb-4 !leading-tight !text-6xl" />
        <div className="w-full max-w-6xl px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsArticles.map((article, idx) => (
              <div key={idx} className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-2">{article.title}</h2>
                  <p className="text-sm mb-4 text-gray-500">{article.date}</p>
                  <p className="mb-4">{article.summary}</p>
                </div>
                <Link href={article.link} target="_blank" rel="noopener noreferrer">
                  <span className="inline-block mt-4 bg-primary text-white px-5 py-2 rounded-md font-semibold hover:bg-primaryDark transition">
                    Read Article →
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

