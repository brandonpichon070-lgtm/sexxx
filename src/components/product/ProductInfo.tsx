"use client";

import { Star, ShieldCheck, Truck, CreditCard, BadgeCheck } from "lucide-react";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { WishlistButton } from "@/components/wishlist/WishlistButton";
import { motion } from "framer-motion";

type Variant = {
  id: string;
};

type Props = {
  id: string;
  slug: string;
  name: string;
  description?: string | null;
  price: number;
  category: string;
  brand: string;
  variants: Variant[];
};

export function ProductInfo({
  id,
  slug,
  name,
  description,
  price,
  category,
  brand,
  variants,
}: Props) {
  const hasVariant = variants.length > 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      {/* Categoría */}

      <span className="rounded-full bg-pink-500/10 px-4 py-2 text-sm text-pink-400">
        {category}
      </span>

      {/* Rating */}

      <div className="mt-5 flex items-center gap-2">

        <div className="flex text-pink-500">

          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={18}
              fill="currentColor"
            />
          ))}

        </div>

        <span className="text-zinc-400">
          4.9 (128 reseñas)
        </span>

      </div>

      {/* Nombre */}

      <h1 className="mt-6 text-5xl font-black leading-tight text-white">
        {name}
      </h1>

      {/* Marca */}

      <p className="mt-4 text-zinc-400">
        Marca:
        <span className="ml-2 font-semibold text-white">
          {brand}
        </span>
      </p>

      {/* Precio */}

      <div className="mt-10">

        <p className="text-sm uppercase tracking-widest text-zinc-500">
          Precio
        </p>

        <h2 className="mt-2 text-5xl font-black text-pink-400">
          ${price.toLocaleString()}
        </h2>

      </div>

      {/* Descripción */}

      <p className="mt-8 text-lg leading-8 text-zinc-300">
        {description || "Sin descripción disponible."}
      </p>

      {/* Beneficios */}

      <div className="mt-10 space-y-5 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

        <div className="flex items-center gap-4">
          <ShieldCheck className="text-green-400" />
          <span>Compra protegida y segura</span>
        </div>

        <div className="flex items-center gap-4">
          <Truck className="text-pink-400" />
          <span>Envíos a todo México</span>
        </div>

        <div className="flex items-center gap-4">
          <CreditCard className="text-blue-400" />
          <span>Pago seguro con Mercado Pago</span>
        </div>

        <div className="flex items-center gap-4">
          <BadgeCheck className="text-yellow-400" />
          <span>Producto original garantizado</span>
        </div>

      </div>

      <hr className="my-10 border-zinc-800" />

      {/* Botones */}

      {hasVariant ? (
        <>
          <AddToCartButton
            id={id}
            slug={slug}
            name={name}
            price={price}
            variantId={variants[0].id}
          />

          <div className="mt-5">
            <WishlistButton productId={id} />
          </div>
        </>
      ) : (
        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-5 text-red-400">
          Este producto aún no tiene variantes registradas.
        </div>
      )}

      {/* Información extra */}

      <div className="mt-12 grid grid-cols-2 gap-6">

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

          <p className="text-sm text-zinc-500">
            Disponibilidad
          </p>

          <p className="mt-2 font-semibold text-green-400">
            En stock
          </p>

        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

          <p className="text-sm text-zinc-500">
            Envío
          </p>

          <p className="mt-2 font-semibold text-white">
            2-5 días hábiles
          </p>

        </div>

      </div>

    </motion.div>
  );
}
