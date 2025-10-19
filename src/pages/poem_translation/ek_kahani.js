import Head from "next/head";

export default function Poem() {
  return (
    <>
      <Head>
        <title>Ek Kahani</title>
        <meta name="description" content="Ek Kahani" />
      </Head>
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <h1 className="text-4xl font-bold text-center pt-16">Ek Kahani</h1>
        <div className="pt-16 grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
          {/* Hindi Poem */}
          <div className="text-xl leading-relaxed">
            <h2 className="font-bold text-2xl mb-4 text-primary dark:text-primaryDark">
              हिंदी कविता
            </h2>
            <p>बगीचे में बैठा हूँ, उस सुंदर गुलाब के पास।</p>
            <p>महकता सा वो, खुशनुमा उसका अहसास।</p>
            <br />
            <p>बिताये कितने पल, लिखे उस पर कितने अल्फाज़;</p>
            <p>बनाई अनगिनत यादें, बताये दिल के राज़।</p>
            <br />
            <p>धीमे-धीमे हवा ने रुख मोड़ा,</p>
            <p>बढ़ती करीबियाँ, गुलाब ने साथ छोड़ा।</p>
            <p>मुरझा जाएगा वो, तोड़ जो ले जाऊंगा उसको,</p>
            <p>मुरझा जाऊंगा मैं, छोड़ जो चले जाऊंगा उसको।</p>
            <br />
            <p>इसी कशमकश में संध्या हुई,</p>
            <p>उजली अनिश्चितता की हर सीमा हुई।</p>
            <p>अब तू ही बता ऐ सूरज, करूँ मैं क्या,</p>
            <p>ये जो करता तू इशारा की,</p>
            <p>वक्त बीते जा रहा...</p>
          </div>

          {/* English Translation */}
          <div className="text-xl leading-relaxed">
            <h2 className="font-bold text-2xl mb-4 text-primary dark:text-primaryDark">
              English Translation
            </h2>
            <p>In the garden I sit, by the lovely rose so near,</p>
            <p>Its fragrance, so pure, its presence so clear.</p>
            <br />
            <p>Moments I spent, words I wrote with flair,</p>
            <p>Countless memories, secrets laid bare.</p>
            <br />
            <p>Slowly the breeze changed its way,</p>
            <p>As closeness grew, the rose did stray.</p>
            <p>It would wither if I pluck it away,</p>
            <p>I’d fade too, if I let it stay.</p>
            <br />
            <p>In this dilemma, the evening fell,</p>
            <p>Shattered certainty, no tales to tell.</p>
            <p>Oh sun, guide me—what must I do?</p>
            <p>Your silent nod whispers the clue,</p>
            <p>That time keeps passing through...</p>
          </div>
        </div>
      </main>
    </>
  );
}
