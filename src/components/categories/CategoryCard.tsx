"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export interface CategoryCardProps {
  title: string;
  description?: string;
  image?: string | null;
  href: string;
  products?: number;
}

export function CategoryCard({
  title,
  description,
  image,
  href,
  products,
}: CategoryCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-zinc-950
        shadow-[0_0_40px_rgba(236,72,153,.08)]
      "
    >
      <Link href={href}>

        <div className="relative h-80 overflow-hidden">

          {image ? (
            <>
              <Image
                src={image}
                alt={title}
                fill
                className="
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/40
                  to-transparent
                "
              />
            </>
          ) : (
            <>
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-fuchsia-950
                  via-zinc-950
                  to-black
                "
              />

              <div
                className="
                  absolute
                  -top-20
                  -right-20
                  h-56
                  w-56
                  rounded-full
                  bg-pink-500/20
                  blur-3xl
                "
              />

              <div
                className="
                  absolute
                  -bottom-16
                  -left-16
                  h-44
                  w-44
                  rounded-full
                  bg-fuchsia-500/20
                  blur-3xl
                "
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles
                  size={90}
                  className="text-pink-500/20"
                />
              </div>
            </>
          )}

          <div className="absolute inset-0 flex flex-col justify-end p-7">

            <div className="mb-5">

              <span
                className="
                  rounded-full
                  border
                  border-pink-500/30
                  bg-pink-500/10
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-pink-300
                "
              >
                {products
                  ? `${products} productos`
                  : "Premium Collection"}
              </span>

            </div>

            <h3
              className="
                text-4xl
                font-black
                text-white
              "
            >
              {title}
            </h3>

            <p
              className="
                mt-3
                line-clamp-2
                text-zinc-300
              "
            >
              {description ??
                "Descubre productos seleccionados cuidadosamente para ofrecer una experiencia premium."}
            </p>

            <motion.div
              whileHover={{
                x: 6,
              }}
              className="
                mt-7
                flex
                items-center
                gap-3
                font-semibold
                text-pink-400
              "
            >
              Explorar categoría

              <ArrowRight size={18} />
            </motion.div>

          </div>

        </div>

      </Link>
    </motion.div>
  );
}

export default CategoryCard;
