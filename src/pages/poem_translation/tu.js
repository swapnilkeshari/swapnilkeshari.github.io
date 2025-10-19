import Head from "next/head";

export default function tu() {
  return (
    <>
      <Head>
        <title>Tu</title>
        <meta name="description" content="Tu" />
      </Head>
      <main
      className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
    >
      <h1 className="text-4xl font-bold text-center pt-16">Tu</h1>
      <div className="pt-16 grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
        {/* Hindi Poem */}
        <div className="text-xl leading-relaxed">
          <h2 className="font-bold text-2xl mb-4 text-primary dark:text-primaryDark">हिंदी कविता (via ChatGPT)</h2>
          <p>तू</p>
          <br />
          <p>अगिनत आंसुओं को सहेजता,</p>
          <p>तू प्यार का समंदर है रे।</p>
          <p>दमकता सूरज है तू,</p>
          <p>तेरा काम है अंधकार मिटाना।</p>
          <p>महकता गुलाब है तू,</p>
          <p>है तुझे हर जगह खुशबू फैलाना।</p>
          <br />
          <p>लोग,</p>
          <p>जो कुछ थे... और जो कुछ हैं।</p>
          <p>तेरी यादें जब तक उनके साथ हैं,</p>
          <p>तब तक तू है।</p>
          <p>और बस,</p>
          <p>तब तक ही तेरा वजूद है।</p>
        </div>

        {/* English Translation */}
        <div className="text-xl leading-relaxed">
          <h2 className="font-bold text-2xl mb-4 text-primary dark:text-primaryDark">English Translation (via ChatGPT)</h2>
          <p>You</p>
          <br></br>
          <p>You cradle countless tears,</p>
          <p>An ocean of love through the years.</p>
          <p>You’re the sun that shines so bright,</p>
          <p>Driving away the deepest night.</p>
          <p>A fragrant rose in every place,</p>
          <p>Spreading your scent with gentle grace.</p>
          <br />
          <p>People,</p>
          <p>What they were and what remains,</p>
          <p>As long as your memory sustains.</p>
          <p>For as long as they recall you near,</p>
          <p>Your presence lingers, ever clear.</p>
          <p>And only then,</p>
          <p>Your existence stays sincere.</p>
        </div>
      </div>
    </main>

    </>
  );
}
