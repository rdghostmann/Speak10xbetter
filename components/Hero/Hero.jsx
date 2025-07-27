"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, Play, Star } from "lucide-react"
import GradientStarIcon from "../GradientStarIcon"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-fit mx-auto flex flex-col lg:flex-row items-center lg:justify-center px-10 md:px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm mb-6"
          >
            {/* <Star className="w-4 h-4 mr-2 animate-pulse" /> */}
            <div className="flex items-center">
              <GradientStarIcon />
              <GradientStarIcon />
              <GradientStarIcon />
              <GradientStarIcon />
              <GradientStarIcon />
              {/* <span className="text-white">Rated 5 Stars</span> */}
            </div>
            <span>Transform Your Communication <br className="hidden" /> Skills in 12 Weeks</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 px-4leading-tight"
          >
            <span className="text-white">Master the <br className="block lg:hidden" /> Art of</span>
            <br className="block" />
            <span className="text-3xl md:text-6xl bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Public Speaking and Communication
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            From stage fright to standing ovations. I help professionals, entrepreneurs, and leaders
            <span className="text-cyan-400 font-semibold"> Speak with Confidence, Impact and Eliminate Stage Fright</span>.
          </motion.p>

          {/* Add Intro Video Here*/}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 px-8 py-6 text-lg"
            >
              <a href="https://calendly.com/ifezuejudith/freeconsultation" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Free Consultation
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg bg-transparent"
              onClick={() => document.getElementById("video")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Success Stories
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16"
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                  <div className="text-white/80">Professionals Trained</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">25+</div>
                  <div className="text-white/80">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">8-12 Weeks</div>
                  <div className="text-white/80">Transformation Program</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
                  <div className="text-white/80">Confidence Guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
