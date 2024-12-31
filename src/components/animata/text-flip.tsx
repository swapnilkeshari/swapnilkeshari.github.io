"use client";

import { useEffect, useMemo, useRef } from "react";

export default function TextFlip() {
  const words = useMemo(() => ["I was", "I am", "I will be"], []);
  const tallestRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tallestRef.current) {
      let maxHeight = 0;

      words.forEach((word) => {
        const span = document.createElement("span");
        span.className = "absolute opacity-0";
        span.textContent = word;
        tallestRef.current.appendChild(span);
        const height = span.offsetHeight;
        tallestRef.current.removeChild(span);

        if (height > maxHeight) {
          maxHeight = height;
        }
      });

      tallestRef.current.style.height = `${maxHeight}px`;
    }
  }, [words]);

  return (
    <div className="box-content flex gap-4 text-3xl font-base">
      <p className="text-foreground">A Dream</p>
      <div
        ref={tallestRef}
        className="flex flex-col overflow-hidden text-blue-400"
      >
        <div className="absolute flex flex-col animate-flip-words">
          {words.map((word, index) => (
            <span key={index} className="h-full">
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
