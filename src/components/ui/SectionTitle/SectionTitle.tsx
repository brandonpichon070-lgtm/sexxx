import { Badge } from "../Badge";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  badge?: string;

  title: string;

  description?: string;

  align?: "left" | "center";

  className?: string;
}

export function SectionTitle({
  badge,
  title,
  description,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        align === "center"
          ? "text-center"
          : "text-left",
        className
      )}
    >
      {badge && (
        <Badge>
          {badge}
        </Badge>
      )}

      <h2
        className="
          mt-6
          text-4xl
          font-black
          tracking-tight
          text-white
          md:text-5xl
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            mt-5
            max-w-2xl
            text-lg
            leading-8
            text-zinc-400
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}
