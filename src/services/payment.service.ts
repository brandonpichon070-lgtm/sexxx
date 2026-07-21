import { PaymentRepository } from "@/repositories/payment.repository";

export class PaymentService {

  static async createPayment(
    orderId: string,
    amount: number
  ) {
    return PaymentRepository.createPayment(
      orderId,
      amount
    );
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
    return PaymentRepository.updatePayment(
      orderId,
      transactionId,
      status
    );
  }

  static async getPaymentByOrderId(
    orderId: string
  ) {
    return PaymentRepository.getPaymentByOrderId(
      orderId
    );
  }

}
