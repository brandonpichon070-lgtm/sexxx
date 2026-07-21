"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";

interface MagneticProps {
  children: ReactNode;
  strength?: number;
}

export function Magnetic({
  children,
  strength = 25,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 180,
    damping: 18,
    mass: 0.2,
  });

  const y = useSpring(mouseY, {
    stiffness: 180,
    damping: 18,
    mass: 0.2,
  });

  function handleMove(
    e: React.MouseEvent<HTMLDivElement>
  ) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) / strength;
    const deltaY = (e.clientY - centerY) / strength;

    mouseX.set(deltaX);
    mouseY.set(deltaY);
  }

  function reset() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      style={{
        x,
        y,
      }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  );
}
