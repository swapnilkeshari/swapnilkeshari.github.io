import Head from "next/head";

export default function moorkh_tu() {
  return (
    <>
      <Head>
        <title>Moorkh Tu, Kal Kaal Mein Jee Raha</title>
        <meta name="description" content="Moorkh Tu, Kal Kaal Mein Jee Raha" />
      </Head>
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <h1 className="text-4xl font-bold text-center pt-16">
          Moorkh Tu, Kal Kaal Mein Jee Raha
        </h1>
        <div className="pt-16 grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
          {/* Hindi Poem */}
          <div className="text-xl leading-relaxed">
            <h2 className="font-bold text-2xl mb-4 text-primary dark:text-primaryDark">
              हिंदी कविता
            </h2>
            <p>मूर्ख तू, कल काल में जी रहा,</p>
            <p>निशब्द तू, अक्षरों में आज कहानी सी रहा।</p>
            <p>और जो लिखेगा खूब, मगर लिखेगा उदास,</p>
            <p>उचित ही, ज़ेहन में तेरे इतने गुमसुम अहसास।</p>
            <br />
            <p>तेरा इश्क रूह दुखाए,</p>
            <p>दोस्ती तेरी रिश्ते झुलसाए।</p>
            <p>झूठी मुस्कान, लिए ज़ेहन में गम,</p>
            <p>चुराता नज़रें है अब जो तेरी आंखें नम।</p>
            <br />
            <p>तेरे जख्मों ने कितने आंसू दिए,</p>
            <p>करते फिकर जो तेरी, बेबस वो अब चले दूरी लिए।</p>
            <p>क्षमा की आस है तुझको उनसे,</p>
            <p>मगर माफ करेगा कैसे तू खुद को खुद ही से?</p>
            <br />
            <p>घमंड, गुरूर, खुशी थी तेरी,</p>
            <p>दुखाया तूने उसका ही दिल।</p>
            <p>घूम जाएगा तू वक्त में,</p>
            <p>यही अब तेरा सफर “स्वप्निल”।</p>
          </div>

          {/* English Translation */}
          <div className="text-xl leading-relaxed">
            <h2 className="font-bold text-2xl mb-4 text-primary dark:text-primaryDark">
              English Translation
            </h2>
            <p>Foolish you, dwelling in time long gone,</p>
            <p>Silent now, in words a story is drawn.</p>
            <p>What you’ll write might be splendid yet grim,</p>
            <p>For your mind holds echoes, so silent and dim.</p>
            <br />
            <p>Your love has scarred a soul so deep,</p>
            <p>Your friendship burned ties it couldn’t keep.</p>
            <p>A fake smile hides the sorrow within,</p>
            <p>Your tearful eyes now conceal your sin.</p>
            <br />
            <p>Your wounds have shed tears by the score,</p>
            <p>Those who cared, now distant, care no more.</p>
            <p>You seek forgiveness from those you’ve hurt,</p>
            <p>But can you forgive yourself in this desert?</p>
            <br />
            <p>Pride and ego, your joy once was,</p>
            <p>Yet you broke the heart without a pause.</p>
            <p>Lost in time, you’ll wander still,</p>
            <p>For this is your journey now, "Swapnil."</p>
          </div>
        </div>
      </main>
    </>
  );
}
