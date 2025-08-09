'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const videoFiles = [
"https://mega.nz/file/LOYSTJCB#UGPHewQ9wy9DeIFaJvdLEWbY29aSqC8h7dwZLgjPvNQ",  
"https://mega.nz/file/2epmhTYS#-DmussFM98tQW2PLC_7qFO6vy-BQLRt1FsnHYNQ77_Q", 
"https://mega.nz/file/za4xFBbZ#YwnJ0rj4xNKED0tTajK3uXw2JXNAR3W1LUg5FC2eXII"
]

const SuccessStories = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="#success-stories" className="py-20 px-4" ref={ref}>
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
                src={file}
                controls
                // autoPlay
                muted
                playsInline
                loop
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SuccessStories

  // const videoFiles = [
  //   'https://mugxw0xytrcwypxj.public.blob.vercel-storage.com/IMG_0096.MP4',
  //   'https://mugxw0xytrcwypxj.public.blob.vercel-storage.com/IMG_9146.MP4',
  //   'https://mugxw0xytrcwypxj.public.blob.vercel-storage.com/IMG_5232.MOV',
  // ]