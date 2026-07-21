import { prisma } from "@/lib/prisma";

type OrderItemInput = {
  productVariantId: string;
  quantity: number;
  unitPrice: number;
};

export class OrderRepository {

  static async findAll() {
    return prisma.order.findMany({
      include: {
        user: true,
        items: {
          include: {
            variant: {
              include: {
                product: true,
              },
            },
          },
        },
      },

      orderBy: {
        createdAt: "desc",
      },
    });
  }
  static async findByUserId(
  userId: string
) {
  return prisma.order.findMany({
    where: {
      userId,
    },

    include: {
      items: {
        include: {
          variant: {
            include: {
              product: true,
            },
          },
        },
      },
    },

    orderBy: {
      createdAt: "desc",
    },
  });
}

  static async createOrder(
  userId: string,
  items: OrderItemInput[],
  total: number,
  addressId: string
) {

  for (const item of items) {

    const variant =
      await prisma.productVariant.findUnique({
        where: {
          id: item.productVariantId,
        },
      });

    if (!variant) {
      throw new Error(
        "Variante no encontrada"
      );
    }

    if (
      variant.stock <
      item.quantity
    ) {
      throw new Error(
        `Stock insuficiente para ${variant.name}`
      );
    }
  }

  await prisma.$transaction(
    items.map((item) =>
      prisma.productVariant.update({
        where: {
          id: item.productVariantId,
        },

        data: {
          stock: {
            decrement:
              item.quantity,
          },
        },
      })
    )
  );

  return prisma.order.create({
    data: {
      userId,
      addressId,

      subtotal: total,
      total,

      items: {
        create: items.map((item) => ({
          productVariantId:
            item.productVariantId,

          quantity:
            item.quantity,

          unitPrice:
            item.unitPrice,

          subtotal:
            item.quantity *
            item.unitPrice,
        })),
      },
    },

    include: {
      items: true,
      address: true,
    },
  });
}

static async findByUser(userId: string) {
  return prisma.order.findMany({
    where: {
      userId,
    },

    include: {
      items: {
        include: {
          variant: {
            include: {
              product: true,
            },
          },
        },
      },
    },

    orderBy: {
      createdAt: "desc",
    },
  });
}



static async updateStatus(
  orderId: string,
  status: string
) {
  return prisma.order.update({
    where: {
      id: orderId,
    },

    data: {
      status: status as any,
    },
  });
}



static async getLatest(limit = 5) {
  return prisma.order.findMany({
    include: {
      user: true,
    },

    orderBy: {
      createdAt: "desc",
    },

    take: limit,
  });
}
}




