import { cn } from "@/lib/utils";

interface StackProps {
  children: React.ReactNode;
  className?: string;
}

export function Stack({
  children,
  className,
}: StackProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        className
      )}
    >
      {children}
    </div>
  );
}
