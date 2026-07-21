"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export function CategoryCTA() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-600/10 via-fuchsia-600/10 to-purple-600/10" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex w-[95%] max-w-6xl flex-col items-center rounded-[40px] border border-white/10 bg-white/5 px-8 py-20 text-center backdrop-blur-xl"
      >
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-pink-500/15 text-pink-400">
          <Sparkles size={32} />
        </div>

        <h2 className="max-w-3xl text-5xl font-black text-white">
          Tu próxima experiencia premium comienza aquí.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Descubre productos cuidadosamente seleccionados con envíos discretos,
          calidad garantizada y una experiencia de compra elegante.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <Link
            href="/products"
            className="rounded-full bg-pink-500 px-8 py-4 font-semibold text-white transition hover:bg-pink-600"
          >
            Ver catálogo
          </Link>

          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-pink-500"
          >
            Contactar
            <ArrowRight size={18} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default CategoryCTA;
