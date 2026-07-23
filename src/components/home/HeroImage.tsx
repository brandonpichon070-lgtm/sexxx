"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, Heart, Star } from "lucide-react";

export function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute left-1/2 top-1/2 -z-20 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/15 blur-[220px]" />
      <div className="absolute inset-0 -z-10 mx-auto h-[650px] w-[650px] rounded-full bg-gradient-to-r from-pink-500/20 via-fuchsia-500/10 to-sky-500/20 blur-[150px]" />
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0, y: [0, -12, 0] }}
        whileHover={{ scale: 1.03, rotate: -0.5, y: -8 }}
        transition={{
          opacity: { duration: 0.7 },
          x: { duration: 0.7 },
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative w-full max-w-lg overflow-hidden rounded-[42px] border border-white/20 bg-white/5 backdrop-blur-lg shadow-[0_40px_120px_rgba(0,0,0,.55)] ring-1 ring-pink-500/20"
      >
        <div className="relative h-[650px] w-full">
          <Image
            src="/images/imagen presentacion.webp.webp"
            alt="Pareja"
            fill
            priority
            quality={100}
            className="object-cover object-center transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute top-0 left-0 h-40 w-full bg-gradient-to-b from-white/10 to-transparent mix-blend-screen pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/50 px-4 py-2 backdrop-blur-md">
            <span className="text-xs uppercase tracking-[0.3em] text-white">
              EXPERIENCIA PREMIUM
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="absolute left-2 top-20 hidden lg:flex items-center rounded-2xl border border-white/10 bg-zinc-900/70 px-5 py-4 shadow-xl backdrop-blur-md"
      >
        <div className="flex items-center gap-3">
          <ShieldCheck className="text-green-400" />
          <div>
            <p className="font-semibold text-white">Pago Seguro</p>
            <p className="text-sm text-zinc-400">SSL + Mercado Pago</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="absolute right-2 top-1/2 hidden -translate-y-1/2 lg:flex items-center rounded-2xl border border-white/10 bg-zinc-900/70 px-5 py-4 shadow-xl backdrop-blur-md"
      >
        <div className="flex items-center gap-3">
          <Truck className="text-sky-400" />
          <div>
            <p className="font-semibold text-white">Envío Discreto</p>
            <p className="text-sm text-zinc-400">Todo México</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.08, y: -4 }}
        className="absolute left-1/2 -bottom-6 flex -translate-x-1/2 items-center rounded-full border border-pink-500/20 bg-zinc-900/80 px-7 py-4 shadow-[0_20px_60px_rgba(236,72,153,.25)] backdrop-blur-md"
      >
        <div className="flex items-center gap-3">
          <Heart size={18} className="text-pink-400" />
          <span className="whitespace-nowrap text-sm font-medium text-white">
            +8,000 experiencias positivas
          </span>
          <Star size={18} className="fill-yellow-400 text-yellow-400" />
          <span className="text-sm text-zinc-300">4.9/5</span>
        </div>
      </motion.div>
    </div>
  );
}
