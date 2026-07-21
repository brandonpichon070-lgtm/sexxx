"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 -z-20 bg-[#050505]" />
      <div className="absolute left-0 top-0 -z-10 h-[420px] w-[420px] rounded-full bg-pink-500/10 blur-[180px]" />
      <div className="absolute right-0 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-fuchsia-500/10 blur-[180px]" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-5xl overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-12 backdrop-blur-2xl"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full border border-pink-500/20 bg-pink-500/10 px-5 py-2 text-xs uppercase tracking-[0.3em] text-pink-300">
                Velvet Club
              </span>

              <h2 className="mt-8 text-5xl font-black tracking-tight text-white">
                Únete a nuestra comunidad exclusiva
              </h2>

              <p className="mt-6 text-lg leading-8 text-zinc-400">
                Recibe lanzamientos, promociones privadas, contenido exclusivo y
                novedades antes que nadie.
              </p>
            </div>

            <div>
              <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                <label className="mb-4 block text-sm uppercase tracking-[0.2em] text-zinc-400">
                  Correo electrónico
                </label>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="relative flex-1">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />

                    <input
                      type="email"
                      placeholder="tu@email.com"
                      className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 pl-14 pr-4 text-white outline-none transition focus:border-pink-500"
                    />
                  </div>

                  <button
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-600 px-8 font-semibold text-white transition hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(236,72,153,.35)]"
                  >
                    Suscribirme
                    <ArrowRight size={18} />
                  </button>
                </div>

                <p className="mt-4 text-sm text-zinc-500">
                  Sin spam. Puedes cancelar tu suscripción en cualquier momento.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
