import { prisma } from "@/lib/prisma";

export class WishlistRepository {

  static async add(
    userId: string,
    productId: string
  ) {
    return prisma.wishlist.create({
      data: {
        userId,
        productId,
      },
    });
  }

  static async remove(
    userId: string,
    productId: string
  ) {
    return prisma.wishlist.delete({
      where: {
        userId_productId: {
          userId,
          productId,
        },
      },
    });
  }

  static async findByUser(
    userId: string
  ) {
    return prisma.wishlist.findMany({
      where: {
        userId,
      },

      include: {
        product: {
          include: {
            category: true,
            brand: true,
          },
        },
      },
    });
  }

  static async exists(
    userId: string,
    productId: string
  ) {
    return prisma.wishlist.findUnique({
      where: {
        userId_productId: {
          userId,
          productId,
        },
      },
    });
  }
}
