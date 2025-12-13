"use client";

import { useEffect } from "react";

export default function DepthLight() {
  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      document.documentElement.style.setProperty("--x", `${x}%`);
      document.documentElement.style.setProperty("--y", `${y}%`);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return null;
}
