import { prisma } from "@/lib/prisma";

export class AddressRepository {
  static async create(data: {
    userId: string;
    fullName: string;
    phone: string;
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  }) {
    return prisma.address.create({
      data,
    });
  }

  static async findByUser(
    userId: string
  ) {
    return prisma.address.findMany({
      where: {
        userId,
      },

      orderBy: {
        createdAt: "desc",
      },
    });
  }
}
