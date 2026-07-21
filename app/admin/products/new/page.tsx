import { getAllCategories } from "@/actions/category.actions";
import { getAllBrands } from "@/actions/brand.actions";
import { createProduct } from "@/actions/product.actions";

export default async function NewProductPage() {
  const categories =
    await getAllCategories();

  const brands =
    await getAllBrands();

  return (
    <main className="container mx-auto px-4 py-20">
      <h1 className="mb-8 text-4xl font-bold">
        Nuevo Producto
      </h1>

     <form
  action={createProduct}
  className="max-w-xl space-y-4"
>
  <input
    name="name"
    placeholder="Nombre"
    required
    className="w-full rounded border p-3"
  />

  <textarea
    name="description"
    placeholder="Descripción"
    className="w-full rounded border p-3"
  />

  <input
    name="price"
    type="number"
    step="0.01"
    required
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
    required
    className="w-full rounded border p-3"
  >
    <option value="">
      Selecciona categoría
    </option>

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
    required
    className="w-full rounded border p-3"
  >
    <option value="">
      Selecciona marca
    </option>

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
    Crear Producto
  </button>
</form>
    </main>
  );
}
