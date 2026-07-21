import { getFeaturedProducts } from "@/actions/product.actions";

export default async function AdminProductsPage() {
  const products =
    await getFeaturedProducts();

  return (
    <main className="container mx-auto px-4 py-20">
      <h1 className="mb-8 text-4xl font-bold">
        Productos
      </h1>

      <table className="w-full">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Categoría</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>

              <td>
                ${product.price.toString()}
              </td>

              <td>
                {product.category.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
