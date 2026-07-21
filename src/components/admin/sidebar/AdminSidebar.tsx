"use client";

import {
  LayoutDashboard,
  Package,
  FolderTree,
  BadgeDollarSign,
  Boxes,
  ShoppingCart,
  Users,
  Star,
  TicketPercent,
  BarChart3,
  Settings,
} from "lucide-react";

import { SidebarItem } from "./SidebarItem";
import { SidebarLogo } from "./SidebarLogo";

const menu = [
  {
    href: "/admin",
    label: "Dashboard",
    icon: <LayoutDashboard size={20} />,
  },
  {
    href: "/admin/products",
    label: "Productos",
    icon: <Package size={20} />,
  },
  {
    href: "/admin/categories",
    label: "Categorías",
    icon: <FolderTree size={20} />,
  },
  {
    href: "/admin/brands",
    label: "Marcas",
    icon: <BadgeDollarSign size={20} />,
  },
  {
    href: "/admin/inventory",
    label: "Inventario",
    icon: <Boxes size={20} />,
  },
  {
    href: "/admin/orders",
    label: "Pedidos",
    icon: <ShoppingCart size={20} />,
  },
  {
    href: "/admin/users",
    label: "Usuarios",
    icon: <Users size={20} />,
  },
  {
    href: "/admin/reviews",
    label: "Reseñas",
    icon: <Star size={20} />,
  },
  {
    href: "/admin/coupons",
    label: "Cupones",
    icon: <TicketPercent size={20} />,
  },
  {
    href: "/admin/analytics",
    label: "Analíticas",
    icon: <BarChart3 size={20} />,
  },
  {
    href: "/admin/settings",
    label: "Configuración",
    icon: <Settings size={20} />,
  },
];

export function AdminSidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-72 border-r border-white/10 bg-[#090909] lg:flex lg:flex-col">
      <SidebarLogo />

      <nav className="flex-1 space-y-2 px-4">
        {menu.map((item) => (
          <SidebarItem
            key={item.href}
            {...item}
          />
        ))}
      </nav>

      <div className="border-t border-white/10 p-6">
        <p className="text-sm text-zinc-500">
          Velvet Osmosis
        </p>

        <p className="mt-1 text-xs text-zinc-600">
          Admin v1.0
        </p>
      </div>
    </aside>
  );
}
