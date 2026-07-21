"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function HeroContent() {
  return (
    <div className="max-w-2xl">

      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .15 }}
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-white/10
          bg-white/5
          px-5
          py-2
          backdrop-blur-xl
        "
      >
        <Sparkles
          className="text-pink-400"
          size={16}
        />

        <span
          className="
            text-sm
            tracking-[0.25em]
            uppercase
            text-zinc-300
          "
        >
          Velvet Osmosis
        </span>
      </motion.div>

      {/* Título */}

      <motion.h1
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: .3,
        }}
        className="
          display-font
          mt-10
          text-6xl
          font-medium
          leading-[0.95]
          tracking-tight
          text-white
          lg:text-7xl
          xl:text-8xl
        "
      >
        El lujo de
        <br />

        <span
          className="
            bg-gradient-to-r
            from-pink-300
            via-fuchsia-400
            to-sky-300
            bg-clip-text
            text-transparent
          "
        >
          descubrir
        </span>

        <br />

        nuevas experiencias.
      </motion.h1>

      {/* Descripción */}

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: .45,
        }}
        className="
          mt-10
          max-w-xl
          text-lg
          leading-8
          text-zinc-400
        "
      >
        Una colección cuidadosamente seleccionada de productos premium
        para transformar la intimidad en una experiencia elegante,
        sofisticada y completamente segura.
      </motion.p>

      {/* Botones */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: .65,
        }}
        className="
          mt-12
          flex
          flex-wrap
          gap-5
        "
      >

        <Link
          href="/shop"
          className="
            group
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-gradient-to-r
            from-pink-500
            to-fuchsia-600
            px-8
            py-4
            text-white
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-[0_0_50px_rgba(236,72,153,.45)]
          "
        >
          Explorar colección

          <ArrowRight
            size={18}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </Link>

        <Link
          href="/categories"
          className="
            rounded-full
            border
            border-white/10
            bg-white/5
            px-8
            py-4
            text-white
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-pink-400/40
            hover:bg-white/10
          "
        >
          Ver categorías
        </Link>

      </motion.div>

      {/* Estadísticas */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: .9,
        }}
        className="
          mt-16
          flex
          flex-wrap
          gap-12
        "
      >

        <div>
          <h3 className="text-4xl font-bold text-white">
            +8K
          </h3>

          <p className="mt-2 text-zinc-500">
            Clientes satisfechos
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-white">
            +350
          </h3>

          <p className="mt-2 text-zinc-500">
            Productos premium
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-white">
            24/7
          </h3>

          <p className="mt-2 text-zinc-500">
            Atención personalizada
          </p>
        </div>

      </motion.div>

    </div>
  );
}
