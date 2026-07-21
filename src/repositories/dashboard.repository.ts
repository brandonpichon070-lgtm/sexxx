import { prisma } from "@/lib/prisma";

export class DashboardRepository {

  static async getStats() {

    const users =
      await prisma.user.count();

    const products =
      await prisma.product.count();

    const orders =
      await prisma.order.count();

    const sales =
      await prisma.order.aggregate({
        _sum: {
          total: true,
        },
      });

    const latestOrders =
      await prisma.order.findMany({
        include: {
          user: true,
        },

        orderBy: {
          createdAt: "desc",
        },

        take: 5,
      });

    const lowStock =
      await prisma.productVariant.findMany({
        where: {
          stock: {
            lte: 10,
          },
        },

        include: {
          product: true,
        },
      });

    return {
      users,
      products,
      orders,

      sales:
        Number(
          sales._sum.total
        ) || 0,

      latestOrders,

      lowStock,
    };
  }
}
