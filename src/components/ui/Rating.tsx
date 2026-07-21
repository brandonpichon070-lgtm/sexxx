import { Star } from "lucide-react";

interface RatingProps {
  rating: number;
  reviews: number;
}

export function Rating({
  rating,
  reviews,
}: RatingProps) {
  return (
    <div className="flex items-center gap-3">

      <div className="flex text-pink-500">

        {Array.from({ length: 5 }).map((_, i) => (

          <Star
            key={i}
            size={18}
            fill="currentColor"
          />

        ))}

      </div>

      <span className="text-zinc-400">

        {rating} ({reviews} reseñas)

      </span>

    </div>
  );
}
