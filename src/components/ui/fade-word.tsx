"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function FadeWord({
  word,
  className,
  delay = 0,
  duration = 0.22,
  playTrigger,
}: {
  word: string;
  className?: string;
  delay?: number;
  duration?: number;
  playTrigger?: unknown;
}) {
  const [playCount, setPlayCount] = useState(0);

  useEffect(() => {
    if (playTrigger === undefined) return;
    setPlayCount((c) => c + 1);
  }, [playTrigger]);

  const chars = Array.from(word);

  return (
    <motion.span
      key={`${word}-${playCount}`}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren: delay,
            staggerChildren: 0.04,
          },
        },
      }}
      className={cn("inline-block", className)}
    >
      {chars.map((ch, i) => (
        <motion.span
          key={`${ch}-${i}`}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, filter: "blur(8px)" },
            show: {
              opacity: 1,
              filter: "blur(0px)",
              transition: { type: "tween", ease: "easeOut", duration },
            },
          }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </motion.span>
  );
}
