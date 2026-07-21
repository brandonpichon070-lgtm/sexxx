import { getMyWishlist }
from "@/actions/wishlist.actions";

export default async function WishlistPage() {

  const products =
    await getMyWishlist();

  return (
    <main className="container mx-auto px-4 py-20">

      <h1 className="mb-10 text-4xl font-bold">
        Mis Favoritos ❤️
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        {products.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border p-4"
          >
            <h2>
              {item.product.name}
            </h2>

            <p>
              $
              {item.product.price.toString()}
            </p>
          </div>
        ))}

      </div>

    </main>
  );
}
