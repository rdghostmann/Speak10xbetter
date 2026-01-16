'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const videoFiles = [
  "https://4ix0i03wex.ufs.sh/f/TmhCWfVbiDYpfMXvg9tXbWqB4zs0MRiLgTQ6AZNVe1pdEaYh",
  "https://4ix0i03wex.ufs.sh/f/TmhCWfVbiDYpOGODJZQ8t2peuLPJxWTkNFVY9AnjZ50CSIrO",
  "https://4ix0i03wex.ufs.sh/f/TmhCWfVbiDYpdqKi8U91uqtMpOjhb6cmWoLa8CFlzrsEYZf5"
]

const SuccessStories = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="success-stories" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See the{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Transformation
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Watch how our students went from nervous speakers to confident leaders
          </p>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Real transformations from real people
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videoFiles.map((file, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <video
                controls
                muted
                playsInline
                loop
                className="w-full h-auto rounded-lg"
              >
                <source src={file} type="video/mp4" />

                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SuccessStories

