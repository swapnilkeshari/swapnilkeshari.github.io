import Head from "next/head";

export default function zameen_pe() {
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
            <p>ज़मीन पे चलने वाले,</p>
            <p>मुझे मेरी तहज़ीब बताने</p>
            <p>चले हैं।</p>
            <p>यारो,</p>
            <p>हवा से बातें करता हूँ मैं,</p>
            <p>पहले मुझ तक पहुँच कर</p>
            <p>तो बताओ!</p>
          </div>

          {/* English Translation */}
          <div className="text-xl leading-relaxed">
            <h2 className="font-bold text-2xl mb-4 text-primary dark:text-primaryDark">
              English Translation
            </h2>
            <p>You who walk on the ground,</p>
            <p>Seek to teach me civilization.</p>
            <p>Friends,</p>
            <p>I converse with the wind,</p>
            <p>First reach me,</p>
            <p>Then tell me!</p>
          </div>
        </div>
      </main>
    </>
  );
}