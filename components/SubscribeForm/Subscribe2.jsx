"use client"

import Script from "next/script"

export default function Subscribe() {
  return (
    <div className="flex items-center justify-center my-4">
      {/* Mobile Popup */}
      <Script
        async
        data-uid="6cf74803ad"
        src="https://judithifezue.kit.com/6cf74803ad/index.js"
      />

      {/* Desktop Popup */}
      <Script
        async
        data-uid="7b68aa5a2f"
        src="https://judithifezue.kit.com/7b68aa5a2f/index.js"
      />
    </div>
  )
}
