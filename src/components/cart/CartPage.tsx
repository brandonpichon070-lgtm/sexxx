
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Minus, Plus, Trash2, ShoppingBag, ShieldCheck } from "lucide-react";
import { useCartStore } from "@/store/cart.store";

export function CartPage() {
  const {
    items,
    removeItem,
    clearCart,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
  } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <ShoppingBag className="mb-6 h-14 w-14 text-zinc-500" />
        <h2 className="text-4xl font-bold text-white">Tu carrito está vacío</h2>
        <p className="mt-3 text-zinc-400">
          Descubre nuestros productos premium.
        </p>

        <Link
          href="/products"
          className="mt-8 rounded-full bg-white px-8 py-3 font-semibold text-black transition hover:scale-105"
        >
          Explorar productos
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1.7fr_420px]">
      <div className="space-y-6">
        {items.map((item) => (
          <motion.div
            layout
            key={item.id}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="flex h-28 w-28 items-center justify-center rounded-2xl border border-white/10 bg-zinc-900 text-center text-xs text-zinc-500">
                  Imagen
                </div>

                <div>
                  <Link
                    href={`/products/${item.slug}`}
                    className="text-2xl font-semibold text-white hover:text-pink-300"
                  >
                    {item.name}
                  </Link>

                  <p className="mt-2 text-sm text-zinc-500">
                    Variante: {item.variantId}
                  </p>

                  <p className="mt-4 text-xl font-bold text-pink-400">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <div className="flex items-center justify-end gap-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="rounded-full border border-white/10 p-2 hover:bg-white/10"
                  >
                    <Minus size={18} />
                  </button>

                  <span className="w-10 text-center text-lg font-semibold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="rounded-full border border-white/10 p-2 hover:bg-white/10"
                  >
                    <Plus size={18} />
                  </button>
                </div>

                <p className="mt-5 text-2xl font-bold text-white">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>

                <button
                  onClick={() => removeItem(item.id)}
                  className="mt-4 inline-flex items-center gap-2 text-red-400 transition hover:text-red-300"
                >
                  <Trash2 size={18} />
                  Eliminar
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <aside className="h-fit rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:sticky lg:top-24">
        <h2 className="text-3xl font-bold text-white">
          Resumen del pedido
        </h2>

        <div className="mt-8 space-y-4 text-zinc-300">
          <div className="flex justify-between">
            <span>Productos</span>
            <span>{items.length}</span>
          </div>

          <div className="flex justify-between">
            <span>Envío</span>
            <span>Gratis</span>
          </div>

          <div className="border-t border-white/10 pt-5">
            <div className="flex justify-between text-2xl font-bold text-white">
              <span>Total</span>
              <span>${totalPrice().toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-300">
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} />
            Pago 100% seguro
          </div>
        </div>

        <Link
          href="/checkout"
          className="mt-8 block rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 py-4 text-center font-semibold text-white transition hover:scale-[1.02]"
        >
          Proceder al pago
        </Link>

        <button
          onClick={clearCart}
          className="mt-4 w-full rounded-full border border-red-500/40 py-3 text-red-400 transition hover:bg-red-500/10"
        >
          Vaciar carrito
        </button>
      </aside>
    </div>
  );
}
