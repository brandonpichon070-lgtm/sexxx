import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        `
        inline-flex
        items-center
        rounded-full

        border

        border-pink-500/20

        bg-pink-500/10

        px-4

        py-2

        text-xs

        font-semibold

        uppercase

        tracking-[0.2em]

        text-pink-300
        `,
        className
      )}
    >
      {children}
    </span>
  );
}
