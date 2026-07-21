import { prisma } from "@/lib/prisma";

import { DashboardCards } from "@/components/admin/dashboard/DashboardCards";
import { RecentOrders } from "@/components/admin/dashboard/RecentOrders";
import { InventoryAlert } from "@/components/admin/dashboard/InventoryAlert";

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

      <div className="grid gap-8 xl:grid-cols-2">

        <RecentOrders />

        <InventoryAlert />

      </div>

    </div>
  );
}
