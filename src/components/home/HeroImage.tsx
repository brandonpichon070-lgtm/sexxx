"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Truck,
  Heart,
  Star,
} from "lucide-react";

export function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Glow */}

      <div
        className="
          absolute
          inset-0
          -z-10
          mx-auto
          h-[650px]
          w-[650px]
          rounded-full
          bg-gradient-to-r
          from-pink-500/20
          via-fuchsia-500/10
          to-sky-500/20
          blur-[150px]
        "
      />

      {/* Tarjeta Principal */}

      <motion.div
        initial={{
          opacity: 0,
          x: 80,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -10, 0],
        }}
        whileHover={{
          scale: 1.02,
          rotate: -0.4,
        }}
        transition={{
          opacity: {
            duration: 0.7,
          },
          x: {
            duration: 0.7,
          },
          y: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          relative
          w-full
          max-w-lg
          overflow-hidden
          rounded-[38px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-lg
          shadow-[0_30px_80px_rgba(0,0,0,.45)]
          before:absolute
          before:inset-0
          before:rounded-[38px]
          before:border
          before:border-white/10
          before:pointer-events-none
        "
      >

        {/* Imagen */}

        <div className="relative h-[650px] w-full">

          <Image
            src="/images/hero.jpg"
            alt="Velvet Osmosis"
            fill
            priority
            sizes="(max-width:768px)100vw,550px"
            className="object-cover object-center"
          />

          {/* Luz Superior */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-tr
              from-transparent
              via-white/5
              to-white/10
            "
          />

          {/* Oscurecer */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black
              via-black/20
              to-transparent
            "
          />

          {/* Etiqueta */}

          <div
            className="
              absolute
              left-6
              top-6
              rounded-full
              border
              border-white/10
              bg-black/50
              px-4
              py-2
              backdrop-blur-md
            "
          >

            <span
              className="
                text-xs
                uppercase
                tracking-[0.25em]
                text-white
              "
            >
              Luxury Collection
            </span>

          </div>

          {/* Texto */}

          <div
            className="
              absolute
              bottom-8
              left-8
              right-8
            "
          >

            <p
              className="
                text-xs
                uppercase
                tracking-[0.35em]
                text-zinc-300
              "
            >
              Exclusive
            </p>

            <h2
              className="
                display-font
                mt-3
                text-5xl
                text-white
              "
            >
              Sensual Elegance
            </h2>

            <p
              className="
                mt-4
                leading-7
                text-zinc-300
              "
            >
              Diseñado para quienes buscan una experiencia
              premium con total privacidad.
            </p>

          </div>

        </div>

      </motion.div>

      {/* Tarjeta Izquierda */}

      <motion.div
        initial={{
          opacity: 0,
          x: -40,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, 8, 0],
        }}
        transition={{
          opacity: {
            duration: .6,
          },
          x: {
            duration: .6,
          },
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        whileHover={{
          scale: 1.05,
        }}
        className="
          absolute
          left-2
          top-20
          hidden
          items-center
          rounded-2xl
          border
          border-white/10
          bg-zinc-900/70
          px-5
          py-4
          shadow-xl
          backdrop-blur-md
          lg:flex
        "
      >

        <div className="flex items-center gap-3">

          <ShieldCheck
            size={22}
            className="text-green-400"
          />

          <div>

            <p className="font-semibold text-white">
              Pago Seguro
            </p>

            <p className="text-sm text-zinc-400">
              SSL + Mercado Pago
            </p>

          </div>

        </div>

      </motion.div>
            {/* Tarjeta Derecha */}

      <motion.div
        initial={{
          opacity: 0,
          x: 40,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -8, 0],
        }}
        transition={{
          opacity: {
            duration: 0.6,
          },
          x: {
            duration: 0.6,
          },
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        whileHover={{
          scale: 1.05,
        }}
        className="
          absolute
          right-2
          top-1/2
          hidden
          -translate-y-1/2
          items-center
          rounded-2xl
          border
          border-white/10
          bg-zinc-900/70
          px-5
          py-4
          shadow-xl
          backdrop-blur-md
          lg:flex
        "
      >
        <div className="flex items-center gap-3">

          <Truck
            size={22}
            className="text-sky-400"
          />

          <div>

            <p className="font-semibold text-white">
              Envío Discreto
            </p>

            <p className="text-sm text-zinc-400">
              Todo México
            </p>

          </div>

        </div>

      </motion.div>

      {/* Badge Inferior */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: [0, 8, 0],
        }}
        transition={{
          opacity: {
            duration: 0.7,
          },
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        whileHover={{
          scale: 1.05,
        }}
        className="
          absolute
          left-1/2
          -bottom-6
          flex
          -translate-x-1/2
          items-center
          rounded-full
          border
          border-pink-500/20
          bg-zinc-900/80
          px-7
          py-4
          shadow-[0_20px_60px_rgba(236,72,153,.25)]
          backdrop-blur-md
        "
      >

        <div className="flex items-center gap-3">

          <Heart
            size={18}
            className="text-pink-400"
          />

          <span className="whitespace-nowrap text-sm font-medium text-white">
            +8,000 clientes felices
          </span>

          <Star
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />

        </div>

      </motion.div>

    </div>
  );
}
