import Link from "next/link";
import { getFeaturedProducts } from "@/actions/product.actions";
import {
  Plus,
  Search,
  Eye,
  Pencil,
  Trash2,
  Package,
  AlertTriangle,
  Layers,
} from "lucide-react";

export default async function AdminProductsPage() {
  const products = await getFeaturedProducts();

  return (
    <main className="container mx-auto px-8 py-10">
      {/* HEADER */}

      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold text-white">Productos</h1>

          <p className="text-zinc-400 mt-2">
            Administra todos los productos de Velvet Osmosis.
          </p>
        </div>

        <Link
          href="/admin/products/new"
          className="
          flex items-center gap-2
          rounded-xl
          bg-pink-600
          hover:bg-pink-500
          px-6
          py-3
          font-semibold
          transition
          "
        >
          <Plus size={20} />
          Nuevo Producto
        </Link>
      </div>

      {/* ESTADÍSTICAS */}

      <div className="grid grid-cols-4 gap-6 mb-10">
        <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6">
          <Package className="text-pink-500 mb-4" />
          <h2 className="text-3xl font-bold">{products.length}</h2>
          <p className="text-zinc-400">Productos</p>
        </div>

        <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6">
          <Layers className="text-blue-500 mb-4" />
          <h2 className="text-3xl font-bold">6</h2>
          <p className="text-zinc-400">Categorías</p>
        </div>

        <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6">
          <AlertTriangle className="text-yellow-500 mb-4" />
          <h2 className="text-3xl font-bold">0</h2>
          <p className="text-zinc-400">Stock Bajo</p>
        </div>

        <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6">
          <Package className="text-green-500 mb-4" />
          <h2 className="text-3xl font-bold">Activos</h2>
          <p className="text-zinc-400">Todos</p>
        </div>
      </div>

      {/* BUSCADOR */}

      <div className="flex gap-4 mb-8">
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <input
            placeholder="Buscar producto..."
            className="
              w-full
              rounded-xl
              border
              border-zinc-800
              bg-zinc-900
              py-3
              pl-12
              pr-4
              outline-none
            "
          />
        </div>

        <select className="rounded-xl bg-zinc-900 border border-zinc-800 px-4">
          <option>Todas las categorías</option>
        </select>

        <select className="rounded-xl bg-zinc-900 border border-zinc-800 px-4">
          <option>Todos los estados</option>
        </select>
      </div>

      {/* TABLA */}

      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
        <table className="w-full">
          <thead className="bg-zinc-900">
            <tr className="text-left">
              <th className="p-4">Imagen</th>
              <th className="p-4">Nombre</th>
              <th className="p-4">Categoría</th>
              <th className="p-4">Precio</th>
              <th className="p-4">Estado</th>
              <th className="p-4">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-t border-zinc-800 hover:bg-zinc-900 transition"
              >
                <td className="p-4">
                  <div className="h-14 w-14 rounded-xl bg-zinc-800" />
                </td>

                <td className="p-4 font-medium">{product.name}</td>

                <td className="p-4">{product.category.name}</td>

                <td className="p-4">${product.price.toLocaleString()}</td>

                <td className="p-4">
                  <span
                    className="
                    rounded-full
                    bg-green-500/20
                    px-3
                    py-1
                    text-sm
                    text-green-400
                    "
                  >
                    Activo
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex gap-3">
                    <button className="text-blue-400 hover:text-blue-300">
                      <Eye size={18} />
                    </button>

                    <button className="text-yellow-400 hover:text-yellow-300">
                      <Pencil size={18} />
                    </button>

                    <button className="text-red-500 hover:text-red-400">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
