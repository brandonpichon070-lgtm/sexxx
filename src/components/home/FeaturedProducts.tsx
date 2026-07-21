"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/product/product-card";

const products = [
  {
    id: 1,
    slug: "kit-premium-parejas",
    name: "Kit Premium para Parejas",
    category: "Premium",
    price: "899",
    imageUrl: "/images/products/product1.jpg",
  },
  {
    id: 2,
    slug: "coleccion-luxury",
    name: "Colección Luxury",
    category: "Luxury",
    price: "1299",
    imageUrl: "/images/products/product2.jpg",
  },
  {
    id: 3,
    slug: "accesorio-elegance",
    name: "Accesorio Elegance",
    category: "Elegance",
    price: "599",
    imageUrl: "/images/products/product3.jpg",
  },
  {
    id: 4,
    slug: "edicion-exclusiva",
    name: "Edición Exclusiva",
    category: "Exclusive",
    price: "1599",
    imageUrl: "/images/products/product4.jpg",
  },
];

const filters = ["Todos","Premium","Parejas","Luxury","Nuevos"];

export function FeaturedProducts() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 -z-20 bg-[#050505]" />
      <div className="absolute -left-40 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-[170px]" />
      <div className="absolute -right-40 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-fuchsia-500/10 blur-[180px]" />
      <div className="absolute left-1/2 top-44 -z-10 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-sky-500/5 blur-[180px]" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:.7}}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-pink-500/20 bg-pink-500/10 px-5 py-2 text-sm uppercase tracking-[0.30em] text-pink-300">
            Velvet Selection
          </span>

          <h2 className="mt-8 text-5xl font-black tracking-tight text-white md:text-6xl">
            Productos Destacados
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Nuestra selección exclusiva reúne los productos favoritos de nuestros clientes con piezas premium.
          </p>
        </motion.div>

        <div className="mb-16 flex flex-wrap justify-center gap-4">
          {filters.map((filter,index)=>(
            <motion.button
              key={filter}
              initial={{opacity:0,y:20}}
              whileInView={{opacity:1,y:0}}
              transition={{delay:index*.08}}
              whileHover={{y:-3}}
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm uppercase tracking-[0.20em] text-zinc-300 backdrop-blur-xl transition-all duration-500 hover:border-pink-500/40 hover:bg-pink-500/10 hover:text-white"
            >
              {filter}
            </motion.button>
          ))}
        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product,index)=>(
            <motion.div
              key={product.id}
              initial={{opacity:0,y:40}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{delay:index*.12}}
            >
              <ProductCard
                slug={product.slug}
                name={product.name}
                category={product.category}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:.7,delay:.2}}
          className="mt-24 flex justify-center"
        >
          <Link
            href="/products"
            className="group inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-10 py-5 text-sm font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-pink-500/40 hover:bg-pink-500/10 hover:shadow-[0_20px_60px_rgba(236,72,153,.20)]"
          >
            Explorar catálogo completo
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1"/>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
