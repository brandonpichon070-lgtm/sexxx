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
      <CategoryHero />

      <section
        id="grid"
        className="mx-auto w-[95%] max-w-7xl py-20"
      >
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.name}
              description={category.description ?? ""}
              image={category.imageUrl}
              href={`/products?category=${category.slug}`}
            />
          ))}
        </div>
      </section>

      <CategoryCTA />
    </main>
  );
}
