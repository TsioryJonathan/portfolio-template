// components/CustomCursor.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  // Raw mouse position
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // Smooth spring values for fluid movement
  const springConfig = { damping: 20, stiffness: 150 };
  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);

  // Hover state on interactive elements
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };
    const onEnter = (e: MouseEvent) => {
      const t = e.target;
      if (
        t instanceof HTMLElement &&
        (t.matches("a") ||
          t.matches("button") ||
          t.hasAttribute("data-cursor-hover"))
      ) {
        setHovered(true);
      }
    };
    const onLeave = (e: MouseEvent) => {
      const t = e.target;
      if (
        t instanceof HTMLElement &&
        (t.matches("a") ||
          t.matches("button") ||
          t.hasAttribute("data-cursor-hover"))
      ) {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onEnter);
    window.addEventListener("mouseout", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onEnter);
      window.removeEventListener("mouseout", onLeave);
    };
  }, [rawX, rawY]);

  return (
    <>
      {/* Ring / Outline */}
      <motion.div
        style={{ x, y }}
        animate={{
          scale: hovered ? 2.5 : 1,
          borderColor: hovered ? "#AE48FF" : "#6344F5",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="pointer-events-none fixed top-0 left-0 w-8 h-8 border-2 border-[#6344F5] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-[9998]"
      />

      {/* Center dot */}
      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed top-0 left-0 w-3 h-3 bg-[#AE48FF] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-[9999]"
      />
    </>
  );
}
