"use client";

import { useEffect, useRef } from "react";

export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        ref.current?.style.setProperty("--x", `${e.clientX}px`);
        ref.current?.style.setProperty("--y", `${e.clientY}px`);
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <div ref={ref} aria-hidden className="spotlight pointer-events-none fixed inset-0 -z-10" />;
}
