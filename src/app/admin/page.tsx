import { prisma } from "@/lib/prisma";

import { DashboardCards } from "@/components/admin/dashboard/DashboardCards";

export default async function AdminDashboard() {
  const [
    products,
    users,
    orders,
    brands,
    categories,
  ] = await Promise.all([
    prisma.product.count(),
    prisma.user.count(),
    prisma.order.count(),
    prisma.brand.count(),
    prisma.category.count(),
  ]);

  return (
    <div className="space-y-10">
      <DashboardCards
        products={products}
        users={users}
        orders={orders}
        brands={brands}
        categories={categories}
      />
    </div>
  );
}
