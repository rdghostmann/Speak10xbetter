"use client"

import Script from "next/script"

export default function Subscribe() {
  return (
    <div className="my-12">
      {/* MailerLite Universal Popup & Inline */}
      <Script
        id="mailerlite-universal"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
            .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
            n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
            (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
            ml('account', '1775763');
          `,
        }}
      />
       {/* You can add your inline form markup here if needed */}
    </div>
  )
}