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

  static async findBySlug(slug: string) {
    return prisma.product.findUnique({
      where: {
        slug,
      },
      include: {
        category: true,
        brand: true,
        variants: {
          include: {
            inventory: true,
          },
        },
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

  static async findById(id: string) {
    return prisma.product.findUnique({
      where: {
        id,
      },
      include: {
        category: true,
        brand: true,
        variants: {
          include: {
            inventory: true,
          },
        },
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
    status: "ACTIVE" | "DRAFT" | "OUT_OF_STOCK" | "ARCHIVED";
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
        status: data.status,

        variants: {
          create: {
            sku: `VEL-${Date.now()}`,
            name: "Presentación estándar",
            price: data.price,
            stock: 100,

            inventory: {
              create: {
                physicalStock: 100,
                reservedStock: 0,
                availableStock: 100,
              },
            },
          },
        },
      },

      include: {
        category: true,
        brand: true,
        variants: {
          include: {
            inventory: true,
          },
        },
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
      status?: "ACTIVE" | "DRAFT" | "OUT_OF_STOCK" | "ARCHIVED";
    },
  ) {
    return prisma.product.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
  }

  static async delete(id: string) {
    return prisma.product.delete({
      where: {
        id,
      },
    });
  }
}
