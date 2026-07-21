import { getAllOrders } from "@/actions/order.actions";

import OrderStatusSelect from "@/components/admin/OrderStatusSelect";

export default async function OrdersPage() {
  const orders = await getAllOrders();

  return (
    <main className="container mx-auto px-4 py-20">
      <h1 className="mb-10 text-4xl font-bold">
        Pedidos
      </h1>

      <div className="space-y-6">
        {orders.map((order: any) => (
          <div
            key={order.id}
            className="rounded-lg border border-zinc-800 p-6"
          >
            <h2 className="font-bold">
              Pedido #{order.id}
            </h2>

            <p>
              Cliente: {order.user?.name}
            </p>

            <p>
              Total: ${order.total.toString()}
            </p>

            <p>
              Fecha:{" "}
              {new Date(
                order.createdAt
              ).toLocaleDateString()}
            </p>

            <p>
  Estado:
  <span className="ml-2 font-semibold">
    {order.status}
  </span>
</p>

<OrderStatusSelect
  orderId={order.id}
  status={order.status}
/>

            <div className="mt-4">
              {order.items.map((item: any) => (
                <div key={item.id}>
                  • {item.variant.product.name} x{" "}
                  {item.quantity}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
