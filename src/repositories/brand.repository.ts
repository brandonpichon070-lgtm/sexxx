import { prisma } from "@/lib/prisma";

export class BrandRepository {
  static async findAll() {
    return prisma.brand.findMany({
      orderBy: {
        name: "asc",
      },
    });
  }
}
