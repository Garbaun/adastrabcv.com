"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: React.ReactNode;
  direction?: "left" | "right" | "up";
  delay?: number;
  className?: string;
  distance?: number;
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  distance = 90,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fromVars: gsap.TweenVars = { opacity: 0, duration: 1, delay, ease: "power3.out" };
    if (direction === "left") fromVars.x = -distance;
    if (direction === "right") fromVars.x = distance;
    if (direction === "up") fromVars.y = distance;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        fromVars,
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 87%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [direction, delay, distance]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
