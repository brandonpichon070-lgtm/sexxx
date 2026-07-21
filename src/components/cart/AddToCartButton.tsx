"use client";

import { useCartStore } from "@/store/cart.store";

type Props = {
  id: string;
  slug: string;
  name: string;
  price: number;
  variantId: string;
};

export function AddToCartButton({
  id,
  slug,
  name,
  price,
  variantId,
}: Props) {
  const addItem =
    useCartStore((state) => state.addItem);

  return (
    <button
      onClick={() =>
        addItem({
          id,
          slug,
          name,
          price,
          quantity: 1,
          variantId,
        })
      }
      className="mt-8 rounded-lg bg-pink-600 px-8 py-3 text-white hover:bg-pink-700"
    >
      Agregar al carrito
    </button>
  );
}
