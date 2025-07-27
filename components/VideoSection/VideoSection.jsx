"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Calendar, Play, X } from "lucide-react"
import { Button } from "../ui/button"

export default function VideoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <section id="video" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See the{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Transformation
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Watch how my students went from nervous speakers to confident leaders
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative group cursor-pointer" onClick={() => setIsVideoOpen(true)}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
            <div className="relative bg-black/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 group-hover:border-blue-400/30 transition-all duration-300">
              <div className="aspect-video relative">
                <img
                  src="../../public/thumbnails.jpg"
                  alt="Success Stories Video Thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-2xl"
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </motion.div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Student Success Stories</h3>
                <p className="text-white/70">
                  Hear directly from professionals who transformed their speaking abilities
                </p>

              </div>
           
            </div>
          </div>

          <div className="w-full my-2 flex item-center justify-center">
               <Button
                size="sm"
                asChild
                className=" bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 px-8 py-6 text-lg"
              >
                <a href="https://calendly.com/ifezuejudith/freeconsultation" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Your Free Consultation
                </a>
              </Button>
          </div>
        </motion.div>

        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                  src="https://drive.google.com/file/d/1oVeZ4ecavmgsM4Zf1sGZyO--QL7POHw_/preview"
                  className="w-full h-full"
                  allow="autoplay"
                  title="Success Stories Video"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
