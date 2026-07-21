"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CategoryHero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-fuchsia-950/40 via-black to-black" />
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-pink-500/20 blur-[140px]" />

      <div className="mx-auto flex w-[95%] max-w-7xl flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-pink-300"
        >
          Velvet Osmosis
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-8 max-w-5xl bg-gradient-to-r from-white via-pink-200 to-fuchsia-300 bg-clip-text text-6xl font-black leading-tight text-transparent lg:text-7xl"
        >
          Descubre nuestras colecciones premium
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400"
        >
          Explora categorías cuidadosamente seleccionadas para ofrecer una
          experiencia elegante, discreta y de la más alta calidad.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-5"
        >
          <Link
            href="/products"
            className="rounded-full bg-pink-500 px-8 py-4 font-semibold text-white transition hover:bg-pink-600"
          >
            Explorar productos
          </Link>

          <Link
            href="#grid"
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-pink-500"
          >
            Ver categorías
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default CategoryHero;
