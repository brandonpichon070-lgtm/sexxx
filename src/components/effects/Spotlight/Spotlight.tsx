"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SpotlightProps {
  className?: string;
}

export function Spotlight({
  className,
}: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 180,
    damping: 22,
  });

  const y = useSpring(mouseY, {
    stiffness: 180,
    damping: 22,
  });

  function handleMouseMove(
    e: React.MouseEvent<HTMLDivElement>
  ) {
    if (!ref.current) return;

    const rect =
      ref.current.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);

    mouseY.set(e.clientY - rect.top);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        "absolute inset-0 overflow-hidden rounded-inherit pointer-events-none",
        className
      )}
    >
      <motion.div
        style={{
          left: x,
          top: y,
        }}
        className="
        absolute
        h-64
        w-64
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        blur-3xl
        opacity-40
        bg-pink-500/30
        "
      />
    </div>
  );
}
