// SubscribeForm.jsx
"use client";

import { useEffect, useRef } from "react";

export default function SubscribeForm() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (document.querySelector('script[data-uid="8a23f31bb4"]')) return;

    const script = document.createElement("script");
    script.src = "https://judith-ifezue.kit.com/8a23f31bb4/index.js";
    script.async = true;
    script.dataset.uid = "8a23f31bb4";
    el.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="w-full flex justify-center items-center py-2 bg-transparent">
      <div ref={containerRef} className="w-full flex justify-center " />
    </div>
  );
}
