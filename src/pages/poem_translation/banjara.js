import Head from "next/head";

export default function banjara() {
  return (
    <>
      <Head>
        <title>Banjara - A Wandering Soul</title>
        <meta name="description" content="A poem about a wandering soul by Swapnil Keshari" />
      </Head>
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <h1 className="text-4xl font-bold text-center pt-16">Banjara</h1>
        <div className="pt-16 grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
          {/* Hindi Poem */}
          <div className="text-xl leading-relaxed">
            <h2 className="font-bold text-2xl mb-4 text-primary dark:text-primaryDark">
              हिंदी कविता
            </h2>
            <p>दर बदर तू यूँ भटकता जाए,</p>
            <p>और लोगन के दिलों को तटोलता जाए।</p>
            <p>हर किस्से कहानी को लिखता जाए,</p>
            <p>एक गीत तु खुद ही लिखता जाए।</p>
            <p>वो गीत मेन भी है, देख रस अनेक,</p>
            <p>कुछ खुशमिजाज़ और मीठे,</p>
            <p>तोह कुछ उदास और टूटे,</p>
            <p>पर इन अमोल अहसास को एक धुन,</p>
            <p>तू खुद ही देता जाए।</p>
            <p>धुन भी हो या असी जब तू वो गुन गुनाए</p>
            <p>तोह हर लम्हा याद आये</p>
            <p>तू यादों के उस समंदर मेन,</p>
            <p>तू खुद अपने को ढूंढ पाए।</p>
            <p>और फिर...</p>
            <p>तू दर बदर यूँ भटकता जाए</p>
          </div>

          {/* English Translation */}
          <div className="text-xl leading-relaxed">
            <h2 className="font-bold text-2xl mb-4 text-primary dark:text-primaryDark">
              English Translation
            </h2>
            <p>You wander aimlessly, from door to door,</p>
            <p>And touch the hearts of people, exploring.</p>
            <p>Each tale, each story, you write with grace,</p>
            <p>A song of your own, you create a space.</p>
            <p>That song has flavors, sweet and sour too,</p>
            <p>Some joyous tunes, some melodies of blue.</p>
            <p>But in these feelings, a rhythm you find,</p>
            <p>A melody unique, for your restless mind.</p>
            <p>When you sing, this tune, a memory's spark,</p>
            <p>Each moment, a flashback, leaving its mark.</p>
            <p>In that ocean of memories, you roam and stray,</p>
            <p>Searching for yourself, come what may.</p>
            <p>And then...</p>
            <p>You wander aimlessly, from door to door.</p>
          </div>
        </div>
      </main>
    </>
  );
}