"use server";

import { MercadoPagoService } from "@/services/mercadopago.service";

export async function createPreference(
  orderId: string,
  items: {
    id: string;
    title: string;
    quantity: number;
    unit_price: number;
  }[]
) {
  return MercadoPagoService.createPreference({
    orderId,
    items,
  });
}
