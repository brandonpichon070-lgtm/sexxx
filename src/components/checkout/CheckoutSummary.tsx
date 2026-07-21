"use client";
import Link from "next/link";
import { ShieldCheck, Truck } from "lucide-react";
import { useCartStore } from "@/store/cart.store";

export function CheckoutSummary() {
  const { items, totalPrice } = useCartStore();
  return (
    <aside className="h-fit rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:sticky lg:top-24">
      <h2 className="text-3xl font-bold">Resumen</h2>
      <div className="mt-6 space-y-4">
        {items.map(item=>(
          <div key={item.id} className="flex justify-between text-sm">
            <span>{item.name} × {item.quantity}</span>
            <span>${(item.price*item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="my-6 border-t border-white/10"/>
      <div className="flex justify-between text-2xl font-bold">
        <span>Total</span><span>${totalPrice().toFixed(2)}</span>
      </div>
      <div className="mt-6 space-y-2 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-300">
        <div className="flex items-center gap-2"><Truck size={18}/>Envío gratuito</div>
        <div className="flex items-center gap-2"><ShieldCheck size={18}/>Pago seguro SSL</div>
      </div>
      <button className="mt-8 w-full rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 py-4 font-semibold text-white">Confirmar compra</button>
      <Link href="/cart" className="mt-4 block text-center text-zinc-400 hover:text-white">Volver al carrito</Link>
    </aside>
  );
}
