import {
  getProductById,
  updateProduct,
} from "@/actions/product.actions";

import { getAllCategories } from "@/actions/category.actions";
import { getAllBrands } from "@/actions/brand.actions";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;

  const product =
    await getProductById(id);

  const categories =
    await getAllCategories();

  const brands =
    await getAllBrands();

  if (!product) {
    return (
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-2xl font-bold">
          Producto no encontrado
        </h1>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-20">
      <h1 className="mb-8 text-4xl font-bold">
        Editar Producto
      </h1>

      <form
        action={updateProduct.bind(
          null,
          product.id
        )}
        className="space-y-4 max-w-xl"
      >
        <input
          name="name"
          defaultValue={product.name}
          placeholder="Nombre"
          className="w-full rounded border p-3"
        />

        <textarea
          name="description"
          defaultValue={
            product.description ?? ""
          }
          placeholder="Descripción"
          className="w-full rounded border p-3"
        />

        <input
          type="number"
          step="0.01"
          name="price"
          defaultValue={Number(
            product.price
          )}
          placeholder="Precio"
          className="w-full rounded border p-3"
        />

        <select
          name="categoryId"
          defaultValue={
            product.categoryId
          }
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
          defaultValue={
            product.brandId
          }
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

        <button
          className="rounded bg-pink-600 px-6 py-3 text-white"
        >
          Guardar cambios
        </button>
      </form>
    </main>
  );
}
