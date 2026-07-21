import { prisma } from "@/lib/prisma";

export class ProductRepository {

  static async findFeatured() {
    return prisma.product.findMany({
      include: {
        category: true,
        brand: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 8,
    });
  }

  static async findBySlug(
    slug: string
  ) {
    return prisma.product.findUnique({
      where: {
        slug,
      },

      include: {
        category: true,
        brand: true,
        variants: true,
      },
    });
  }

  static async findAll() {
    return prisma.product.findMany({
      include: {
        category: true,
        brand: true,
      },

      orderBy: {
        createdAt: "desc",
      },
    });
  }

  static async findById(
    id: string
  ) {
    return prisma.product.findUnique({
      where: {
        id,
      },

      include: {
        category: true,
        brand: true,
        variants: true,
      },
    });
  }

  static async create(data: {
    name: string;
    slug: string;
    description?: string;
    imageUrl?: string;
    price: number;
    categoryId: string;
    brandId: string;
  }) {
    return prisma.product.create({
      data: {
        name: data.name,
        slug: data.slug,
        description: data.description,
        imageUrl: data.imageUrl,
        price: data.price,
        categoryId: data.categoryId,
        brandId: data.brandId,

        variants: {
          create: {
            sku: `SKU-${Date.now()}`,
            name: "Default",
            price: data.price,
            stock: 100,
          },
        },
      },

      include: {
        variants: true,
      },
    });
  }

  static async update(
    id: string,
    data: {
      name: string;
      description?: string;
      price: number;
      categoryId: string;
      brandId: string;
    }
  ) {
    return prisma.product.update({
      where: {
        id,
      },
      data,
    });
  }

  static async delete(
    id: string
  ) {
    return prisma.product.delete({
      where: {
        id,
      },
    });
  }

}
