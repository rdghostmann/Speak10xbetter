"use client";

import Script from "next/script";

export default function Popups() {
  return (
    <>
      {/* Mobile Popup */}
      <div className="block lg:hidden">
        <Script
          id="kit-mobile-popup"
          async
          data-uid="6cf74803ad"
          src="https://judithifezue.kit.com/6cf74803ad/index.js"
          strategy="afterInteractive"
        />
      </div>

      {/* Desktop Popup */}
      <div className="hidden lg:block">
        <Script
          id="kit-desktop-popup"
          async
          data-uid="7b68aa5a2f"
          src="https://judithifezue.kit.com/7b68aa5a2f/index.js"
          strategy="afterInteractive"
        />
      </div>
    </>
  );
}
