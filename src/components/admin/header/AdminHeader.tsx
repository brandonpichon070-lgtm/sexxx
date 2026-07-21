"use client";

import {
  Bell,
  Search,
  Settings,
  UserCircle2,
} from "lucide-react";

export function AdminHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
      <div className="flex h-20 items-center justify-between px-8">

        {/* Título + buscador */}
        <div className="flex items-center gap-8">

          <div>
            <h1 className="text-2xl font-bold text-white">
              Dashboard
            </h1>

            <p className="text-sm text-zinc-500">
              Bienvenido al panel de administración
            </p>
          </div>

          <div className="relative hidden lg:block">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              type="text"
              placeholder="Buscar productos, pedidos, usuarios..."
              className="
                w-96
                rounded-2xl
                border
                border-white/10
                bg-white/5
                py-3
                pl-11
                pr-4
                text-sm
                outline-none
                transition
                placeholder:text-zinc-500
                focus:border-pink-500
              "
            />
          </div>
        </div>

        {/* Acciones */}
        <div className="flex items-center gap-4">

          <button className="rounded-xl border border-white/10 p-3 transition hover:border-pink-500 hover:bg-white/5">
            <Bell size={20} />
          </button>

          <button className="rounded-xl border border-white/10 p-3 transition hover:border-pink-500 hover:bg-white/5">
            <Settings size={20} />
          </button>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2">

            <UserCircle2
              size={42}
              className="text-pink-400"
            />

            <div>

              <p className="font-semibold text-white">
                Administrador
              </p>

              <p className="text-sm text-zinc-500">
                Velvet Osmosis
              </p>

            </div>

          </div>

        </div>

      </div>
    </header>
  );
}
