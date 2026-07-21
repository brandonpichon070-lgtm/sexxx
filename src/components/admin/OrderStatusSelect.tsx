"use client";

import { useTransition } from "react";
import { updateOrderStatus } from "@/actions/order.actions";

type Props = {
  orderId: string;
  status: string;
};

export default function OrderStatusSelect({
  orderId,
  status,
}: Props) {
  const [pending, startTransition] =
    useTransition();

  return (
    <select
      disabled={pending}
      defaultValue={status}
      className="mt-4 rounded border border-zinc-700 bg-zinc-900 p-2"
      onChange={(e) => {
        startTransition(async () => {
          await updateOrderStatus(
            orderId,
            e.target.value as any
          );

          location.reload();
        });
      }}
    >
      <option value="PENDING">
        Pendiente
      </option>

      <option value="PAID">
        Pagado
      </option>

      <option value="PROCESSING">
        Procesando
      </option>

      <option value="SHIPPED">
        Enviado
      </option>

      <option value="DELIVERED">
        Entregado
      </option>

      <option value="CANCELLED">
        Cancelado
      </option>
    </select>
  );
}
