import { getProductBySlug } from "@/actions/product.actions";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { WishlistButton } from "@/components/wishlist/WishlistButton";
import Image from "next/image";
import { Star, ShieldCheck, Truck, RotateCcw } from "lucide-react";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center">
        <h1 className="text-3xl font-bold text-white">
          Producto no encontrado
        </h1>
      </main>
    );
  }

  return (
    <main className="relative overflow-hidden bg-[#050505] py-24">
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-pink-500/10 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-[180px]" />

      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2">

          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5">
            {product.imageUrl ? (
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                priority
                className="object-cover transition duration-700 hover:scale-105"
              />
            ) : (
              <div className="aspect-square bg-zinc-900" />
            )}
            <div className="aspect-square" />
          </div>

          <div>

            <span className="inline-flex rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-pink-300">
              {product.category.name}
            </span>

            <h1 className="mt-6 text-5xl font-black text-white">
              {product.name}
            </h1>

            <div className="mt-5 flex items-center gap-2">
              {[1,2,3,4,5].map((i)=>(
                <Star key={i} size={18} fill="#ec4899" className="text-pink-500"/>
              ))}
              <span className="ml-2 text-zinc-400">(124 reseñas)</span>
            </div>

            <p className="mt-8 text-lg leading-8 text-zinc-400">
              {product.description}
            </p>

            <div className="mt-10">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Precio
              </p>
              <h2 className="mt-2 text-5xl font-black text-pink-400">
                ${product.price.toString()}
              </h2>
            </div>

            <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"/>

            {product.variants.length > 0 ? (
              <>
                <AddToCartButton
                  id={product.id}
                  slug={product.slug}
                  name={product.name}
                  price={Number(product.price)}
                  variantId={product.variants[0].id}
                />

                <div className="mt-5">
                  <WishlistButton productId={product.id}/>
                </div>
              </>
            ) : (
              <p className="text-red-500">
                Este producto no tiene variantes registradas.
              </p>
            )}

            <div className="mt-12 space-y-5 rounded-3xl border border-white/10 bg-white/5 p-6">

              <div className="flex items-center gap-4">
                <Truck className="text-pink-400"/>
                <div>
                  <h3 className="font-semibold text-white">Envío discreto</h3>
                  <p className="text-sm text-zinc-400">
                    Empaque totalmente privado.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <ShieldCheck className="text-pink-400"/>
                <div>
                  <h3 className="font-semibold text-white">Pago seguro</h3>
                  <p className="text-sm text-zinc-400">
                    Protección en todas las compras.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <RotateCcw className="text-pink-400"/>
                <div>
                  <h3 className="font-semibold text-white">Garantía</h3>
                  <p className="text-sm text-zinc-400">
                    Soporte y atención personalizada.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </main>
  );
}
