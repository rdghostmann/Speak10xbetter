'use client'

import React from 'react'

const VSL = () => {
  return (
    <div className="hero_vsl-wrapper p-4">
      <div className="vsl w-full">
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
  )
}

export default VSL
