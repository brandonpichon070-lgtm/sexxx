"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Truck,
  Lock,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Calidad Premium",
    description:
      "Seleccionamos únicamente marcas reconocidas internacionalmente.",
  },
  {
    icon: Truck,
    title: "Envío Discreto",
    description:
      "Empaques totalmente confidenciales a cualquier parte de México.",
  },
  {
    icon: Lock,
    title: "Privacidad Garantizada",
    description:
      "Tus datos y compras están protegidos con los más altos estándares.",
  },
  {
    icon: Headphones,
    title: "Atención Personalizada",
    description:
      "Nuestro equipo está disponible para ayudarte antes y después de tu compra.",
  },
];

export function HeroFeatures() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {features.map((feature, index) => {
        const Icon = feature.icon;

        return (
          <motion.div
            key={feature.title}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.15,
              duration: 0.6,
            }}
            whileHover={{
              y: -8,
            }}
            className="
              group
              rounded-3xl
              border
              border-white/10
              bg-white/[0.04]
              p-7
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-pink-500/30
              hover:bg-white/[0.07]
              hover:shadow-[0_20px_60px_rgba(236,72,153,.18)]
            "
          >
            <div
              className="
                mb-6
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-pink-500
                to-fuchsia-600
                text-white
              "
            >
              <Icon size={28} />
            </div>

            <h3 className="text-xl font-semibold text-white">
              {feature.title}
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              {feature.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
