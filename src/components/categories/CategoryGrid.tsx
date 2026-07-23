"use client";

import { motion } from "framer-motion";
import { CategoryCard } from "./CategoryCard";

const categories = [
  {
    title: "Lencería",
    description: "Elegancia, sensualidad y comodidad en una sola colección.",
    image: "/images/categories/lenceria.jpg",
    href: "/products?category=lenceria",
    products: 42,
  },
  {
    title: "Lubricantes",
    description: "Experiencias más cómodas y placenteras.",
    image: "/images/categories/lubricantes.jpg",
    href: "/products?category=lubricantes",
    products: 18,
  },
  {
    title: "Parejas",
    description: "Productos pensados para disfrutar en compañía.",
    image: "/images/categories/parejas.jpg",
    href: "/products?category=parejas",
    products: 26,
  },
  {
    title: "Accesorios",
    description: "Complementos premium para cada experiencia.",
    image: "/images/categories/accesorios.webp",
    href: "/products?category=accesorios",
    products: 31,
  },
  {
    title: "Vibradores",
    description: "Tecnología, diseño y bienestar íntimo.",
    image: "/images/categories/vibradores.jpg",
    href: "/products?category=vibradores",
    products: 37,
  },
  {
    title: "Kits",
    description: "Colecciones listas para regalar o descubrir.",
    image: "/images/categories/kits.jpg",
    href: "/products?category=kits",
    products: 12,
  },
];

export function CategoryGrid() {
  return (
    <section className="mx-auto w-[95%] max-w-7xl py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <p className="text-sm uppercase tracking-[0.4em] text-pink-400">
          Velvet Osmosis
        </p>
        <h2 className="mt-4 text-5xl font-black text-white">
          Explora nuestras categorías
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
          Descubre cada colección y encuentra productos cuidadosamente
          seleccionados para ofrecer una experiencia premium.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.45 }}
          >
            <CategoryCard {...category} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default CategoryGrid;
