interface PriceProps {
  value: number | string;
  currency?: string;
}

export function Price({
  value,
  currency = "$",
}: PriceProps) {
  const price =
    typeof value === "number"
      ? value.toLocaleString("es-MX", {
          minimumFractionDigits: 2,
        })
      : value;

  return (
    <div>

      <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
        Precio
      </p>

      <h2 className="mt-2 text-5xl font-black tracking-tight text-pink-400">

        {currency}
        {price}

      </h2>

    </div>
  );
}
