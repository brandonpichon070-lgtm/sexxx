import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/effects/Spotlight";
import { HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function GlassCard({
  children,
  className,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        `
        group
        relative
        overflow-hidden

        rounded-[32px]

        border
        border-white/10

        bg-white/[0.045]

        backdrop-blur-2xl

        shadow-[0_15px_60px_rgba(0,0,0,.35)]

        transition-all
        duration-500

        hover:border-pink-400/30
        hover:shadow-[0_25px_80px_rgba(236,72,153,.18)]

        before:absolute
        before:inset-0
        before:bg-gradient-to-br
        before:from-white/[0.08]
        before:via-transparent
        before:to-transparent
        before:pointer-events-none

        after:absolute
        after:inset-0
        after:rounded-[32px]
        after:border
        after:border-white/5
        after:pointer-events-none
        `,
        className
      )}
      {...props}
    >
      {/* Spotlight dinámico */}
      <Spotlight />

      {/* Reflejo superior */}
      <div
        className="
        pointer-events-none
        absolute
        inset-x-0
        top-0
        h-24

        bg-gradient-to-b
        from-white/10
        to-transparent

        opacity-60
        "
      />

      {/* Contenido */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
