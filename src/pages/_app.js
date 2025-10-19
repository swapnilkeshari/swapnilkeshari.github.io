import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
// pages/_app.js
import { Playfair_Display } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { ThemeProvider } from "@/components/Hooks/themecontext";


// If loading a variable font, you don't need to specify the font weight
// const montserrat = Playfair_Display({ subsets: ["latin"], variable: "--font-mont" });
const playfair = Playfair_Display({
  subsets: ["latin"], // Specify subsets, e.g., "latin"
  weight: "400", // Specify weight, e.g., "400", "700"
  style: "normal", // Specify style, e.g., "normal", "italic",
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="" /> */}
      </Head>
      <main
        className={`${playfair.variable} font-mont  bg-light dark:bg-dark w-full min-h-screen h-full`}
      >
        <ThemeProvider>
        <Navbar />
        <AnimatePresence initial={false} mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
        </ThemeProvider>
      </main>
    </>
  );
}
