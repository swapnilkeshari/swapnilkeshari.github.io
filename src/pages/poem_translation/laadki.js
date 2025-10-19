import Head from "next/head";

export default function laadki() {
  return (
    <>
      <Head>
        <title>Laadki - Poem by Swapnil Keshari</title>
        <meta name="description" content="Poem Laadki by Swapnil Keshari" />
      </Head>
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <h1 className="text-4xl font-bold text-center pt-16">Laadki</h1>
        <div className="pt-16 grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
          {/* Hindi Poem */}
          <div className="text-xl leading-relaxed">
            <h2 className="font-bold text-2xl mb-4 text-primary dark:text-primaryDark">
              हिंदी कविता
            </h2>
            <p>फिर सिरहाने आई वो यादें,</p>
            <p>वर्षों पुरानी बीते कल की बातेँ।</p>
            <p>अजनबी थे कल, आज कुछ नहीं से कुछ बने,</p>
            <p>चंचल, मासूम, बेताबी भरे किस्से बुने।</p>
            <p>नादान अनजान, धीमे-धीमे हुआ उसे एकतरफा प्यार।</p>
            <p>फिर क्या था, शुरू हुई दोनों के बीच तकरार।</p>
            <p>हाथ था उसको ज़ख्म खुरद मरहम लगाने की,</p>
            <p>और लड़की ने यही न करने की ठानी थी।</p>
            <p>परेशान, हैरान, बेचैन वो ज़िद्दी जवान,</p>
            <p>दर्द और गलतफहमीयों में डूबोया, दोनों का जहाँ।</p>
            <p>प्रारंभ अब होता कुछ से कुछ नहीं का सफ़र,</p>
            <p>थके वही आदतों से, झुके कंधे और झुका मेरा सर।</p>
            <p>बढ़ा आगे, मगर क्यों लिए बोझिल यादें?</p>
            <p>उसने भी, नहीं तोड़ी क्यों वो अनकही दीवारें?</p>
            <p>आज भी मिलन की आस, खोजे उसके शब्दों में भाव,</p>
            <p>क्या पता, कैसे, कब, या कभी नहीं भरेंगे वो घाव।</p>
            <p>थेरा मैं गैर, पहुँचेंगे भी तुझ तक शायद न ये शब्द।</p>
            <p>क्या पता क्या होगा आगे, जाने तो ये सिर्फ रब।</p>
          </div>

          {/* English Translation */}
          <div className="text-xl leading-relaxed">
            <h2 className="font-bold text-2xl mb-4 text-primary dark:text-primaryDark">
              English Translation
            </h2>
            <p>Those memories, they returned to my pillow,</p>
            <p>Tales of yesterday, years old and mellow.</p>
            <p>Strangers then, now bound by an unseen thread,</p>
            <p>Stories woven, with playful hearts and dread.</p>
            <p>Innocent and unaware, a one-sided love bloomed,</p>
            <p>Then discord arose, their peaceful world consumed.</p>
            <p>A hand outstretched, to heal the wounds so deep,</p>
            <p>But the girl refused, her heart secrets to keep.</p>
            <p>Distressed and confused, the stubborn youth,</p>
            <p>Their world drowned in pain and bitter truth.</p>
            <p>A journey begins, a path where nothing's the same,</p>
            <p>Weary of habits, shoulders bowed, my head hangs in shame.</p>
            <p>I move on, but why carry these burdens so sore?</p>
            <p>She too, why hold on to those unspoken walls, evermore?</p>
            <p>Even now, I yearn for a meeting, seek meaning in her words,</p>
            <p>Who knows, how, when, or if these wounds will ever be stirred.</p>
            <p>A stranger I am, these words may never reach your shore.</p>
            <p>What lies ahead, only fate will explore.</p>
          </div>
        </div>
      </main>
    </>
  );
}