"use client";

import { motion } from "framer-motion";

import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";
import { HeroFeatures } from "./HeroFeatures";


export function HeroBanner() {
  return (
    <section className="relative overflow-hidden">

      {/* Fondo */}

      <HeroBackground />

      <div
        className="
          relative
          z-10
          container
          mx-auto
          min-h-screen
          px-6
          pt-40
          pb-24
        "
      >
        <div
          className="
            grid
            items-center
            gap-20
            lg:grid-cols-2
          "
        >
          {/* Texto */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: .8,
            }}
          >
            <HeroContent />
          </motion.div>

          {/* Imagen */}

          <motion.div
    whileHover={{
        scale: 1.02,
        rotate: -.4,
    }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
          >
            <HeroImage />
          </motion.div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .9,
          }}
          className="mt-24"
        >
          <HeroFeatures />
        </motion.div>

      </div>

    </section>
  );
}
