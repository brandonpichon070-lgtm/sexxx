import { OrderRepository } from "@/repositories/order.repository";

export class OrderService {

  static async getAllOrders() {
    return OrderRepository.findAll();
  }

  static async getOrdersByUser(
    userId: string
  ) {
    return OrderRepository.findByUser(
      userId
    );
  }

  static async createOrder(
    userId: string,
    items: any[],
    total: number,
    addressId: string
  ) {
    return OrderRepository.createOrder(
      userId,
      items,
      total,
      addressId
    );
  }


  static async updateStatus(
  orderId: string,
  status: string
) {
  return OrderRepository.updateStatus(
    orderId,
    status
  );
}
}
