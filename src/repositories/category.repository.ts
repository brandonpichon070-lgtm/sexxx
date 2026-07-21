import { prisma } from "@/lib/prisma";

export class CategoryRepository {
  static async findAll() {
    return prisma.category.findMany({
      orderBy: {
        name: "asc",
      },
    });
  }
}
