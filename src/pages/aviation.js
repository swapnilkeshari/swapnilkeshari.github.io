import Head from "next/head";

export default function Aviation() {
  return (
    <>
      <Head>
        <title>PPL Checkride Experience - Swapnil Keshari</title>
        <meta name="description" content="Private Pilot License Checkride Experience by Swapnil Keshari" />
      </Head>
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <div className="w-full max-w-6xl px-8">
          <h1 className="text-4xl font-bold text-center pt-16 mb-8">PPL Checkride Experience</h1>
          
          {/* Header Information */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
            <div className="text-lg space-y-2">
              <p><strong>Pilot:</strong> Swapnil Keshari</p>
              <p><strong>License:</strong> PPL (Part 61)</p>
              <p><strong>Check Ride:</strong> October 13, 2025</p>
              <p><strong>DPE:</strong> Lester Zook</p>
              <p><strong>Airport:</strong> KBTP @ Runway 08</p>
            </div>
          </div>

          {/* Oral Examination Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary dark:text-primaryDark">1. Oral Examination</h2>
            <p className="text-sm italic mb-4">(Order of questions might be slightly off.)</p>
            
            {/* Documentation and Training */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">a. Documentation and Training</h3>
              <div className="space-y-4 ml-4">
                <div className="ml-4">
                  <p><strong>DPE:</strong> Did you complete all your training at the same school?</p>
                  <p className="ml-8"><strong>Me:</strong> No, my training was done at multiple schools. I started at KAGC with Flyer Academy before moving to KBTP.</p>
                </div>
                <div className="ml-4">
                  <p><strong>DPE:</strong> Please show me your photo ID, student pilot certificate, written test results, and medical.</p>
                  <p className="ml-8"><strong>Me:</strong> [Provided all documents.]</p>
                </div>
                <div className="ml-4">
                  <p><strong>DPE:</strong> Let's take a look at your logbook and endorsements.</p>
                  <p className="ml-8"><strong>Me:</strong> [Handed over the logbook.]</p>
                  <ul className="ml-12 mt-2 space-y-2 text-sm">
                    <li>• <strong>Note:</strong> The DPE mentioned that my §61.107 and §61.109 endorsements were present but didn't match the format he preferred — he then asked to do the sticker version of it.</li>
                    <li>• He also asked for documentation of training requirements. I had marked solos but forgot to tab them, so I had to search for those entries. It would be good to tab all the solos, just to make it easier.</li>
                    <li>• Additionally, I had labeled my solo flights also under "Flight Training Received," which he asked me to correct.</li>
                    <li>• He also wanted to look at the simulated time.</li>
                  </ul>
                </div>
                <p className="ml-4">• <strong>Instructor left the room after this portion.</strong></p>
              </div>
            </div>

            {/* Aircraft Maintenance Logs */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">b. Aircraft Maintenance Logs</h3>
              <div className="space-y-4 ml-4">
                <div className="ml-4">
                  <p><strong>DPE:</strong> Show me the aircraft maintenance records.</p>
                  <p className="ml-8"><strong>Me:</strong> [Showed the engine logbook.]</p>
                  <ul className="ml-12 mt-2 space-y-2 text-sm">
                    <li>• Pointed out the annual and 100-hour inspections.</li>
                    <li>• In my case, the ELT had been replaced during the 100-hour inspection — that served as the most recent ELT check as well.</li>
                    <li>• Also showed the ADs, and he asked me to read what was written about it. I think he was looking for "All the ADs are complied with and no active ADs remain." Just read whatever is on the sticker.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cross-Country and Route Planning */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">c. Cross-Country and Route Planning</h3>
              <div className="space-y-4 ml-4">
                <div className="ml-4">
                  <p><strong>DPE:</strong> Tell me about your planned route. Why are you flying over the lake?</p>
                  <p className="ml-8"><strong>Me:</strong> I planned it that way for efficiency, but I shouldn't fly directly over the lake — there are no suitable emergency landing areas, limited visual cues, and it's generally riskier.</p>
                </div>
                <div className="ml-4">
                  <p><strong>DPE:</strong> Is it legal to fly over the lake?</p>
                  <p className="ml-8"><strong>Me:</strong> Yes, it's legal, but not advisable for the reasons above. I would not do it since I don't think it is safe.</p>
                </div>
                <div className="ml-4">
                  <p><strong>DPE:</strong> What altitude are you planning to cruise at?</p>
                  <p className="ml-8"><strong>Me:</strong> 9,500 ft.</p>
                  <div className="ml-8">
                    <p className="ml-4"><strong>DPE:</strong> Why 9,500 ft?</p>
                    <p className="ml-4"><strong>Me:</strong></p>
                    <ul className="ml-8 mt-2 space-y-1 text-sm">
                      <li>i. It offers good gliding distance in case of an emergency.</li>
                      <li>ii. It's most economical with tailwinds favoring that altitude.</li>
                      <li>iii. Eastbound flight → odd + 500 ft rule.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Pilot and Aircraft Knowledge */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-orange-600 dark:text-orange-400">d. Pilot and Aircraft Knowledge</h3>
              <div className="space-y-4 text-sm ml-4">
                <div className="ml-4">
                  <p><strong>DPE:</strong> What are the alcohol restrictions for pilots?</p>
                  <p className="ml-8"><strong>Me:</strong> No flying within 8 hours of drinking, and not with a BAC ≥ 0.04%.</p>
                </div>
                <div className="ml-4">
                  <p><strong>DPE:</strong> Tell me about the electrical system.</p>
                  <p className="ml-8"><strong>Me:</strong> Two main components of the electrical system are the battery and alternator. To start the plane, the battery is needed, which is connected to the induction coil. Once the engine starts, the alternator takes over and charges the battery. The alternator is connected to the voltage regulator, which powers the bus bar and all the instruments.</p>
                  <p className="ml-8 text-xs italic">However, I think he was looking for the voltage of the battery (12V) and why the alternator is 14V. I responded that the alternator needs to charge the battery, so it must supply a higher voltage.</p>
                </div>
                <div>
                  <p><strong>DPE:</strong> Describe the engine.</p>
                  <p><strong>Me:</strong> L4HAND: Lycoming O320-D3G, 4 stroke/cylinder, horizontally opposed, air-cooled, naturally aspirated, direct drive.</p>
                  <p className="ml-4 text-xs italic">I always forget that this is not complete. Also say carbureted engine.</p>
                </div>
                <div>
                  <p><strong>DPE:</strong> What does "naturally aspirated" mean?</p>
                  <p><strong>Me:</strong> It means the engine relies on atmospheric pressure to draw air in, without turbocharging or supercharging.</p>
                </div>
                <div>
                  <p><strong>DPE:</strong> What if the airplane doesn't have a carburetor?</p>
                  <p><strong>Me:</strong> I don't know. I said it might be gravity-driven fuel going into the engine, or there might be no mixing. Basically, I was guessing and then said I don't know.</p>
                  <p className="ml-4 text-xs italic">He said fuel injection and asked if I had heard about it, to which I said no.</p>
                </div>
                <div>
                  <p><strong>DPE:</strong> What fuel do we use? What fuel can we use?</p>
                  <p><strong>Me:</strong> 100LL. As per the POH, anything above 80 should be OK.</p>
                </div>
                <div>
                  <p><strong>DPE:</strong> Can you use normal car fuel?</p>
                  <p><strong>Me:</strong> Possibly, if it meets the octane requirements (87 or higher), but I'm not sure. I think it should be OK to use.</p>
                </div>
                <div>
                  <p><strong>DPE:</strong> Explain the heating system of the plane.</p>
                  <p><strong>Me:</strong> I'm not sure about it, but I'm fairly confident it's done via heat exchangers using exhaust gas.</p>
                  <div className="ml-4">
                    <p><strong>DPE:</strong> What is a heat exchanger? Do you mean the exhaust gas goes inside the cabin?</p>
                    <p><strong>Me:</strong> No, no. The heat exchanger is made of metal plates; on one side flows exhaust gas, and on the other, natural air. Since the surface area is large, heat transfers to the air coming from the air filters, and that hot air is directed into the cabin.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* In-Flight Scenarios */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-red-600 dark:text-red-400">e. In-Flight Scenarios</h3>
              <div className="space-y-4 ml-4">
                <div className="ml-4">
                  <p><strong>DPE:</strong> What would you do if a passenger becomes sick?</p>
                  <p className="ml-8"><strong>Me:</strong> Make them comfortable, maintain control, and consider landing if needed.</p>
                </div>
                <div className="ml-4">
                  <p><strong>DPE:</strong> What if everyone — including you — starts feeling unwell?</p>
                  <p className="ml-8"><strong>Me:</strong> Land as soon as safely possible; it could indicate hypoxia or carbon monoxide in the cabin, so land ASAP.</p>
                </div>
              </div>
            </div>

            {/* Weather and Flight Planning */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">f. Weather and Flight Planning</h3>
              <div className="space-y-4 text-sm ml-4">
                <div className="ml-4">
                  <p><strong>DPE:</strong> Give me the weather briefing.</p>
                  <p className="ml-8"><strong>Me:</strong> Do you want to see the one I generated to plan the flight?</p>
                  <p className="ml-8"><strong>DPE:</strong> No, generate it again as if we are just flying right now.</p>
                  <p className="ml-8"><strong>Me:</strong> [Generated briefing.]</p>
                </div>
                <div className="ml-4">
                  <p><strong>DPE:</strong> What's on this surface weather chart? Tell me about the "H" and "L" areas. Would you fly through them?</p>
                  <p className="ml-8"><strong>Me:</strong> I said no. I wasn't 100% sure what he was looking for. I said you would typically look at the isobaric lines and the gradient of those to determine how fast the winds are. I think he was looking for "high pressure is safer," but I wasn't sure.</p>
                </div>
                <div>
                  <p><strong>DPE:</strong> What's this yellow line on the chart? Can we fly through it?</p>
                  <p><strong>Me:</strong> It represents the trough.</p>
                </div>
                <div>
                  <p><strong>DPE:</strong> Explain your takeoff and landing distance calculations. How would they change with a 50-ft obstacle?</p>
                  <p><strong>Me:</strong> [Explained calculation method from POH and added required distance for obstacle clearance.]</p>
                </div>
                <div>
                  <p><strong>DPE:</strong> How did you calculate your weight and balance?</p>
                  <p><strong>Me:</strong> [Walked through my method and cross-checked limits within POH.]</p>
                </div>
                <div>
                  <p><strong>DPE:</strong> Perform IMSAFE checklist.</p>
                  <p><strong>Me:</strong> I forgot what "S" was and then got it later. He was cool with it.</p>
                </div>
              </div>
            </div>

            {/* Topics Not Covered */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-600 dark:text-gray-400">g. Topics Not Covered</h3>
              <div className="ml-4">
                <p className="mb-2 ml-4">The DPE did not ask about:</p>
                <ul className="ml-8 space-y-1 text-sm">
                  <li>• Pilot privileges and limitations</li>
                  <li>• Acronyms (PAVE, ATOMATOFLAMES, FLAPS, NWKRAFT)</li>
                  <li>• Types of icing</li>
                  <li>• Squawk codes</li>
                  <li>• Sectional chart interpretation</li>
                  <li>• INOP, MEL, KOEL, AC 91.67</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Flight Portion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary dark:text-primaryDark">2. Brief to the Flight</h2>
            <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-6">
              <p className="text-sm"><strong>DPE:</strong> In the flight portion, we'll see if the pattern is empty; then we'll start there, or else we can follow the planned route. I will check emergency procedures, but I will call them out. If I haven't called it out, assume it's a real emergency, and the exam will be suspended — I'll assist you.</p>
              <p className="text-sm mt-2">There are three outcomes to the exam: Pass, Suspended, or Fail. Clear the area every time since you are the PIC. This is a flight where you are the PIC. Do you have any questions?</p>
              <p className="text-sm mt-2"><strong>Me:</strong> Nope.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary dark:text-primaryDark">3. Practical Flight Time: 1.6 Hours</h2>
            
            {/* Flight sections would continue here with similar formatting... */}
            <div className="space-y-8 text-sm">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-600 dark:text-cyan-400">a. Runup and Initial Procedures</h3>
                <div className="ml-4">
                  <p>During the runup, the examiner asked about the yellow light located just above the voltage/ammeter display. I wasn't sure what it indicated.</p>
                  <p>METAR was 110@07, hence I said it favored Runway 8, which was the active runway at the time.</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-teal-600 dark:text-teal-400">b. Pattern Work</h3>
                <div className="ml-4">
                  <p className="mb-2">We began with a few laps around the pattern since it was empty.</p>
                  <ul className="ml-6 space-y-2">
                    <li>• <strong>Short-Field Takeoff and Landing:</strong> I performed a short-field landing with simulated obstacles, announcing the obstacle during the approach.</li>
                    <li>• During one lap, the examiner said there was a truck on the runway. Believing it was real, I executed a go-around promptly. Later, he mentioned it was a test of my go-around decision-making.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-emerald-600 dark:text-emerald-400">c. Emergency and Special Landings</h3>
                <div className="ml-4">
                  <ul className="ml-4 space-y-2">
                    <li>• On the next lap, he simulated an engine failure, and I was instructed to land within the first one-third of the runway.</li>
                    <li>• Following that, I was asked to perform a soft-field touch-and-go. It was my first time doing a touch-and-go on a soft field, and I realized I was using my hands more than needed to steer.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-rose-600 dark:text-rose-400">d. Cross-Country Navigation and Diversion</h3>
                <div className="ml-4">
                  <p className="mb-2">We then departed on the planned cross-country course toward <strong>KOGS</strong>.</p>
                  <ul className="ml-4 space-y-2">
                    <li>• At <strong>Butler Hospital</strong> (first checkpoint), our timing was accurate.</li>
                    <li>• At <strong>Chicora</strong> (second checkpoint), we arrived about 40 seconds early.</li>
                    <li>• The examiner then asked for a diversion. I selected <strong>McVille Airport</strong> as the nearest option and initially set a heading of <strong>120°</strong>.</li>
                    <li>• I started the timer late, which caused slight confusion about the estimated arrival time. I recalculated and adjusted headings to <strong>130°</strong>, then <strong>150°</strong>, until I located McVille visually.</li>
                  </ul>
                  <p className="ml-4 mt-3">At McVille, I entered midfield for Runway 32, but winds favored Runway 14. I repositioned, called upwind, entered the left traffic pattern for 14, conducted an approach, performed a go-around, and then departed the area on a 270° heading.</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-violet-600 dark:text-violet-400">e. Airwork and Maneuvers</h3>
                <div className="ml-4">
                  <p className="mb-3">We looked for a clear area below the clouds and performed maneuvers under the hood (foggles).</p>
                  <ul className="ml-4 space-y-3">
                    <li>• <strong>Slow Flight:</strong> I cleared the area, then demonstrated climbs, descents, and turns in slow flight, ending with a power-off stall.</li>
                    <li>• <strong>Power-On Stall:</strong> After recovery, I cleared the area again and demonstrated a power-on stall. My first attempt was not a full stall per the examiner's observation, so I repeated it successfully.</li>
                    <li>• <strong>Steep Turns:</strong> Initially, I forgot to clear the area, but then corrected and executed both left and right steep turns smoothly.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-amber-600 dark:text-amber-400">f. Emergency and Ground Reference Maneuvers</h3>
                <div className="ml-4">
                  <p className="mb-2">The examiner simulated an engine failure. I performed the mental checklist and, when he added a simulated fire, transitioned to the yellow arc. Once the "fire" was declared out, I established best glide and identified a potential landing site.</p>
                  <p className="ml-4 mt-3">Next, we did <strong>Turns Around a Point</strong>. I wasn't sure if area clearing was required for ground reference maneuvers, so I skipped it this time.</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-sky-600 dark:text-sky-400">g. Navigation and Return to Base</h3>
                <div className="ml-4 space-y-3">
                  <p>We climbed and navigated using the VOR to <strong>Franklin (FKL)</strong>. I initially fumbled with the GPS buttons — something I know I need to improve — but once configured, navigation went smoothly.</p>
                  <p>After that, the examiner asked me to navigate to <strong>KBTL</strong> using the GPS. Approaching from the south, I tuned the ATIS and noted winds favored Runway 8.</p>
                  <p>Initially, I called to enter via crosswind over the numbers, but about five miles out, I realized I would instead be joining the left downwind for Runway 8. Hence, I corrected it.</p>
                  <p>I joined the pattern, completed the landing checklist, and was instructed to perform a short-field landing. I landed on the numbers, retracted the flaps after touchdown, performed aerodynamic as well as wheel braking, and completed the rollout as we exited the runway at Delta to HFA.</p>
                  <p className="text-xs italic">I accidentally started doing the securing checklist instead of the after-landing checklist, which was embarrassing. I corrected it, parked, and then completed the after-landing checklist. Once done, he said I passed and that we could debrief inside.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Post-Flight Debrief */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary dark:text-primaryDark">4. Post-Flight Debrief (Instructor Present)</h2>
            <div className="bg-yellow-50 dark:bg-yellow-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">Areas for Improvement:</h3>
              <ul className="space-y-2 text-sm ml-4">
                <li>• <strong>Rudder control poor</strong> — legs need to move with hands.</li>
                <li>• Should be <strong>smoother with the controls</strong>.</li>
                <li>• I was <strong>steering with my hands on the ground</strong>, which is wrong.</li>
                <li>• <strong>Oral was OK</strong>.</li>
              </ul>
            </div>
          </section>

          {/* Result */}
          <section className="mb-8">
            <div className="bg-green-100 dark:bg-green-900 rounded-lg p-6 text-center">
              <h2 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-2">✈️ PASSED! ✈️</h2>
              <p className="text-lg">Private Pilot License - Part 61</p>
              <p className="text-sm mt-2">October 13, 2025</p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}