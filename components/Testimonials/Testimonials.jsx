"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote } from "lucide-react"

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

const testimonials = [
    {
      name: "Victory Sunday Daniel",
      role: "PhD Candidate",
      content:
        "I embarked on an intensive 8-week journey with Ms. Judith Ifezue who provided an individual customized curriculum combining theory, practical sessions, book reading and evaluations. This personalized approach yielded remarkable results: I aced my PhD interview, received a standing ovation at a regional conference, delivered impactful workshop presentations, and received enthusiastic applause after speeches. Most importantly, my day-to-day communication improved significantly, eliminating misunderstandings.",
      highlight: "Aced my PhD interview and received standing ovations",
      img: "/victory-sunday.jpg", // Add image path
    },
    {
      name: "Gideon Okibe",
      role: "Entrepreneur",
      content:
        "You ever met someone whose words can rebuild your confidence from scratch? That's Judith. She's not just a public speaker. She's a transformation architect in the world of communication. Her program doesn't just teach you how to speak, it rebuilds your confidence, eliminates stage fright, and helps you own any room you walk into. I joined her mentorship program and let me tell you, my communication skills, presentation power, and self-belief skyrocketed.",
      highlight: "Transformation architect in communication",
      img: "/gideon-okibe.jpg", // Add image path
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Success{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">Real transformations from real people</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10 group-hover:border-blue-400/30 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <Quote className="w-8 h-8 text-blue-400 mr-3" />
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-cyan-400 font-semibold text-lg mb-3">"{testimonial.highlight}"</p>
                  <p className="text-white/80 leading-relaxed">{testimonial.content}</p>
                </div>

                <div className="flex items-center">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-blue-400"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-blue-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
