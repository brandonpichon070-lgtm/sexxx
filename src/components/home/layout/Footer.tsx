"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebook,
  FaXTwitter,
} from "react-icons/fa6";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505]">
      <div className="absolute left-0 top-0 -z-10 h-[420px] w-[420px] rounded-full bg-pink-500/10 blur-[180px]" />
      <div className="absolute right-0 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-fuchsia-500/10 blur-[180px]" />

      <div className="container mx-auto px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-4">

          <div>
            <h2 className="text-3xl font-black tracking-tight text-white">Velvet Osmosis</h2>
            <p className="mt-6 leading-8 text-zinc-400">
              Una experiencia premium enfocada en elegancia, privacidad y bienestar íntimo.
            </p>

           <div className="mt-8 flex gap-4">
  {[FaInstagram, FaFacebook, FaXTwitter].map((Icon, index) => (
    <motion.a
      key={index}
      href="#"
      whileHover={{ y: -4, scale: 1.05 }}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition hover:border-pink-500/40 hover:bg-pink-500/10 hover:text-white"
    >
      <Icon size={20} />
    </motion.a>
  ))}
</div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Navegación</h3>
            <ul className="space-y-4">
              {["Inicio","Productos","Categorías","Blog","Contacto"].map((item)=>(
                <li key={item}>
                  <Link href="#" className="group inline-flex items-center gap-2 text-zinc-400 hover:text-white">
                    {item}
                    <ArrowUpRight size={15} className="opacity-0 transition group-hover:opacity-100"/>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Ayuda</h3>
            <ul className="space-y-4">
              {["Preguntas frecuentes","Política de privacidad","Términos","Envíos","Devoluciones"].map((item)=>(
                <li key={item}>
                  <Link href="#" className="group inline-flex items-center gap-2 text-zinc-400 hover:text-white">
                    {item}
                    <ArrowUpRight size={15} className="opacity-0 transition group-hover:opacity-100"/>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Contacto</h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3 text-zinc-400">
                <Mail size={18} className="mt-1 text-pink-400"/>
                <span>contacto@velvetosmosis.com</span>
              </div>

              <div className="flex items-start gap-3 text-zinc-400">
                <Phone size={18} className="mt-1 text-pink-400"/>
                <span>+52 222 000 0000</span>
              </div>

              <div className="flex items-start gap-3 text-zinc-400">
                <MapPin size={18} className="mt-1 text-pink-400"/>
                <span>México</span>
              </div>
            </div>

          </div>

        </div>

        <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"/>

        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row">
          <p className="text-sm text-zinc-500">
            © {year} Velvet Osmosis. Todos los derechos reservados.
          </p>

          <p className="text-sm text-zinc-500">
            Diseñado con ❤ para ofrecer una experiencia premium.
          </p>
        </div>
      </div>
    </footer>
  );
}
