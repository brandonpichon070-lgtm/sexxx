"use client";
import { CreditCard } from "lucide-react";

export function CheckoutForm() {
  return (
    <section className="space-y-8">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <h2 className="mb-6 text-3xl font-bold">Información de envío</h2>
        <div className="grid gap-5 md:grid-cols-2">
          <input className="rounded-xl border border-white/10 bg-zinc-900 px-4 py-3" placeholder="Nombre"/>
          <input className="rounded-xl border border-white/10 bg-zinc-900 px-4 py-3" placeholder="Apellidos"/>
          <input className="rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 md:col-span-2" placeholder="Correo electrónico"/>
          <input className="rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 md:col-span-2" placeholder="Dirección"/>
          <input className="rounded-xl border border-white/10 bg-zinc-900 px-4 py-3" placeholder="Ciudad"/>
          <input className="rounded-xl border border-white/10 bg-zinc-900 px-4 py-3" placeholder="Código postal"/>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold"><CreditCard size={22}/>Método de pago</h2>
        <input className="mb-4 w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3" placeholder="Número de tarjeta"/>
        <div className="grid gap-4 md:grid-cols-2">
          <input className="rounded-xl border border-white/10 bg-zinc-900 px-4 py-3" placeholder="MM/AA"/>
          <input className="rounded-xl border border-white/10 bg-zinc-900 px-4 py-3" placeholder="CVV"/>
        </div>
      </div>
    </section>
  );
}
