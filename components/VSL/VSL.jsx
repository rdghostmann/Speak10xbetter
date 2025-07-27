'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from "framer-motion"
import { useRef, useState } from "react"



const VSL = () => {
     const ref = useRef(null)
     const isInView = useInView(ref, { once: true, margin: "-100px" })
   return (
      <>
         <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
         >
            <div className="relative group cursor-pointer">
               <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
               <div className="relative bg-black/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 group-hover:border-blue-400/30 transition-all duration-300">
                  <div className="aspect-video relative">
                     <video
                        width="100%"
                        height="100%"
                        controls
                        autoPlay
                        muted
                        playsInline
                        className="rounded-lg shadow-lg"
                     >
                        <source
                           src="https://mugxw0xytrcwypxj.public.blob.vercel-storage.com/IMG_9146.MP4"
                           type="video/mp4"
                        />
                        Your browser does not support the video tag.
                     </video>
                  </div>
               </div>
            </div>
         </motion.div>
      </>

   )
}

export default VSL
