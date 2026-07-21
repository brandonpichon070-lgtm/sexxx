import "dotenv/config";
import { prisma } from "../src/lib/prisma";

async function main() {
  console.log("🌱 Iniciando seed...");

  // Categorías
  const categories = [
    {
      name: "Vibradores",
      slug: "vibradores",
    },
    {
      name: "Lencería",
      slug: "lenceria",
    },
    {
      name: "Lubricantes",
      slug: "lubricantes",
    },
    {
      name: "Parejas",
      slug: "parejas",
    },
    {
      name: "Accesorios",
      slug: "accesorios",
    },
  ];

  for (const category of categories) {
    await prisma.category.upsert({
      where: {
        slug: category.slug,
      },
      update: {
        name: category.name,
      },
      create: category,
    });
  }

  // MARCAS
  const brands = [
    {
      name: "Satisfyer",
      slug: "satisfyer",
    },
    {
      name: "Lovense",
      slug: "lovense",
    },
    {
      name: "We-Vibe",
      slug: "we-vibe",
    },
    {
      name: "Lelo",
      slug: "lelo",
    },
  ];

  for (const brand of brands) {
    await prisma.brand.upsert({
      where: {
        slug: brand.slug,
      },
      update: {},
      create: brand,
    });
  }

  const vibradores = await prisma.category.findUnique({
    where: {
      slug: "vibradores",
    },
  });

  const satisfyer = await prisma.brand.findUnique({
    where: {
      slug: "satisfyer",
    },
  });

  const lelo = await prisma.brand.findUnique({
    where: {
      slug: "lelo",
    },
  });

  // PRODUCTOS
  await prisma.product.upsert({
    where: {
      slug: "satisfyer-pro-2",
    },
    update: {},
    create: {
      name: "Satisfyer Pro 2",
      slug: "satisfyer-pro-2",
      description: "Estimulador premium de ondas de presión",
      price: 1299,
      categoryId: vibradores!.id,
      brandId: satisfyer!.id,
    },
  });

  await prisma.product.upsert({
    where: {
      slug: "lelo-sona-2",
    },
    update: {},
    create: {
      name: "Lelo Sona 2",
      slug: "lelo-sona-2",
      description: "Tecnología sónica de nueva generación",
      price: 3299,
      categoryId: vibradores!.id,
      brandId: lelo!.id,
    },
  });

  const satisfyerProduct =
    await prisma.product.findUnique({
      where: {
        slug: "satisfyer-pro-2",
      },
    });

  if (satisfyerProduct) {
    await prisma.productVariant.upsert({
      where: {
        sku: "SAT-PRO2-BLK",
      },
      update: {},
      create: {
        sku: "SAT-PRO2-BLK",
        name: "Negro",
        price: 1299,
        stock: 50,
        productId: satisfyerProduct.id,
      },
    });
  }

  const variant =
    await prisma.productVariant.findUnique({
      where: {
        sku: "SAT-PRO2-BLK",
      },
    });

  if (variant) {
    await prisma.inventory.upsert({
      where: {
        productVariantId: variant.id,
      },
      update: {},
      create: {
        productVariantId: variant.id,
        physicalStock: 50,
        reservedStock: 0,
        availableStock: 50,
      },
    });
  }

  console.log("✅ Seed completado");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
