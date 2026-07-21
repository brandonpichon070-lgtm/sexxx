import { getMyOrders }
from "@/actions/order.actions";

export default async function OrdersPage() {

  const orders =
    await getMyOrders();

  return (
    <main className="container mx-auto px-4 py-20">

      <h1 className="mb-10 text-4xl font-bold">
        Mis pedidos
      </h1>

      {orders.length === 0 && (
        <p>
          No tienes pedidos aún.
        </p>
      )}

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="rounded-lg border border-zinc-800 p-6"
          >
            <h2 className="font-bold">
              Pedido #{order.id}
            </h2>

            <p className="text-zinc-400">
              Total:
              $
              {Number(
                order.total
              ).toFixed(2)}
            </p>

            <div className="mt-4">
              {order.items.map(
                (item) => (
                  <div
                    key={item.id}
                    className="flex justify-between"
                  >
                    <span>
                      {
                        item.variant
                          .product.name
                      }
                    </span>

                    <span>
                      x
                      {
                        item.quantity
                      }
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>

    </main>
  );
}
