import Head from "next/head";

export default function Poem() {
  return (
    <>
      <Head>
        <title>Roshni Failate Hue</title>
        <meta name="description" content="Roshni Failate Hue" />
      </Head>
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <h1 className="text-4xl font-bold text-center pt-16">
          Roshni Failate Hue
        </h1>
        <div className="pt-16 grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
          {/* Hindi Poem */}
          <div className="text-xl leading-relaxed">
            <h2 className="font-bold text-2xl mb-4 text-primary dark:text-primaryDark">
              हिंदी कविता
            </h2>
            <p>रोशनी फैलाते हुए उस सूरज को पूछो,</p>
            <p>निस्वार्थ जलना क्या होता है?</p>
            <p>चहकती हुई गौरैया को पूछो,</p>
            <p>हर घर भटकना क्या होता है?</p>
            <br />
            <p>मंदिर की शोभा बढ़ाते फूल की सुनो,</p>
            <p>बगीचे से उखड़ना क्या होता है?</p>
            <p>और टिमटिमाते जुगनू से जानो,</p>
            <p>अंधकार क्या होता है?</p>
            <br />
            <p>फिर शायद समझो,</p>
            <p>उस मुस्कुराते हुए चेहरे की कहानी,</p>
            <p>कि आखिर दुख क्या होता है...</p>
          </div>

          {/* English Translation */}
          <div className="text-xl leading-relaxed">
            <h2 className="font-bold text-2xl mb-4 text-primary dark:text-primaryDark">
              English Translation
            </h2>
            <p>Ask the sun that spreads its glow,</p>
            <p>What it means to selflessly show?</p>
            <p>Ask the sparrow with a cheerful tone,</p>
            <p>What it feels to wander every home?</p>
            <br />
            <p>Hear the flowers adorning the shrine,</p>
            <p>What it means to leave the garden divine?</p>
            <p>Ask the firefly with its flickering light,</p>
            <p>What it means to endure the night?</p>
            <br />
            <p>Then you might grasp,</p>
            <p>The story of a smiling clasp,</p>
            <p>What sorrow truly is at last...</p>
          </div>
        </div>
      </main>
    </>
  );
}
