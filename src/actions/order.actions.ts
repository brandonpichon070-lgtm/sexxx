"use server";

import { auth } from "@/auth/auth";
import { OrderService } from "@/services/order.service";

type OrderItemInput = {
  variantId: string;
  quantity: number;
  price: number;
};

export async function getAllOrders() {
  return OrderService.getAllOrders();
}

export async function createOrder(
  items: OrderItemInput[],
  total: number,
  addressId: string
) {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Usuario no autenticado");
  }

  const order = await OrderService.createOrder(
    session.user.id,
    items.map((item) => ({
      productVariantId: item.variantId,
      quantity: item.quantity,
      unitPrice: item.price,
    })),
    total,
    addressId
  );

  return order;
}

export async function getMyOrders() {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Usuario no autenticado");
  }

  return OrderService.getOrdersByUser(
    session.user.id
  );
}

export async function updateOrderStatus(
  orderId: string,
  status:
    | "PENDING"
    | "PAID"
    | "PROCESSING"
    | "SHIPPED"
    | "DELIVERED"
    | "CANCELLED"
) {
  return OrderService.updateStatus(
    orderId,
    status
  );
}
