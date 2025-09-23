"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Users, Mic, Shield, Target, HeartHandshake } from "lucide-react";
import Image from "next/image"
import speakerImg from "../../public/speaker-portrait.jpg"
import speakerImg2 from "../../public/IMG_9474-2.jpg";
import CallBtnAction from "../CallBtnAction/CallBtnAction";
import Link from "next/link"

const fadeInProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
};


export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-5 px-4" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What is{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Speak10xBetter
            </span>{" "}
            ?
          </h2>

          <div className="px-7 space-y-6 text-lg lg:text-xl sm:text-center text-white/80 max-w-8xl mx-auto">
            <motion.p {...fadeInProps}>
              Here's the thing — most people are trying to get better at public speaking the wrong way.
            </motion.p>

            <motion.p {...fadeInProps}>
              They're taking generic courses, watching random YouTube videos, and hoping things will just click. But they're missing something huge:
            </motion.p>

            <motion.div {...fadeInProps} className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <p>
                  They're focusing on what to say instead of fixing why they're scared to say it.
                </p>
              </div>
            </motion.div>

            <motion.p {...fadeInProps}>
              And that's exactly why they keep getting passed over in meetings, fumbling through presentations, and watching people who aren't even as smart as them get promoted.
            </motion.p>

            <motion.p {...fadeInProps}>
              But the executives and entrepreneurs who consistently own every room they walk into? They figured out something different.
            </motion.p>

            <motion.div {...fadeInProps} className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <p>
                  They know you have to fix the fear first, then build the skills.
                </p>
              </div>
            </motion.div>


            <motion.div {...fadeInProps} className="space-y-2">
              <motion.p {...fadeInProps}>
                Instead of just memorizing scripts and practicing techniques, they actually deal with the root cause — the psychological stuff that makes your heart race and your mind go blank when people are staring at you.
              </motion.p>
              <motion.p {...fadeInProps}>
                Once they eliminate that fear, everything else becomes natural. They don't have to "fake it" or pretend to be confident. They just ARE confident.
              </motion.p>

            </motion.div>

            <motion.div {...fadeInProps} className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <motion.p {...fadeInProps}>That’s exactly what we do in “Speak10XBetter.”</motion.p>

              </div>
            </motion.div>

          </div>

          {/* What Everyone Else Does VS What We Do */}
          <div className="grid lg:grid-cols-2 gap-8 my-16">
            {/* Left Column – What Everyone Else Does */}
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 rounded-2xl p-8 border border-red-500/20 shadow-xl">
              <div className="mb-6">
                <h3 className="font-bold text-2xl text-white mb-2">What Everyone Else Does</h3>
                <p className="text-red-300 text-xl font-medium">The "Just Practice More" Approach</p>
              </div>
              <ul className="space-y-4">
                {[
                  'Give you generic tips that work for some people',
                  'Focus only on presentation techniques',
                  "Completely ignore why you're nervous in the first place",
                  'Treat everyone exactly the same',
                  'Leave you to figure it out on your own',
                  "Promise you'll be \"confident\" after watching some videos",
                ].map((text, idx) => (
                  <li key={idx} className="flex items-start justify-between gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-500/20 flex justify-center items-center mt-0.5 flex-shrink-0 border border-red-500/30">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    </div>
                    <span className="flex-1 text-left text-lg text-gray-200">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column – What We Do */}
            <div className="bg-gradient-to-br from-blue-900/10 to-blue-800/20 rounded-2xl p-8 border border-blue-400/30 shadow-xl">
              <div className="mb-6">
                <h3 className="font-bold text-2xl text-white mb-2">What We Do</h3>
                <p className="text-blue-400 text-xl font-medium">The Speak10XBetter Way</p>
              </div>
              <ul className="space-y-4">
                {[
                  'Actually eliminate your stage fright using proven methods',
                  'Build real confidence from the inside out',
                  'Give you daily feedback through voice note analysis',
                  'Let you practice live with real-time coaching',
                  'Help you find YOUR authentic voice (not some fake persona)',
                  'Keep working with you until you actually get results',
                ].map((text, idx) => (
                  <li key={idx} className="flex items-start justify-between gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="flex-1 text-left text-lg text-gray-200">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>



        </motion.div>
      </div>
      <hr className="my-5 border-white/10" />

      {/* Final CTA Section with Motion */}
      <div className="w-full my-5">
        <div className="container mx-auto text-white/90 text-lg lg:text-2xl space-y-4 leading-relaxed">
          <p className="font-semibold text-center text-3xl underline text-white">
            Here's what actually happens in <span className="text-cyan-400">Speak10xBetter</span>:
          </p>

          <div className="bg-gradient-to-br max-w-5xl mx-auto from-blue-900/10 to-blue-800/20 rounded-2xl p-8 border border-blue-400/30 shadow-xl">
            <ul className="w-full text-lg list-none list-inside space-y-2">
              {[
                'We figure out exactly what"s making you nervous (fear of judgment, past bad experiences, blank thoughts etc.)',
                'We teach you techniques that actually calm your nervous system',
                'We help you build genuine confidence through structured practice',
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="flex-1 text-left text-lg text-gray-200">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center py-4">
            <button className="cursor-pointer animate-bounce px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition">
              <Link
                // className="animate-bounce px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition"
                href="https://calendly.com/ifezuejudith/freeconsultation"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book A Call To Learn More
              </Link>
            </button>
          </div>

          <div className="w-full mx-auto mb-5">
            <div className="text-center my-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Meet Judith, Your{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Communications Coach
                </span>
              </h2>

              {/* Meet Judith */}
              <div className="pt-2 border border-stone-200 rounded-lg flex flex-col lg:flex-row items-center justify-center gap-5 px-5">
                {/* Image */}
                <motion.div
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/2 lg:mt-2 order-1 lg:order-2"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-3xl blur-2xl"></div>
                    <div className="relative bg-black/40 backdrop-blur-sm rounded-3xl border border-white/10">
                      <Image
                        src={speakerImg}
                        alt="Judith Ifezue - Public Speaking Coach"
                        width={2028}
                        height={2028}
                        className="w-full h-full object-cover rounded-2xl"
                        priority
                        placeholder="blur"
                      />
                    </div>
                    <div className="text-center my-6">
                      <h3 className="text-2xl font-bold text-white mb-2">Judith Ifezue</h3>
                      <p className="text-blue-400 font-semibold">Executive Communications Coach</p>
                    </div>
                  </div>
                </motion.div>

                {/* Text */}
                <motion.div
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full lg:w-1/2 order-2 md:order-1"
                >
                  <div className="text-lg space-y-3 text-left lg:text-justify text-white/80">
                    <p className="px-4">
                      Judith Ifezue—Fondly called "The Eliminator of Stage Fright" by her clients is on a ruthless mission
                      to turn every “I’m too scared to speak” into “I owned that room.”
                    </p>
                    <motion.div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl"></div>
                      <div className="relative bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                        <p>
                          She has worked with 500+ CEOs, Professionals, 9-5ers, Entrepreneurs, Students, Executives, Founders
                          etc, helped 25+ of her clients bag PhD scholarships abroad and helped 50+ secure $50 million+ in
                          funding after improving their pitch presentations.
                        </p>
                      </div>
                    </motion.div>

                    <p className="px-4">
                      She has blasted through the clichés, refined her battle-tested methods, and crafted a bulletproof
                      system that delivers magnetic presence, laser-sharp messaging, and unstoppable confidence.
                    </p>
                    <motion.div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl"></div>
                      <div className="relative space-y-3 bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                        <p>
                          <span className="text-blue-400 font-bold">Here’s the deal: </span> if you’re still hiding behind
                          slides, mumbling through meetings, or watching opportunities slip by because your voice doesn’t
                          carry weight—she’s your best bet. Her clients don’t just speak—they “Speak 10X Better.”
                        </p>
                      </div>
                    </motion.div>

                    <p className="px-4 mb-5">
                      She blends tradition and innovation—time-honored techniques with cutting-edge neuroscience hacks—so you
                      get transformation that sticks. No fluff. No sugar-coat. Just unfiltered, actionable steps that elevate
                      every word you say.
                    </p>
                  </div>
                </motion.div>
              </div>

              <hr className="w-full border border-stone-300 my-10" />

              {/* Results Section */}
              <div className="max-w-8xl my-10 mx-auto text-white/90 text-lg lg:text-xl space-y-4 leading-relaxed">
                <div className="relative">
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl z-0" />

                  {/* Main Content */}
                  <div className="relative bg-black/40 backdrop-blur-sm rounded-3xl p-6 border border-white/10 z-10">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      {/* Text */}
                      <div className="space-y-6 flex-1">
                        <h5 className="text-left text-lg text-gray-300">
                          She’s personally worked with over{" "}
                          <strong className="text-white">500 CEOs, executives, entrepreneurs, and professionals</strong>. Her
                          clients have:
                        </h5>

                        <ul className="space-y-4">
                          {[
                            { icon: "💰", text: "Secured over $50 million in funding after improving their pitch presentations." },
                            { icon: "🎓", text: "Delivered award-winning academic talks and thesis defenses." },
                            { icon: "💼", text: "Landed dream job roles and executive promotions by mastering their personal brand." },
                            { icon: "📣", text: "Spoken confidently on global stages and major podcasts." },
                          ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-6 h-6 text-xl mt-0.5 flex-shrink-0">{item.icon}</div>
                              <span className="flex-1 text-left text-lg text-gray-200">{item.text}</span>
                            </li>
                          ))}
                        </ul>

                        <p className="text-lg text-gray-300">
                          <span className="text-cyan-500 font-medium">The best part?</span> Every single one of them{" "}
                          <span className="text-cyan-500 font-medium">started exactly where you are right now</span>.
                        </p>
                      </div>

                      {/* Image */}
                      <div className="flex-1 max-w-md w-full">
                        <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                          <Image
                            src={speakerImg2}
                            alt="Judith Ifezue Public Speaking Coach"
                            width={1076}
                            height={1216}
                            className="w-full h-auto object-cover rounded-2xl"
                            priority
                            placeholder="blur"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Our Mission  */}
      <div className="w-full text-center my-5">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Our{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Mission
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg space-y-6 px-4 md:px-10 lg:px-16"
        >
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <p className="text-white/80 leading-relaxed">
              We don't just teach public speaking - We transform lives. Our personalized approach combines theory,
              practical sessions, and real-world application to help you overcome stage fright and become a confident,
              impactful speaker.
            </p>
          </div>

          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: Award,
                  title: "Expert Coach",
                  desc: "Certified Public Speaking and Communications Coach.",
                },
                {
                  icon: Users,
                  title: "500+ Students",
                  desc: "Successfully trained professionals worldwide",
                },
                {
                  icon: Mic,
                  title: "12 Week Program",
                  desc: "Personalized curriculum tailored to your needs and schedule",
                },
                {
                  icon: Shield,
                  title: "Safe Space",
                  desc: "Safe space to unlearn, learn and re-learn",
                },
                {
                  icon: Target,
                  title: "Results Driven",
                  desc: "Standing ovations and career breakthroughs",
                },
                {
                  icon: HeartHandshake,
                  title: "Ongoing Support",
                  desc: "Personalized guidance and feedback beyond the program",
                }
              ]
                .map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl p-4 border border-blue-400/20"
                  >
                    <item.icon className="w-8 h-8 text-cyan-400 mb-2" />
                    <h4 className="font-semibold text-white text-lg mb-1">{item.title}</h4>
                    <p className="text-white/70 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
            </div>

            {/* Call button under "Meet Your Coach" section */}
            <div className="mt-6 flex space-x-3 justify-center">
              <CallBtnAction />
            </div>
          </>


          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-6 border border-blue-400/30">
            <h4 className="text-lg font-semibold text-white mb-3">What Makes Us Different?</h4>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                Personalized curriculum tailored to your needs and schedule
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                Safe space to unlearn, learn, and re-learn
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                Focus on practical application and real results
              </li>
            </ul>
          </div>
        </motion.div>
      </div>



    </section>
  )
}


