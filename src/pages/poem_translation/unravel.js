import Head from "next/head";

export default function unravel() {
  return (
    <>
      <Head>
        <title>Poem by Swapnil Keshari</title>
        <meta name="description" content="Poem by Swapnil Keshari" />
      </Head>
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <h1 className="text-4xl font-bold text-center pt-16">Poem</h1>
        {/* Placeholder for image */}
        <img src="/your-image.jpg" alt="Poem Image" className="w-1/2 mb-8" />
        <div className="pt-16 grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
          {/* Hindi Poem */}
          <div className="text-xl leading-relaxed">
            <h2 className="font-bold text-2xl mb-4 text-primary dark:text-primaryDark">
              हिंदी कविता
            </h2>
            <p>पारखी हैं जो ये नज़रे हमारी,</p>
            <p>देख रही समाज की समस्या सारी।</p>
            <p>हैं तकनीक में माहिर हम,</p>
            <p>सोचा है समाधान भी हमने।</p>
            <p>पर होती दुविधा अपार;</p>
            <p>कल्पना से रचना तक का ये सफर,</p>
            <p>कैसे करे हम पार।</p>
          </div>

          {/* English Translation */}
          <div className="text-xl leading-relaxed">
            <h2 className="font-bold text-2xl mb-4 text-primary dark:text-primaryDark">
              English Translation
            </h2>
            <p>These eyes of ours, so discerning,</p>
            <p>Witnessing all the society's suffering.</p>
            <p>We are experts in technology,</p>
            <p>And have devised solutions, you see.</p>
            <p>But a vast dilemma lies ahead;</p>
            <p>This journey from imagination to creation,</p>
            <p>How do we cross this threshold?</p>
          </div>
        </div>
      </main>
    </>
  );
}