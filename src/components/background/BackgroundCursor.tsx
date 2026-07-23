"use client";

import { useEffect, useState } from "react";

export function BackgroundCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      className="cursor-glow"
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
}
