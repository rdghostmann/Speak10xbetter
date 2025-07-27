"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Users, Mic, Shield, PhoneCall, Target, HeartHandshake } from "lucide-react";
import Image from "next/image"
import speakerImg from "../../public/speaker.jpg"; // adjust path as needed


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
            Meet Your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Speaking Coach
            </span>
          </h2>
          <div className="text-xl text-justify text-white/80 max-w-3xl mx-auto">
            <p className="">
              Judith Ifezue—Fondly called "The Eliminator of Stage Fright" by her clients is on a ruthless mission to turn every “I’m too scared to speak” into “I owned that room.”
            </p> <br />
            <p className="">
              She has worked with 500+ CEOs, Professionals, 9-5ers, Entrepreneurs, Students, Executives, Founders etc, helped 25+ of Her Clients bag PhD scholarships abroad with the help of her hands‑on Practical Interview Bootcamps and helped 50+ Founders within her clientbase close 7 figure investments deals in U$D. She has blasted through the clichés, refined her battle‑tested methods, and crafted a bulletproof system that delivers magnetic presence, laser‑sharp messaging, and unstoppable confidence.
            </p> <br />
            <p className="">
              Here’s the deal: if you’re still hiding behind slides, mumbling through meetings, or watching opportunities slip by because your voice doesn’t carry weight. She's your best bet. Her clients don’t just speak —they “Speak 10X Better,” closing deals in boardrooms, galvanizing teams, and leaving audiences begging for more.
            </p> <br />
            <p className="">
              She blends tradition and innovation—time‑honored techniques (think breath control borrowed from Shakespearean actors) with cutting‑edge neuroscience hacks—so you get evident transformation that sticks. No fluff. No sugar‑coat. Just unfiltered, actionable steps that elevate every word you say.          </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-3xl blur-2xl"></div>
              <div className="relative bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <Image
                  src={speakerImg}
                  alt="Judith Ifezue - Public Speaking Coach"
                  width={7008}
                  height={4672}
                  className="w-full h-96 object-cover rounded-2xl mb-6"
                  priority
                  placeholder="blur"
                />
                {/* <img
                  src="/speaker.jpg"
                  alt="Judith Ifezue - Public Speaking Coach"
                  className="w-full h-96 object-cover rounded-2xl mb-6"
                /> */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Judith Ifezue</h3>
                  <p className="text-blue-400 font-semibold">Certified Public Communications Coach</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">My Mission</h3>
              <p className="text-white/80 leading-relaxed">
                I don't just teach public speaking - I transform lives. My personalized approach combines theory,
                practical sessions, and real-world application to help you overcome stage fright and become a confident,
                impactful speaker.
              </p>
            </div>

            {/* <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Award, title: "Expert Coach", desc: "Certified Public Speaking and Communications Coach." },
                { icon: Users, title: "500+ Students", desc: "Successfully trained professionals worldwide" },
                { icon: Mic, title: "8 - 12 Week Program", desc: "tailored to your needs and schedule" },
                { icon: Target, title: "Results Driven", desc: "Standing ovations and career breakthroughs" },
              ].map((item, index) => (
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
            </div> */}
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
                    title: "8 - 12 Week Program",
                    desc: "Tailored to your needs and schedule",
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
              <div className="mt-6 flex justify-center">
                <a
                  href="tel:+234XXXXXXXXXX"
                  className="inline-flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-cyan-500 transition"
                >
                  <PhoneCall className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </>


            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-6 border border-blue-400/30">
              <h4 className="text-lg font-semibold text-white mb-3">What Makes Me Different?</h4>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  Personalized curriculum tailored to your needs
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Safe space to learn, re-learn, and unlearn
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
    </section>
  )
}
