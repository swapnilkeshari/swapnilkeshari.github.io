import Head from "next/head";

export default function chaar_paahiyon() {
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
            <p>चार पहियों पे भागती इस जिंदगी में,</p>
            <p>चार पल हमारे साथ तुम बिता ना पाए।</p>
            <p>आये तुम ठंडी हवा के झोके की तरह,</p>
            <p>और आँधी की तरह तबाही मचा गये।</p>
            <p>काश,</p>
            <p>होता कोई पुल हमारे जीवन में भी,</p>
            <p>पाट देता जो,</p>
            <p>विपरीत दिशा में बढती इन जिंदगीयो,</p>
            <p>की खाईयों को,</p>
            <p>अपनी हरियली से।</p>
            <p>खैर,</p>
            <p>इस सफर का ये रास्ता अब कहा ले जयेगा,</p>
            <p>ये तो आने वाला वक्त ही बतयेगा।</p>
            <p>चाह है यही बस की ये तुमसे हमें ना,</p>
            <p>कभी मिलाएगा।</p>
          </div>

          {/* English Translation */}
          <div className="text-xl leading-relaxed">
            <h2 className="font-bold text-2xl mb-4 text-primary dark:text-primaryDark">
              English Translation
            </h2>
            <p>In this life, a journey on four wheels,</p>
            <p>You couldn't spend even a moment with us.</p>
            <p>You came like a gust of cool breeze,</p>
            <p>And wreaked havoc like a storm, it seems.</p>
            <p>If only,</p>
            <p>There was a bridge in our lives,</p>
            <p>That could fill,</p>
            <p>The chasm between these diverging paths,</p>
            <p>With its verdant embrace.</p>
            <p>Well,</p>
            <p>Where this road of life will lead us,</p>
            <p>Only time will tell.</p>
            <p>My only wish is that you and I,</p>
            <p>Will never meet again.</p>
          </div>
        </div>
      </main>
    </>
  );
}