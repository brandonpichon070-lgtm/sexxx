"use client";

import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <>
      {/* Fondo base */}

      <div className="absolute inset-0 -z-20 bg-transparent" />

      {/* Glow Rosa */}

      <motion.div
        animate={{
          x: [-80, 60, -80],
          y: [-40, 50, -40],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-72
          -top-72
          h-[900px]
          w-[900px]
          rounded-full
          bg-pink-500/20
          blur-[180px]
          -z-10
        "
      />

      {/* Glow Azul */}

      <motion.div
        animate={{
          x: [40, -70, 40],
          y: [30, -40, 30],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-72
          bottom-[-350px]
          h-[900px]
          w-[900px]
          rounded-full
          bg-sky-500/20
          blur-[200px]
          -z-10
        "
      />

      {/* Glow Central */}

      <motion.div
        animate={{
          opacity: [.15, .28, .15],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-fuchsia-500/20
          blur-[220px]
          -z-10
        "
      />

      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
          [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)]
          [background-size:70px_70px]
          -z-10
        "
      />

      {/* Viñeta */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle,transparent_35%,rgba(0,0,0,.55)_100%)]
          -z-10
        "
      />

      {/* Partículas */}

<div className="absolute inset-0 -z-10 overflow-hidden">

  {Array.from({ length: 25 }).map((_, i) => (

    <motion.div
      key={i}
      animate={{
        y: [-30, -500],
        opacity: [0, .35, 0],
      }}
      transition={{
        duration: 10 + Math.random() * 10,
        repeat: Infinity,
        delay: Math.random() * 8,
      }}
      className="absolute h-1 w-1 rounded-full bg-white"
      style={{
        left: `${Math.random() * 100}%`,
        bottom: "-20px",
      }}
    />

  ))}

</div>
    </>
  );

  <div className="hero-noise" />
}
