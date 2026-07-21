import { getFeaturedProducts } from "@/actions/product.actions";

import { ProductCard } from "@/components/home/ProductCard";

export default async function ProductsPage() {
  const products = await getFeaturedProducts();

  return (
    <main className="container mx-auto px-4 py-20">
      <h1 className="mb-10 text-4xl font-bold">
        Todos los productos
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            slug={product.slug}
            name={product.name}
            price={product.price.toString()}
            category={product.category.name}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </main>
  );
}
