"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Users, Mic, Shield, PhoneCall, Target, HeartHandshake, Link } from "lucide-react";
import Image from "next/image"
import speakerImg from "../../public/speaker.jpg"; // adjust path as needed
import CallBtnAction from "../CallBtnAction/CallBtnAction";


export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What is {" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Speak10xBetter {" "}
            </span> ?
          </h2>


          <div className="px-7 space-y-3 text-lg lg:text-3xl sm:text-center text-white/80 max-w-3xl mx-auto">
            <p className="w-full lg:w-3/5 mx-auto">
              Here's the thing - most people are trying to get better at public speaking the wrong way.
            </p>
            <p className="">
              They're taking generic courses, watching random YouTube videos, and hoping things will just click. But they're missing something huge:
            </p>
            <p className="">
              They're focusing on what to say instead of fixing why they're scared to say it.
              And that's exactly why they keep getting passed over in meetings, fumbling through presentations, and watching people who aren't even as smart as them get promoted.
            </p>
            <p className="">
              But the executives and entrepreneurs who consistently own every room they walk into? They figured out something different.
              They know you have to fix the fear first, then build the skills.
            </p>

            <p className="">
              Instead of just memorizing scripts and practicing techniques, they actually deal with the root cause - the psychological stuff that makes your heart race and your mind go blank when people are staring at you.
            </p>
            <p className="">
              Once they eliminate that fear, everything else becomes natural. They don't have to "fake it" or pretend to be confident.              </p> <br />
          </div>

          <div className="px-7 space-y-3 text-lg lg:text-3xl sm:text-center text-left lg:text-justify text-white/80 max-w-3xl mx-auto">
            <p className="">
              They just ARE confident.
            </p>
            <p className="">
              That’s Exactly what we do in “Speak10XBetter”
            </p>
            <p className="">
              They're focusing on what to say instead of fixing why they're scared to say it.
              And that's exactly why they keep getting passed over in meetings, fumbling through presentations, and watching people who aren't even as smart as them get promoted.
            </p>
            <p className="">
              But the executives and entrepreneurs who consistently own every room they walk into? They figured out something different.
            </p>
            <p className="">
              They know you have to fix the fear first, then build the skills.
            </p>
            <p className="">
              Instead of just memorizing scripts and practicing techniques, they actually deal with the root cause - the psychological stuff that makes your heart race and your mind go blank when people are staring at you.
            </p>
            <p className="">
              Once they eliminate that fear, everything else becomes natural. They don't have to "fake it" or pretend to be confident.
            </p>
          </div>
          <hr className="my-10 border-white/10" />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-xl my-10 space-y-3 text-left lg:text-justify text-white/80 max-w-3xl mx-auto"
          >
            <motion.h4
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="font-bold text-2xl text-center mb-7"
            >
              Most Speaking Programs vs. What We Actually Do
            </motion.h4>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Left Column */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6 }}
              >
                <p className="mb-3 font-semibold italic text-red-400">
                  What Everyone Else Does
                </p>
                <ul className="list-none ml-6 mt-2 space-y-1">
                  <li>❌ Give you generic tips that work for some people</li>
                  <li>❌ Focus only on presentation techniques</li>
                  <li>❌ Completely ignore why you're nervous in the first place</li>
                  <li>❌ Treat everyone exactly the same</li>
                  <li>❌ Leave you to figure it out on your own</li>
                  <li>❌ Promise you'll be "confident" after watching some videos</li>
                </ul>
              </motion.div>

              {/* Right Column */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <p className="mb-3 font-semibold italic text-green-400">What We Do The Speak10xBetter Way</p>
                <ul className="list-none ml-6 space-y-1">
                  <li>✅ Actually eliminate your stage fright using proven methods</li>
                  <li>✅ Build real confidence from the inside out</li>
                  <li>✅ Give you daily feedback through voice note analysis</li>
                  <li>✅ Let you practice live with real-time coaching</li>
                  <li>✅ Help you find YOUR authentic voice (not some fake persona)</li>
                  <li>✅ Keep working with you until you actually get results</li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl mx-auto text-white/90 text-lg space-y-4 leading-relaxed"
          >
            <p className="font-semibold text-3xl underline text-white">
              Here's what actually happens in <span className="text-cyan-400">Speak10xBetter</span>:
            </p>

            <ul className="list-none list-inside space-y-2">
              <li>✅ We figure out exactly what's making you nervous (fear of judgment, past bad experiences, blank thoughts etc.)</li>
              <li>✅ We teach you techniques that actually calm your nervous system</li>
              <li>✅ We help you build genuine confidence through structured practice</li>
            </ul>

            <p className="pt-4">
              She’s personally worked with over <strong>500 CEOs, executives, entrepreneurs, and professionals</strong>. Her clients have:
            </p>

            <ul className="list-none list-inside space-y-2">
              <li>💰 Secured over $50 million in funding after improving their pitch presentations</li>
              <li>🎓 Gotten 25+ PhD scholarships abroad through better interview skills</li>
              <li>💼 Closed 7-figure investment deals they were previously too nervous to pursue</li>
              <li>📣 Gone from being overlooked in meetings to leading their teams with confidence</li>
            </ul>

            <p className="pt-4 italic">
              The best part? Every single one of them started exactly where you are right now — knowing they had something valuable to say, but lacking the confidence to say it powerfully.
            </p>

            <p className="text-xl font-semibold text-cyan-400 mt-6">
              Ready to Transform How You Speak?
            </p>

            <p className="text-red-400 font-semibold">
              “Don’t let another opportunity slip by because you couldn’t command the room”
            </p>

            <div className="pt-4">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition">
                📞 Book Your Strategy Call
              </button>
              <p className="text-sm text-white/70 mt-2">
                (Free consultation • No Pressure • See if Speak10XBetter is Right For You.)
              </p>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-3xl blur-2xl"></div>
              <div className="relative bg-black/40 backdrop-blur-sm rounded-3xl p-4 lg:p-8 border border-white/10">
                <Image
                  src={speakerImg}
                  alt="Judith Ifezue - Public Speaking Coach"
                  width={7008}
                  height={4672}
                  className="w-full h-96 object-cover rounded-2xl mb-6"
                  priority
                  placeholder="blur"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Judith Ifezue</h3>
                  <p className="text-blue-400 font-semibold">Executive Public Speaking & Communications Coach</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 px-4 md:px-10 lg:px-16"
          >
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white/80 leading-relaxed">
                We don't just teach public speaking - We transform lives. Our personalized approach combines theory,
                practical sessions, and real-world application to help you overcome stage fright and become a confident,
                impactful speaker.
              </p>
            </div>

            <>
              <div className="grid grid-cols-2 gap-4">
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
                      <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
                      <p className="text-white/70 text-xs">{item.desc}</p>
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
      </div>

      <div className="container mx-auto my-10 text-lg">
        <h4 className="text-center text-xl text-white mx-auto w-4/5 my-4">
          She’s personally worked with over <strong>500 CEOs, executives, entrepreneurs, and professionals</strong>. Her clients have:
        </h4>

        <ul className="list-none space-y-2 w-5/6 lg:w-4/5 mx-auto p-4 rounded-3xl bg-gradient-to-b cyan-500 blue-600 text-white">
          <li>💰 Secured over $50 million in funding after improving their pitch presentations</li>
          <li>🎓 Gotten 25+ PhD scholarships abroad through better interview skills</li>
          <li>💼 Closed 7-figure investment deals they were previously too nervous to pursue</li>
          <li>📣 Gone from being overlooked in meetings to leading their teams with confidence</li>
        </ul>
        <p className="text-center text-white mx-auto w-4/5 my-4">
          Gone from being overlooked in meetings to leading their teams with confidence
        </p>
        <p className="text-center text-white mx-auto w-4/5 my-4">
          The best part? Every single one of them started exactly where you are right now - knowing they had something valuable to say, but lacking the confidence to say it powerfully.
        </p>
      </div>


      <div className="container mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center my-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Judith Ifezue,{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Communications Coach
            </span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image - appears first on small screens, second on md+ screens */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 md:order-2 w-full h-full"
            >
              {/* <div className="relative mb-10 "> */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-3xl blur-2xl"></div> */}
                <div className="relative bg-black/40 backdrop-blur-sm rounded-3xl p-4 lg:p-8 border border-white/10">
                  <Image
                    src={speakerImg}
                    alt="Judith Ifezue - Public Speaking Coach"
                    width={7008}
                    height={4672}
                    className="w-full h-full object-cover rounded-2xl mb-6"
                    priority
                    placeholder="blur"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Judith Ifezue</h3>
                  <p className="text-blue-400 font-semibold">Meet Judith Ifezue, Your Communications Coach</p>
                </div>
              {/* </div> */}
              
            </motion.div>

            {/* Text content - appears second on small screens, first on md+ screens */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2 md:order-1"
            >
              <div className="text-lg space-y-3 text-left lg:text-justify text-white/80 max-w-3xl mx-auto">
                <p>
                  Judith Ifezue—Fondly called "The Eliminator of Stage Fright" by her clients is on a ruthless mission to turn every “I’m too scared to speak” into “I owned that room.”
                </p>
                <p>
                  She has worked with 500+ CEOs, Professionals, 9-5ers, Entrepreneurs, Students, Executives, Founders etc, helped 25+ of Her Clients bag PhD scholarships abroad with the help of her hands‑on Practical Interview Bootcamps and helped 50+ of her clients secure over $50 million in funding after improving their pitch presentation.
                </p>
                <p>
                  She has blasted through the clichés, refined her battle‑tested methods, and crafted a bulletproof system that delivers magnetic presence, laser‑sharp messaging, and unstoppable confidence.
                </p>
                <p>
                  <span className="text-blue-400 font-bold">Here’s the deal:{" "}</span> if you’re still hiding behind slides, mumbling through meetings, or watching opportunities slip by because your voice doesn’t carry weight. She's your best bet. Her clients don’t just speak—they “Speak 10X Better,” closing deals in boardrooms, galvanizing teams, and leaving audiences begging for more.
                </p>
                <p>
                  She blends tradition and innovation—time‑honored techniques (think breath control borrowed from Shakespearean actors) with cutting‑edge neuroscience hacks—so you get evident transformation that sticks. No fluff. No sugar‑coat. Just unfiltered, actionable steps that elevate every word you say.
                </p>
              </div>
            </motion.div>
          </div>




        </motion.div>


      </div>
    </section>
  )
}
