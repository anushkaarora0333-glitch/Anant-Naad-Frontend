import React from "react";

const facts = [
  {
    title: "What music actually is?",
    text: "Music isn't just singing — it's actually three arts combined into one: Geet (गीत — singing), Vaadya (वाद्य — playing an instrument), and Nritya (नृत्य — dance). Ancient texts say singing is the purest of the three, because your own body becomes the instrument — no extra equipment needed"
  },
  {
    title: "India has two classical music systems?",
    text: "Yes! There's Hindustani (हिन्दुस्तानी) classical music, followed across most of India, and Carnatic (कर्नाटक) classical music, followed mainly in South India. Same roots, two different journeys."
  },
  {
    title: "Not all sound is music?",
    text: "Every sound around you — a horn honking, rain falling, a door creaking — is called Dhwani (ध्वनि). But music only picks the sounds that are pleasant enough to build melody from. So all music is sound, but not all sound is music."
  },
  {
    title: 'Sound has a "heartbeat" version?',
    text: `Musical sound is called Naad (नाद), and it comes in two types:
            Anahat Naad (अनाहत नाद) — sound you can only feel, never strike (like your own heartbeat!)
             Aahat Naad (आहत नाद) — sound made by striking or rubbing two things together (a plucked string, a struck drum) — this is the naad we actually use in music.`
  },
   {
    title: 'There are 22 microscopic notes hiding between your 7 swars?',
    text: `They're called Shrutis (श्रुति) — the smallest audible differences in pitch. There are 22 of them in a single octave! Ancient musicians picked these out as the meaningful checkpoints of sound.`
  },
   {
    title: 'Why we only sing 7 notes, not 22?',
    text:`Because singing all 22 shrutis isn't practical for everyone. So musicians picked 7 main shrutis to represent Sa Re Ga Ma Pa Dha Ni (सा रे ग म प ध नी) — the swars we actually use today.`
  },
  {
    title: 'We classify swar as Shuddh, Komal, and Tivra?',
    text:`Shuddh Swar (शुद्ध स्वर) — the natural note, stays right where it is
Komal Swar (कोमल स्वर) — a "softened," lowered note (Re, Ga, Dha, Ni can go komal)
Tivra Swar (तीव्र स्वर) — a "sharpened," raised note (only Ma can go tivra!)
And Sa & Pa never change at all — they're called Achal Swar (अचल स्वर — "unmoving notes").`
  },
  {
    title: 'Your 7 notes can become 12?',
    text:`7 shuddh notes + 4 komal notes + 1 tivra note = 12 notes total in one octave — yes, the same 12 keys you'd find on a harmonium!`
  },
   {
    title: 'Your voice has 3 different zones?',

    text:`They're called Saptaks (सप्तक — octaves):

Mandra Saptak (मंद्र सप्तक) — the deep, low zone
Madhya Saptak (मध्य सप्तक) — the middle zone (most singing happens here)
Taar Saptak (तार सप्तक) — the high, soaring zone`
  },
   {
    title: 'A Raag needs a "parent scale" first?',
    text:`That parent scale is called a Thaat (थाट) — just 7 notes in proper order, with no mood or emotion of its own. Think of it as the skeleton a raag is built on. Pandit Bhatkhande organized all Hindustani raags under just 10 thaats — Bilawal (बिलावल), Kalyan (कल्याण), Bhairav (भैरव), Bhairavi (भैरवी), Kafi (काफी), Poorvi (पूर्वी), Todi (तोड़ी), Marwa (मारवा), Khamaj (खमाज), Asavari (आसावरी).`
  },
   {
    title: 'What actually makes a Raag a Raag?',
    text:`A Raag (राग) is a special, emotional arrangement of notes — at least 5 of them — that follows a fixed up-down pattern (Aaroh-Avroh / आरोह-अवरोह) and has a "leader" note and a "deputy" note. Without that emotional pull (called Ranjakta — रंजकता), it's just a scale, not a raag.`
  }
];

export default function Roots() {
  return (
    <section className="min-h-screen bg-zinc-950 py-12">
     <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
        {facts.map((fact, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-3xl border border-orange-500/20 bg-zinc-900 p-8"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-[#130E22] to-[#2E2050]" />

            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-yellow-400">
                Do You Know?
              </p>

              <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                {fact.title}
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-zinc-300">
                {fact.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}