"use client";

import { createProduct } from "@/actions/product.actions";

type Props = {
  categories: {
    id: string;
    name: string;
  }[];

  brands: {
    id: string;
    name: string;
  }[];
};

export function ProductForm({
  categories,
  brands,
}: Props) {
  return (
    <form
      action={createProduct}
      className="space-y-4"
    >
      <input
        name="name"
        placeholder="Nombre"
        className="w-full rounded border p-3"
      />

      <input
        name="slug"
        placeholder="slug-producto"
        className="w-full rounded border p-3"
      />

      <textarea
        name="description"
        placeholder="Descripción"
        className="w-full rounded border p-3"
      />

      <input
        type="number"
        step="0.01"
        name="price"
        placeholder="Precio"
        className="w-full rounded border p-3"
      />

      <input
        type="file"
        name="image"
        accept="image/*"
        className="w-full rounded border p-3"
      />

      <select
        name="categoryId"
        className="w-full rounded border p-3"
      >
        {categories.map((category) => (
          <option
            key={category.id}
            value={category.id}
          >
            {category.name}
          </option>
        ))}
      </select>

      <select
        name="brandId"
        className="w-full rounded border p-3"
      >
        {brands.map((brand) => (
          <option
            key={brand.id}
            value={brand.id}
          >
            {brand.name}
          </option>
        ))}
      </select>

      <button className="rounded bg-pink-600 px-6 py-3 text-white">
        Crear Producto
      </button>
    </form>
  );
}
