"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ShoppingBag } from "lucide-react";

import { UserMenu } from "@/components/auth/UserMenu";
import { CartCounter } from "@/components/cart/CartCounter";
import { TextAnimate } from "@/components/ui/text-animate";
import { NavLinks } from "./NavLinks";
import { useEffect, useState } from "react";

export function Navbar() {

  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 30);
  };

  window.addEventListener("scroll", handleScroll);

  return () =>
    window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
  className={`
mx-auto
transition-all
duration-500
grid
w-[95%]
max-w-[1600px]
grid-cols-[320px_1fr_340px]
items-center
rounded-3xl
border
border-white/10
px-10
backdrop-blur-3xl

${
  scrolled
    ? "mt-2 h-16 bg-black/80 shadow-[0_0_60px_rgba(236,72,153,.20)]"
    : "mt-5 h-20 bg-black/45 shadow-[0_0_40px_rgba(236,72,153,.10)]"
}
`}
>


        {/* Logo */}

      <div className="flex justify-start">

<Link
          href="/"
          className="group relative flex-shrink-0"
        >
          <TextAnimate
            animation="blurInUp"
            by="character"
            duration={1}
            className="
              whitespace-nowrap
              text-4xl
              xl:text-5xl
              font-black
              tracking-tight
              bg-gradient-to-r
              from-pink-400
              via-fuchsia-300
              to-white
              bg-clip-text
              text-transparent
            "
          >
            Velvet Osmosis
          </TextAnimate>

          <span
            className="
              absolute
              -bottom-1
              left-0
              h-[2px]
              w-0
              rounded-full
              bg-gradient-to-r
              from-pink-500
              to-fuchsia-400
              transition-all
              duration-500
              group-hover:w-full
            "
          />
        </Link>
        </div>

        {/* Navegación */}
<div className="flex justify-center">
    <NavLinks />
</div>
        {/* Acciones */}

       <div className="flex justify-end items-center gap-5">

          {/* Favoritos */}

          <motion.button
            whileHover={{
              scale: 1.15,
              rotate: -10,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-pink-500/20
              bg-pink-500/5
              text-pink-400
              transition-all
              duration-300
              hover:bg-pink-500/15
              hover:shadow-[0_0_20px_rgba(236,72,153,.45)]
            "
          >
            <Heart size={20} />
          </motion.button>

          {/* Carrito */}

          <motion.div
            whileHover={{
              scale: 1.08,
            }}
          >
            <Link
              href="/cart"
              className="
                relative
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
                transition-all
                duration-300
                hover:border-pink-500
                hover:bg-pink-500/10
                hover:shadow-[0_0_20px_rgba(236,72,153,.45)]
              "
            >
              <ShoppingBag
                size={20}
                className="text-white"
              />

              <div className="absolute -right-1 -top-1">
                <CartCounter />
              </div>
            </Link>
          </motion.div>

          {/* Usuario */}

          <UserMenu />

        </div>

      </div>
    </motion.header>
  );
}
