import { prisma } from "@/lib/prisma";

export class PaymentRepository {

  static async createPayment(
    orderId: string,
    amount: number
  ) {
    return prisma.payment.upsert({
      where: {
        orderId,
      },

      update: {
        amount,
        status: "PENDING",
      },

      create: {
        orderId,
        provider: "MercadoPago",
        amount,
        status: "PENDING",
      },
    });
  }

  static async updatePayment(
    orderId: string,
    transactionId: string,
    status:
      | "PENDING"
      | "PAID"
      | "FAILED"
      | "REFUNDED"
  ) {
    return prisma.payment.update({
      where: {
        orderId,
      },

      data: {
        transactionId,
        status,
      },
    });
  }

  static async getPaymentByOrderId(
    orderId: string
  ) {
    return prisma.payment.findUnique({
      where: {
        orderId,
      },
    });
  }

}
