'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const VSL = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div className='border-none'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={
          isInView
            ? {
              opacity: 1,
              scale: [1, 1.05, 0.95, 1.05, 0.95, 1.05, 1], // 3 zoom in-out cycles
            }
            : { opacity: 0, scale: 0.9 }
        }
        transition={{
          duration: 6, // 3 cycles over 6s
          ease: 'easeInOut',
        }}
        className="max-w-4xl mx-auto"
      >
        <div className="relative group cursor-pointer">
          {/* Glow Blur Behind */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-300" />

          {/* Video Card */}
          <div className="relative bg-black/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 group-hover:border-blue-400/30 transition-all duration-300">
            <div className="aspect-video">
              <video
                src="https://mega.nz/file/WTBlCYJI#A7FEl0uNlWjaP9I0-fkOJh-t_eFfewPUnVu8to1tArY" // Adjust path as needed
                controls
                autoPlay
                muted
                playsInline
                loop
                className="w-full h-full rounded-3xl object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default VSL
