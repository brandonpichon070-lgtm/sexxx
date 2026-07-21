"use client";

import { motion } from "framer-motion";

export function BlogHero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-28">

      <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-950/30 via-black to-black" />

      <div className="mx-auto max-w-7xl px-6 text-center relative">

        <motion.span
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          className="text-pink-400 uppercase tracking-[0.4em] text-sm"
        >
          Velvet Osmosis
        </motion.span>

        <motion.h1
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          transition={{delay:.2}}
          className="mt-8 text-6xl font-black text-white"
        >
          Blog
        </motion.h1>

        <motion.p
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:.4}}
          className="mx-auto mt-8 max-w-3xl text-lg text-zinc-400"
        >
          Consejos, bienestar, educación sexual,
          relaciones y novedades.
        </motion.p>

      </div>

    </section>
  );
}

export default BlogHero;
