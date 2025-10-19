"use client";
import React from "react";
import { SparklesCore } from "@/components/aceternity/sparkles";

export function Sparkles(
  {
    id = "tsparticlesfullpage",
    background = "transparent",
    minSize = 0.6,
    maxSize = 1.4,
    particleDensity = 100,
    particleColor = "#FFFFFF",
    className = "",
  }
) {
  return (
    (<div
      className="h-full relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id={id}
          background={background}
          minSize={minSize}
          maxSize={maxSize}
          particleDensity={particleDensity}
          particleColor={particleColor}
          className={className}
           />
      </div>
    </div>)
  );
}
