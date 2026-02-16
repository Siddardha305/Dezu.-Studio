"use client";

import { useScroll, useTransform, MotionValue } from "framer-motion";
import { RefObject } from "react";

export function useHero2Animations(
  containerRef: RefObject<HTMLElement | null>
) {
  // 1. Entry Progress
  const { scrollYProgress: entryProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  // 2. Pinned Progress
  const { scrollYProgress: pinnedProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // -----------------------------
  // VIDEO ANIMATIONS
  // -----------------------------

  const width: MotionValue<string> = useTransform(
    [entryProgress, pinnedProgress],
    ([e, p]) => {
      if (e < 1) {
        return `${70 + e * 30}%`;
      } else {
        if (p < 0.2) return "100%";
        if (p > 0.7) return "25%";
        const progress = (p - 0.2) / 0.5;
        return `${100 - progress * 75}%`;
      }
    }
  );

  const height: MotionValue<string> = useTransform(
    [entryProgress, pinnedProgress],
    ([e, p]) => {
      if (e < 1) {
        return `${50 + e * 50}vh`;
      } else {
        if (p < 0.2) return "100vh";
        if (p > 0.7) return "35vh";
        const progress = (p - 0.2) / 0.5;
        return `${100 - progress * 65}vh`;
      }
    }
  );

  const borderRadius: MotionValue<string> = useTransform(
    [entryProgress, pinnedProgress],
    ([e, p]) => {
      if (e < 1) {
        return `${2 * (1 - e)}rem`;
      } else {
        if (p < 0.2) return "0rem";
        if (p > 0.7) return "2rem";
        const progress = (p - 0.2) / 0.5;
        return `${progress * 2}rem`;
      }
    }
  );

  const x: MotionValue<string> = useTransform(
    [entryProgress, pinnedProgress],
    ([e, p]) => {
      if (e < 1) return "0vw";
      if (p < 0.2) return "0vw";
      if (p > 0.7) return "-25vw";
      const progress = (p - 0.2) / 0.5;
      return `${progress * -25}vw`;
    }
  );

  const y: MotionValue<string> = useTransform(
    [entryProgress, pinnedProgress],
    () => "0vh"
  );

  // -----------------------------
  // TEXT ANIMATIONS (FIXED TYPES)
  // -----------------------------

  const textOpacity: MotionValue<number> = useTransform(
    pinnedProgress,
    [0.2, 0.4, 0.9, 1],
    [0, 1, 1, 0]
  );

  const textX: MotionValue<string | number> = useTransform(
    pinnedProgress,
    [0.2, 0.4],
    ["50px", "0px"]
  );

  return {
    width,
    height,
    borderRadius,
    x,
    y,
    textOpacity,
    textX,
  };
}
