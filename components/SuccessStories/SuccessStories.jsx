'use client'

import React, { useEffect, useState, useRef, Suspense } from 'react'
import { motion, useInView } from 'framer-motion'

const SuccessStories = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await fetch('/api/videos')
      const data = await res.json()
      setVideos(data)
    }

    fetchVideos()
  }, [])

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
            Success{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Real transformations from real people
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {videos.map(({ file, url }) => (
            <Suspense fallback={<p className="text-white">Loading video...</p>} key={file}>
              <video
                controls
                preload="none"
                className="w-full h-auto rounded-lg shadow-lg"
              >
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Suspense>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SuccessStories
