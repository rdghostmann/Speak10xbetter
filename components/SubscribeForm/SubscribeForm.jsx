"use client"

import { useEffect, useRef } from "react"

export default function SubscribeForm() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Avoid loading script multiple times
    if (document.querySelector(`script[data-uid="8a23f31bb4"]`)) return

    const script = document.createElement("script")
    script.src = "https://judithifezue.kit.com/8a23f31bb4/index.js"
    script.async = true
    script.dataset.uid = "8a23f31bb4"
    containerRef.current.appendChild(script)
  }, [])

  return (
    <div className="w-full flex justify-center items-center py-12 bg-gray-50">
      <div ref={containerRef} className="max-w-xl w-full flex justify-center"></div>
    </div>
  )
}
