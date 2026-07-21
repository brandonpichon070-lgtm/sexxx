import {
  CategoryHero,
  CategoryCTA,
  CategoryCard,
} from "@/components/categories";

import { getAllCategories } from "@/actions/category.actions";

export default async function CategoriesPage() {
  const categories = await getAllCategories();

  return (
    <main className="min-h-screen bg-black">

      {/* Hero */}
      <CategoryHero />

      {/* Grid */}
      <section
        id="grid"
        className="mx-auto w-[95%] max-w-7xl py-20"
      >
        <div className="mb-14 text-center">

          <p className="text-sm uppercase tracking-[0.4em] text-pink-400">
            Velvet Osmosis
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Explora nuestras categorías
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-zinc-400">
            Descubre cada colección y encuentra productos
            cuidadosamente seleccionados para ofrecer
            una experiencia premium.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {categories.map((category) => (

            <CategoryCard
              key={category.id}
              title={category.name}
              description={
                category.description ??
                "Explora nuestra colección premium."
              }
              image={
                category.imageUrl ??
                "/images/categories/default.jpg"
              }
              href={`/products?category=${category.slug}`}
            />

          ))}

        </div>

      </section>

      {/* CTA */}
      <CategoryCTA />

    </main>
  );
}
