import { Navbar } from "@/components/home/layout/Navbar";
import { Footer } from "@/components/home/layout/Footer";

import { HeroBanner } from "@/components/home/HeroBanner";
import { Categories } from "@/components/home/Categories";
import { NewProducts } from "@/components/home/NewProducts";
import { Newsletter } from "@/components/home/Newsletter";
import { ProductCard } from "@/components/home/ProductCard";

import { getAllCategories } from "@/actions/category.actions";
import { getFeaturedProducts } from "@/actions/product.actions";

export default async function HomePage() {
  const categories = await getAllCategories();

  const products = await getFeaturedProducts();

  return (
    <>
      <Navbar />

      <HeroBanner />

      <div className="relative overflow-hidden">

        {/* Fondo Premium */}



          

        <div className="relative z-10">

          {/* Categorías */}

          <Categories categories={categories} />

          {/* Productos Destacados */}

          <section className="container mx-auto px-6 py-24">

            <div className="mb-14 flex items-end justify-between">

              <div>

                <span
                  className="
                    rounded-full
                    border
                    border-pink-500/20
                    bg-pink-500/10
                    px-5
                    py-2
                    text-sm
                    text-pink-300
                  "
                >
                  Colección Premium
                </span>

                <h2 className="mt-5 text-5xl font-black text-white">
                  Productos Destacados
                </h2>

                <p className="mt-4 max-w-2xl text-lg text-zinc-400">
                  Descubre nuestra selección exclusiva de productos premium.
                </p>

              </div>

            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

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

          </section>

          {/* Nuevos Productos */}

          <NewProducts />

          {/* Newsletter */}

          <Newsletter />

          {/* Footer */}

          <Footer />

        </div>

      </div>

    </>
  );
}
