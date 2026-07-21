"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Category {
  id: string;
  name: string;
  slug: string;
  imageUrl?: string | null;
}

interface CategoriesProps {
  categories: Category[];
}

export function Categories({
  categories,
}: CategoriesProps) {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Fondo */}

      <div className="absolute inset-0 -z-20 bg-[#050505]" />

      {/* Glow Izquierdo */}

      <div className="absolute -left-52 top-10 -z-10 h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-[180px]" />

      {/* Glow Derecho */}

      <div className="absolute -right-52 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-fuchsia-500/10 blur-[180px]" />

      {/* Glow Azul */}

      <div className="absolute left-1/2 top-40 -z-10 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-sky-500/5 blur-[180px]" />

      <div className="container mx-auto px-6">

        {/* Encabezado */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .7,
          }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >

          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-pink-500/20
              bg-pink-500/10
              px-5
              py-2
              text-sm
              tracking-widest
              text-pink-300
              backdrop-blur-xl
            "
          >
            EXPLORE VELVET OSMOSIS
          </span>

          <h2
            className="
              mt-8
              text-5xl
              font-black
              tracking-tight
              text-white
              md:text-6xl
            "
          >
            Compra por Categoría
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-zinc-400
            "
          >
            Descubre nuestras colecciones cuidadosamente seleccionadas para
            brindarte una experiencia sofisticada, privada y exclusiva.
          </p>

        </motion.div>

        {/* Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2">

          {categories.map((category, index) => (

            <motion.div
              key={category.id}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: .7,
                delay: index * .12,
              }}
            >

              <Link
                href={`/categories/${category.slug}`}
                className="block"
              >

                <article
                  className="
                    group
                    relative
                    h-[480px]
                    overflow-hidden
                    rounded-[34px]
                    border
                    border-white/10
                    bg-zinc-900
                    transition-all
                    duration-700
                    hover:-translate-y-4
                    hover:border-pink-500/40
                    hover:shadow-[0_40px_100px_rgba(236,72,153,.30)]
                  "
                >

                  {/* Imagen */}

                  <Image
                    src={
                      category.imageUrl ??
                      "/images/category-placeholder.jpg"
                    }
                    alt={category.name}
                    fill
                    sizes="(max-width:768px)100vw,(max-width:1280px)50vw,50vw"
                    className="
                      object-cover
                      transition-all
                      duration-700
                      group-hover:scale-110
                      group-hover:rotate-1
                    "
                  />

                  {/* Overlay Principal */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black
                      via-black/30
                      to-transparent
                    "
                  />

                  {/* Glow Hover */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-pink-500/20
                      via-transparent
                      to-fuchsia-500/10
                      opacity-0
                      transition-opacity
                      duration-700
                      group-hover:opacity-100
                    "
                  />

                  {/* Borde iluminado */}

                  <div
                    className="
                      absolute
                      inset-0
                      rounded-[34px]
                      ring-1
                      ring-white/5
                    "
                  />

                  {/* Contenido */}

                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      p-8
                    "
                  >

                    <span
                      className="
                        inline-flex
                        rounded-full
                        border
                        border-white/10
                        bg-white/10
                        px-4
                        py-2
                        text-xs
                        uppercase
                        tracking-[0.25em]
                        text-white/80
                        backdrop-blur-md
                      "
                    >
                      Colección Premium
                    </span>

                    <div className="mt-6 flex items-center justify-between">

                      <div>

                        <h3
                          className="
                            text-4xl
                            font-black
                            tracking-tight
                            text-white
                          "
                        >
                          {category.name}
                        </h3>

                        <p
                          className="
                            mt-3
                            max-w-sm
                            text-base
                            leading-7
                            text-zinc-300
                          "
                        >
                          Explora una selección exclusiva diseñada para una
                          experiencia elegante, segura y discreta.
                        </p>

                      </div>
                                            <motion.div
                        whileHover={{
                          scale: 1.08,
                        }}
                        whileTap={{
                          scale: 0.96,
                        }}
                        className="
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/10
                          bg-white/10
                          text-white
                          backdrop-blur-xl
                          transition-all
                          duration-500
                          group-hover:border-pink-500/40
                          group-hover:bg-pink-500
                          group-hover:shadow-[0_0_35px_rgba(236,72,153,.45)]
                        "
                      >
                        <ArrowRight
                          size={24}
                          className="
                            transition-transform
                            duration-500
                            group-hover:translate-x-1
                          "
                        />
                      </motion.div>

                    </div>

                  </div>

                </article>

              </Link>

            </motion.div>

          ))}

        </div>

        {/* CTA Inferior */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .7,
            delay: .2,
          }}
          className="mt-20 flex justify-center"
        >

          <Link
            href="/categories"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-white/10
              bg-white/5
              px-8
              py-4
              text-sm
              font-medium
              text-white
              backdrop-blur-xl
              transition-all
              duration-500
              hover:border-pink-500/40
              hover:bg-pink-500/10
              hover:shadow-[0_20px_60px_rgba(236,72,153,.20)]
            "
          >

            Ver todas las categorías

            <ArrowRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />

          </Link>

        </motion.div>

      </div>

    </section>
  );
}
