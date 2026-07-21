"use client";

import { useState } from "react";

import {
  addToWishlist,
  removeFromWishlist,
} from "@/actions/wishlist.actions";

type Props = {
  productId: string;
};

export function WishlistButton({
  productId,
}: Props) {
  const [loading, setLoading] =
    useState(false);

  async function handleAdd() {
    try {
      setLoading(true);

      await addToWishlist(
        productId
      );

      alert(
        "Agregado a favoritos ❤️"
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleAdd}
      disabled={loading}
      className="rounded-lg bg-purple-600 px-4 py-2 text-white"
    >
      ❤️ Favorito
    </button>
  );
}
