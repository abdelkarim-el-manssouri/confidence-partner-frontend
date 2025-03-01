"use client";
import { useEffect, useRef } from "react";

export const FitWithText = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    resizeText();

    window.addEventListener("resize", resizeText);

    return () => {
      window.removeEventListener("resize", resizeText);
    };
  }, []);

  const resizeText = () => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) {
      return;
    }

    const containerWidth = container.offsetWidth;
    let min = 1;
    let max = 2500;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      text.style.fontSize = mid + "px";

      if (text.offsetWidth <= containerWidth) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }

    text.style.fontSize = max + "px";
  };

  return (
    <div
      className="flex h-13 md:h-34 2xl:h-40 w-full items-center overflow-hidden relative"
      ref={containerRef}
    >
      <span
        className="absolute bottom-0 left-0 mx-auto whitespace-nowrap text-center bg-gradient-to-br from-moonMist to-fadedjade uppercase text-transparent bg-clip-text font-hurme font-black"
        ref={textRef}
      >
        confidence partner Consulting
      </span>
    </div>
  );
};
