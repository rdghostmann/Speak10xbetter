"use client";

import { useEffect, useRef } from "react";

export default function SubscribeForm() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (document.querySelector('script[data-uid="8a23f31bb4"]')) return;

    const script = document.createElement("script");
    script.src = "https://judithifezue.kit.com/8a23f31bb4/index.js";
    script.async = true;
    script.dataset.uid = "8a23f31bb4";
    el.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="w-full flex justify-center items-center py-12 bg-gradient-to-r from-blue-600/30 to-cyan-600/20">
      <div ref={containerRef} className="max-w-xl w-full flex justify-center my-7" />
    </div>
  );
}
