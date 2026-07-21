"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  imageUrl?: string | null;
  name: string;
};

export function ProductGallery({
  imageUrl,
  name,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -40,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: .6,
      }}
      className="sticky top-28"
    >
      <div
        className="
          group
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-zinc-900
          shadow-[0_0_60px_rgba(236,72,153,.12)]
        "
      >
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-fuchsia-500/10" />

        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            width={900}
            height={900}
            priority
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />
        ) : (
          <div className="flex aspect-square items-center justify-center bg-zinc-900 text-zinc-500">
            Sin imagen
          </div>
        )}
      </div>

      {/* Miniaturas preparadas para futuras imágenes */}

      <div className="mt-6 grid grid-cols-4 gap-4">

        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="
              aspect-square
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-zinc-900
              transition
              hover:border-pink-500
            "
          >
            {imageUrl && (
              <Image
                src={imageUrl}
                alt={name}
                width={200}
                height={200}
                className="h-full w-full object-cover"
              />
            )}
          </div>
        ))}

      </div>
    </motion.div>
  );
}
