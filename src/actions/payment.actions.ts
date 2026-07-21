"use server";

import { PaymentService } from "@/services/payment.service";

export async function createPayment(
  orderId: string,
  amount: number
) {
  return PaymentService.createPayment(
    orderId,
    amount
  );
}

export async function updatePayment(
  orderId: string,
  transactionId: string,
  status:
    | "PENDING"
    | "PAID"
    | "FAILED"
    | "REFUNDED"
) {
  return PaymentService.updatePayment(
    orderId,
    transactionId,
    status
  );
}
