"use client"

import Script from "next/script"
import { useEffect, useState } from "react"

export default function Subscribe() {
  const [showOverlay, setShowOverlay] = useState(false)

  useEffect(() => {
    // Wait for popup forms to mount
    const timer = setTimeout(() => {
      const popups = document.querySelectorAll(
        "form[data-uid='6cf74803ad'], form[data-uid='7b68aa5a2f']"
      )

      popups.forEach((popup) => {
        popup.classList.add("popup-content") // mark for styling

        const observer = new MutationObserver(() => {
          if (popup.style.display !== "none") {
            setShowOverlay(true)
          } else {
            setShowOverlay(false)
          }
        })

        observer.observe(popup, {
          attributes: true,
          attributeFilter: ["style", "open"],
        })
      })
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="my-12">
      {/* Overlay */}
      {showOverlay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          {/* Popup container */}
          <div className="relative z-60 bg-white p-6 rounded-xl shadow-lg max-w-lg w-full">
            {/* Popup will be injected inside here */}
            <div id="popup-wrapper"></div>
          </div>
        </div>
      )}

      {/* Mobile Popup */}
      <Script
        async
        data-uid="6cf74803ad"
        src="https://judithifezue.kit.com/6cf74803ad/index.js"
        onLoad={() => {
          // Move injected popup into our wrapper
          const popup = document.querySelector("form[data-uid='6cf74803ad']")
          if (popup) {
            document.getElementById("popup-wrapper")?.appendChild(popup)
          }
        }}
      />

      {/* Desktop Popup */}
      <Script
        async
        data-uid="7b68aa5a2f"
        src="https://judithifezue.kit.com/7b68aa5a2f/index.js"
        onLoad={() => {
          const popup = document.querySelector("form[data-uid='7b68aa5a2f']")
          if (popup) {
            document.getElementById("popup-wrapper")?.appendChild(popup)
          }
        }}
      />
    </div>
  )
}
