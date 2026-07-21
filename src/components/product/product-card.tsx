"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  slug: string;
  name: string;
  category: string;
  price: string;
  imageUrl: string;
}

export function ProductCard({
  slug,
  name,
  category,
  price,
  imageUrl,
}: ProductCardProps) {
  return (
    <Link
      href={`/products/${slug}`}
      className="group block overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/40 hover:shadow-[0_20px_60px_rgba(236,72,153,.20)]"
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="space-y-3 p-6">
        <span className="text-xs uppercase tracking-[0.25em] text-pink-300">
          {category}
        </span>

        <h3 className="text-xl font-semibold text-white">
          {name}
        </h3>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-white">
            ${price}
          </span>

          <span className="rounded-full bg-pink-500 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors group-hover:bg-pink-400">
            Ver
          </span>
        </div>
      </div>
    </Link>
  );
}
