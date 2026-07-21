"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

export function SidebarItem({
  href,
  label,
  icon,
}: Props) {
  const pathname = usePathname();

  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`group flex items-center gap-3 rounded-xl px-4 py-3 transition ${
        active
          ? "bg-gradient-to-r from-pink-600 to-fuchsia-600 text-white shadow-lg"
          : "text-zinc-400 hover:bg-white/5 hover:text-white"
      }`}
    >
      {icon}

      <span className="font-medium">
        {label}
      </span>
    </Link>
  );
}
