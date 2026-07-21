"use client";

import { useCartStore } from "@/store/cart.store";

export function OrderSummary() {
  const { items, totalPrice } =
    useCartStore();

  return (
    <div className="rounded-xl border p-6">
      <h2 className="mb-4 text-2xl font-bold">
        Resumen
      </h2>

      {items.map((item) => (
        <div
          key={item.id}
          className="mb-2 flex justify-between"
        >
          <span>
            {item.name} x {item.quantity}
          </span>

          <span>
            $
            {(item.price * item.quantity).toFixed(
              2
            )}
          </span>
        </div>
      ))}

      <div className="mt-6 border-t pt-4">
        <strong>
          Total: $
          {totalPrice().toFixed(2)}
        </strong>
      </div>
    </div>
  );
}
