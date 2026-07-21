"use client";

import { deleteProduct } from "@/actions/product.actions";

type Props = {
  id: string;
};

export function DeleteProductButton({
  id,
}: Props) {
  async function handleDelete() {
    const confirmed = confirm(
      "¿Eliminar producto?"
    );

    if (!confirmed) return;

    await deleteProduct(id);
  }

  return (
    <button
      onClick={handleDelete}
      className="rounded bg-red-600 px-3 py-1 text-white"
    >
      Eliminar
    </button>
  );
}
