import Head from "next/head";

export default function jaankar_bhi() {
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
        <div className="pt-16 grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
          {/* Hindi Poem */}
          <div className="text-xl leading-relaxed">
            <h2 className="font-bold text-2xl mb-4 text-primary dark:text-primaryDark">
              हिंदी कविता
            </h2>
            <p>जानकर भी अनजान वो नज़रे,</p>
            <p>गर्मजोशी के चंद अल्फाज़ क्यों नहीं?</p>
            <p>पास थे जो, दूर वो अब है,</p>
            <p>इसका हमें एहसास क्यों नहीं?</p>
            <p>सब कुछ होते हुए भी, आँखें नम,</p>
            <p>हम उदास क्यों हैं?</p>
            <p>अनिश्चितता के साये में,</p>
            <p>घुट रही दिल की आवाज़ क्यों है?</p>
            <p>भ्रम जाल में उलझी ये बातें,</p>
            <p>एक दिन सुलझ ही जाएंगी।</p>
            <p>दोस्ती की गर्माहट में,</p>
            <p>हर तकरार झुलस ही जाएगी।</p>
            <p>छटेंगे बादल हटेगी ये काली घटा,</p>
            <p>सूरज फिर खिलखिलायेगा,</p>
            <p>उदासी से भरा ये चेहरा,</p>
            <p>फिर एक बार खुल के मुस्कुरायेगा।</p>
          </div>

          {/* English Translation */}
          <div className="text-xl leading-relaxed">
            <h2 className="font-bold text-2xl mb-4 text-primary dark:text-primaryDark">
              English Translation
            </h2>
            <p>Though knowing, those eyes remain strangely unaware,</p>
            <p>Why not a few words of warmth, to ease the despair?</p>
            <p>Once close, now distant, they've drifted away,</p>
            <p>Why don't we feel the impact, come what may?</p>
            <p>Despite having everything, our eyes fill with tears,</p>
            <p>Why are we so sad, engulfed in our fears?</p>
            <p>In the shadows of uncertainty, we're trapped and confined,</p>
            <p>Why is the voice of our heart stifled, left behind?</p>
            <p>These tangled thoughts, caught in a web of illusion,</p>
            <p>One day, they'll unravel, find resolution.</p>
            <p>In the warmth of friendship, every conflict will fade,</p>
            <p>Dark clouds will scatter, the darkness will evade.</p>
            <p>The sun will shine, dispelling the gloom and the gray,</p>
            <p>This face, once filled with sorrow, will smile again, come what may.</p>
          </div>
        </div>
      </main>
    </>
  );
}