import {
  getDashboardStats,
} from "@/actions/dashboard.actions";

export default async function AdminPage() {
  const stats =
    await getDashboardStats();

  return (
    <main className="container mx-auto px-4 py-20">

      <h1 className="mb-10 text-4xl font-bold">
        Dashboard
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-lg border border-zinc-800 p-6">
          <h2 className="text-zinc-400">
            Usuarios
          </h2>

          <p className="text-4xl font-bold">
            {stats.users}
          </p>
        </div>

        <div className="rounded-lg border border-zinc-800 p-6">
          <h2 className="text-zinc-400">
            Productos
          </h2>

          <p className="text-4xl font-bold">
            {stats.products}
          </p>
        </div>

        <div className="rounded-lg border border-zinc-800 p-6">
          <h2 className="text-zinc-400">
            Pedidos
          </h2>

          <p className="text-4xl font-bold">
            {stats.orders}
          </p>
        </div>

        <div className="rounded-lg border border-zinc-800 p-6">
          <h2 className="text-zinc-400">
            Ventas
          </h2>

          <p className="text-4xl font-bold text-pink-500">
            ${stats.sales.toFixed(2)}
          </p>
        </div>

      </div>

      {/* Últimos pedidos */}

      <section className="mt-14">

        <h2 className="mb-6 text-2xl font-bold">
          Últimos pedidos
        </h2>

        <div className="space-y-4">

          {stats.latestOrders.map((order: any) => (

            <div
              key={order.id}
              className="rounded-lg border border-zinc-800 p-4"
            >
              <p>
                <strong>Cliente:</strong>{" "}
                {order.user?.name}
              </p>

              <p>
                <strong>Total:</strong> $
                {order.total.toString()}
              </p>

              <p>
                <strong>Estado:</strong>{" "}
                {order.status}
              </p>
            </div>

          ))}

        </div>

      </section>

      {/* Inventario bajo */}

      <section className="mt-14">

        <h2 className="mb-6 text-2xl font-bold text-red-500">
          Inventario bajo
        </h2>

        <div className="space-y-4">

          {stats.lowStock.map((item: any) => (

            <div
              key={item.id}
              className="rounded-lg border border-red-500 p-4"
            >
              <strong>
                {item.product.name}
              </strong>

              <p>
                Stock: {item.stock}
              </p>
            </div>

          ))}

        </div>

      </section>

    </main>
  );
}
