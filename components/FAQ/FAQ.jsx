// FAQ.jsx
"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import SubscribeForm from "../SubscribeForm/SubscribeForm"

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How long is the public speaking program?",
      answer:
        "The intense program runs for 8 weeks, with personalised curriculum, combining theory, practical sessions, and real-world application. Each week focuses on different aspects of public speaking, from overcoming stage fright to mastering body language and vocal delivery.",
    },
    {
      question: "How can I be sure this program is right for me?",
      answer:
        "This is only for you if you are serious about Elevating your Communications Skills. You’re not buying theory—you’re enrolling in a field‑tested system. Cookie‑cutter modules? Not here. Every drill, every class, every feedback loop is calibrated to your unique strengths and blind spots. If you’re ready to commit to personalized, practical practice—and I mean actual reps—you’ll see the difference from Session 1.",
    },
    {
      question: "What makes your coaching approach different?",
      answer:
        "We provide a safe space to learn, re-learn, and unlearn. Our approach combines personalized curriculum, practical application, and real-world scenarios. We don't just teach - we transform by focusing on building confidence from the ground up.",
    },
    {
      question: "Can you help with severe stage fright?",
      answer:
        "Many of our students started with severe stage fright and now receive standing ovations. Our program specifically addresses anxiety, builds confidence gradually, and provides practical techniques to overcome fear.",
    },
    {
      question: "What kind of results can I expect?",
      answer:
        "Students typically see significant improvements in confidence, communication clarity, and presentation skills. Many have aced interviews, received standing ovations, and advanced their careers. Results vary, but the transformation is always remarkable.",
    },
    {
      question: "Do you offer one-on-one coaching?",
      answer:
        "Yes! we provide individual customized curriculum that adapts to your learning style, schedule, and specific goals. This personalized approach ensures maximum impact and faster results.",
    },
    {
      question: "Is there ongoing support after the program?",
      answer:
        "We believe in long-term success. Students receive continued guidance and can reach out for support as they apply their new skills in real-world situations.",
    },
  ]

  return (
    <>
      <section id="faq" className="py-20 px-4" ref={ref}>
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-white/80">Everything you need to know about transforming your speaking skills</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:border-blue-400/30 transition-all duration-300 overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <h3 className="text-xl font-semibold text-white pr-4">{faq.question}</h3>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    )}
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? "auto" : 0,
                      opacity: openIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
