"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  {
    href: "/",
    label: "Inicio",
  },
  {
    href: "/products",
    label: "Productos",
  },
  {
    href: "/categories",
    label: "Categorías",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/contact",
    label: "Contacto",
  },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav
      className="
        hidden
        items-center
        gap-10
        lg:flex
      "
    >
      {links.map((link) => {

        const active =
          pathname === link.href;

        return (

          <Link
            key={link.href}
            href={link.href}
            className="
              group
              relative
              py-2
              font-medium
              tracking-wide
              text-zinc-300
              transition-all
              duration-300
              hover:text-pink-400
            "
          >

            <span
              className="
                relative
                z-10
                transition-all
                duration-300
                group-hover:-translate-y-0.5
              "
            >
              {link.label}
            </span>

            {active && (

              <motion.div
                layoutId="navbar-active"
                className="
                  absolute
                  -bottom-2
                  left-0
                  h-[3px]
                  w-full
                  rounded-full
                  bg-gradient-to-r
                  from-pink-500
                  to-fuchsia-400
                "
              />

            )}

          </Link>

        );

      })}
    </nav>
  );
}
