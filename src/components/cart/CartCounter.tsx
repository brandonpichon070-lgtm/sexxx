"use client";

import { useEffect, useState } from "react";
import { useCartStore } from "@/store/cart.store";

export function CartCounter() {
  const totalItems = useCartStore(
    (state) => state.totalItems()
  );

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <span className="rounded-full bg-pink-600 px-2 py-1 text-xs text-white">
      {totalItems}
    </span>
  );
}
