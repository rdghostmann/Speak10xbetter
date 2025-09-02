"use client"

import Script from "next/script"

export default function SubscribeForm() {
  return (
    <div className="my-12">
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

      {/* Inline Form */}
      <div className="subscribe-form-container">
        <Script
          async
          data-uid="8a23f31bb4"
          src="https://judithifezue.kit.com/8a23f31bb4/index.js"
        />
      </div>
    </div>
  )
}
