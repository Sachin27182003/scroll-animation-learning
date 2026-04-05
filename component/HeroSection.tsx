"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import mcar from "../public/mcar.png";


// Register ScrollTrigger to avoid warnings and ensure it works
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  // Added TypeScript definitions to the refs
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // ---------------------------------------------------
      // 1. Initial Load Animation (Timeline)
      // ---------------------------------------------------
      const tl = gsap.timeline();

      // Smooth fade + slide up for the headline
      tl.from(headlineRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // Staggered reveal for statistics
      // The '!' tells TypeScript we are certain statsRef.current is not null here
      tl.from(
        statsRef.current!.children,
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2, 
          ease: "power2.out",
        },
        "-=0.6", // Start before the headline animation fully finishes
      );

      // Fade in the main visual smoothly
      tl.from(
        visualRef.current,
        {
          scale: 0.8,
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
        },
        "-=0.8",
      );

      // ---------------------------------------------------
      // 2. Scroll-Based Animation (Core Feature)
      // ---------------------------------------------------
     gsap.to(visualRef.current, {
        scale: 3.5, 
        y: 50, 
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=100%", 
          scrub: 1,
          pin: true,
        },
      });
    },
    { scope: containerRef },
  ); // Scope restricts GSAP selectors to this component

  return (
    <section
      ref={containerRef}
      className="relative h-[130vh] overflow-hidden bg-zinc-950 text-white"
    >
      {/* Removed overflow-hidden from this inner div */}
      <div className="flex h-screen flex-col items-center justify-center px-4 pt-10">
        {/* Headline */}
        <h1
          ref={headlineRef}
          className="mb-6 text-center text-4xl font-bold uppercase tracking-[0.45em] md:text-6xl"
        >
          W E L C O M E <span className="text-blue-500">I T Z F I Z Z</span>
        </h1>

        {/* Statistics */}
        <div ref={statsRef} className="mb-16 flex gap-8 md:gap-16">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-blue-400">98%</span>
            <span className="text-sm tracking-widest text-zinc-400 uppercase">
              Performance
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-blue-400">60fps</span>
            <span className="text-sm tracking-widest text-zinc-400 uppercase">
              Motion Quality
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-blue-400">0.2s</span>
            <span className="text-sm tracking-widest text-zinc-400 uppercase">
              Interaction
            </span>
          </div>
        </div>

        {/* Main Visual (Car) */}
        {/* Reverted to explicit arbitrary values so Tailwind doesn't break */}
        <div
          ref={visualRef}
          className="relative h-37.5 w-75 md:h-62.5 md:w-125"
        >
          <Image
            src={mcar}
            alt="Car Visual"
            fill
            className="object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
