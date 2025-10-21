import Head from "next/head";

export default function Sharita() {
  return (
    <>
      <Head>
        <title>Sharita | Hindi & English</title>
        <meta
          name="description"
          content="Sharita - A Hindi poem by Swapnil Keshari with English translation side by side."
        />
      </Head>
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <h1 className="text-4xl font-bold text-center pt-16">Sharita</h1>
        <div className="pt-16 grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
          {/* Hindi Poem */}
          <div className="text-xl leading-relaxed">
            <h2 className="font-bold text-2xl mb-4 text-primary dark:text-primaryDark">
              हिंदी कविता (via ChatGPT)
            </h2>

            <p>शरीता</p>
            <br />
            <p>एक लड़की, दुबली सावली, थोड़ी सी बावली,</p>
            <p>साज़ से सुरिली उसकी आवाज़,</p>
            <p>परवाह करे सबकी, उसका गुस्सा हिफाज़ती,</p>
            <p>मगर होती छोटी बातों पे नाराज़।</p>
            <p>तारों से चमकती उसकी आंखें,</p>
            <p>नाम के ज़िक्र से धड़कने जागें।</p>
            <p>दुनिया चले वो भागे, उसके सपने हैरत से आगे।</p>
            <p>खिलाड़ी, कभी चित्रकार, कभी शायर,</p>
            <p>कोशिश कभी नाचने की, उसका मासूम व्यवहार।</p>
            <br />

            <p>अजीब सा रिश्ता हमारा,</p>
            <p>कभी की गानों में बातें, लिखे किस्से दिन रात।</p>
            <p>कभी खाली चिट्ठी ही काफी थी बयां करने सारे लम्हात,</p>
            <p>कभी अकस्मात रास्तों में टकराना,</p>
            <p>कभी दूर से छवि चुराना।</p>
            <br />

            <p>बता ना,</p>
            <p>खिला तो है सूरज, क्यों कपकपाती सर्द?</p>
            <p>नज़रों में मदहोशी, क्यों है चाल बे चाल?</p>
            <p>घेरे हैं कांटें, क्यों नहीं घटे काटें?</p>
            <p>तेरा नाम खुशी फिर मिले क्यों दर्द?</p>
            <p>क्या हुआ जो कोई गाये बिना सुर ताल?</p>
            <p>दिन में भी क्यों मन खोजता रातें?</p>
            <br />

            <p>ना मिल, मगर बात बार-बार, ना दे कोई जवाब,</p>
            <p>दूजी दुनिया तेरी, इश्क़ तेरा और तेरे ख्वाब।</p>
            <p>काला अतीत मैं, अब कौन मैं, क्या मेरे जज़्बात,</p>
            <p>तेरे नाम ने बना दिया अमावस की वो रात।</p>
            <br />

            <p>यादों की राख से भरा, गुलाबी चोले से ढका,</p>
            <p>दिल अपना भेज रहा तुझको।</p>
            <p>नदी बैठी तेरे शेहर, आंसू बहें जिसमे उस दोपहर,</p>
            <p>गंगा से समझा बहा देना उसको।</p>
          </div>

          {/* English Translation */}
          <div className="text-xl leading-relaxed">
            <h2 className="font-bold text-2xl mb-4 text-primary dark:text-primaryDark">
              English Translation (via ChatGPT)
            </h2>

            <p>Sharita</p>
            <br />
            <p>A slender, dusky girl — a little dreamy, a little wild,</p>
            <p>Her voice, a melody tuned with style.</p>
            <p>She cares for all, guards her anger tight,</p>
            <p>Yet sulks at little things with quiet might.</p>
            <p>Eyes that sparkle brighter than stars,</p>
            <p>Her name alone makes hearts race afar.</p>
            <p>The world runs on — she chases wonder’s hue,</p>
            <p>A player, a painter, a poet too.</p>
            <p>Sometimes she dances, sometimes she tries,</p>
            <p>Childlike grace in all she implies.</p>
            <br />

            <p>Strange is the bond we share,</p>
            <p>Songs and stories — nights we’d dare.</p>
            <p>A blank letter once was enough to tell,</p>
            <p>All those moments that in silence fell.</p>
            <p>Sometimes a sudden street-side meet,</p>
            <p>Sometimes her shadow — a stolen treat.</p>
            <br />

            <p>Tell me,</p>
            <p>If the sun still blooms, why the cold despair?</p>
            <p>Why the dazed eyes, why that vacant stare?</p>
            <p>Why do thorns surround, why don’t they fade?</p>
            <p>Why does your name bring joy — and pain’s cascade?</p>
            <p>What if someone sings offbeat, untuned?</p>
            <p>Why does day still crave the moon?</p>
            <br />

            <p>Don’t meet me — no need to reply,</p>
            <p>Your world, your love, your dreams — they fly.</p>
            <p>Dark is my past, who am I now?</p>
            <p>Your name turned me to a moonless vow.</p>
            <br />

            <p>From ashes of memories, wrapped in rose attire,</p>
            <p>My heart I send to you entire.</p>
            <p>By the river that flows through your noon,</p>
            <p>Let Ganga take it — dissolve it soon.</p>
          </div>
        </div>
      </main>
    </>
  );
}
