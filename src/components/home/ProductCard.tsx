"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  ShoppingBag,
  Star,
  Eye,
  ArrowRight,
} from "lucide-react";

type ProductCardProps = {
  slug: string;
  name: string;
  price: string;
  category: string;
  imageUrl?: string | null;
};

export function ProductCard({
  slug,
  name,
  price,
  category,
  imageUrl,
}: ProductCardProps) {
  return (
    <motion.article
      whileHover={{ y: -12 }}
      transition={{ duration: 0.35 }}
      className="group"
    >
      <Link href={`/products/${slug}`}>
        <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#0b0b0b] transition-all duration-700 hover:border-pink-500/40 hover:shadow-[0_35px_90px_rgba(236,72,153,.22)]">

          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-fuchsia-500/5" />

          <div className="absolute left-6 top-6 z-30 rounded-full border border-pink-500/20 bg-pink-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-pink-200 backdrop-blur-xl">
            Nuevo
          </div>

          <button className="absolute right-6 top-6 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-xl transition-all duration-500 hover:border-pink-500/40 hover:bg-pink-500 hover:scale-110">
            <Heart size={18}/>
          </button>

          <div className="relative h-[430px] overflow-hidden">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={name}
                fill
                sizes="(max-width:768px)100vw,(max-width:1200px)50vw,25vw"
                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
            ) : (
              <div className="h-full w-full bg-zinc-900" />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute inset-x-0 bottom-8 flex justify-center gap-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
              <button className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xl hover:bg-pink-600">
                <Eye size={20}/>
              </button>

              <button className="flex h-14 items-center gap-2 rounded-full bg-gradient-to-r from-pink-600 to-fuchsia-600 px-8 font-semibold text-white transition hover:scale-105">
                <ShoppingBag size={18}/>
                Comprar
              </button>
            </div>
          </div>

          <div className="relative p-7">
            <p className="text-xs uppercase tracking-[0.30em] text-pink-400">
              {category}
            </p>

            <h3 className="mt-4 line-clamp-2 text-2xl font-black leading-tight text-white transition-colors duration-500 group-hover:text-pink-300">
              {name}
            </h3>

            <div className="mt-5 flex items-center gap-1">
              {[1,2,3,4,5].map((s)=>(
                <Star key={s} size={16} fill="#ec4899" className="text-pink-500"/>
              ))}
              <span className="ml-2 text-sm text-zinc-500">5.0</span>
            </div>

            <div className="mt-8 flex items-end justify-between">
              <div>
                <p className="text-sm text-zinc-500">Desde</p>
                <h4 className="mt-1 text-4xl font-black tracking-tight text-white">
                  ${price}
                </h4>
              </div>

              <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Disponible
              </div>
            </div>

            <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"/>

            <motion.button
              whileHover={{scale:1.02}}
              whileTap={{scale:.98}}
              className="group/button flex w-full items-center justify-center gap-3 rounded-2xl border border-pink-500/20 bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-600 py-4 text-base font-semibold text-white transition-all duration-500 hover:shadow-[0_20px_50px_rgba(236,72,153,.40)]"
            >
              <ShoppingBag size={20}/>
              Agregar al carrito
              <ArrowRight size={18} className="transition-transform duration-300 group-hover/button:translate-x-1"/>
            </motion.button>
          </div>

          <div className="pointer-events-none absolute -bottom-28 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-pink-500/20 opacity-0 blur-[90px] transition-all duration-700 group-hover:opacity-100"/>

          <div className="pointer-events-none absolute inset-0 rounded-[34px] ring-1 ring-white/5 transition-all duration-700 group-hover:ring-pink-500/30"/>
        </div>
      </Link>
    </motion.article>
  );
}
