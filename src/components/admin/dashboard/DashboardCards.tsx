import {
  Package,
  Users,
  ShoppingCart,
  Shapes,
  Boxes,
} from "lucide-react";

type Props = {
  products: number;
  users: number;
  orders: number;
  brands: number;
  categories: number;
};

const cards = [
  {
    title: "Productos",
    key: "products",
    icon: Package,
  },
  {
    title: "Usuarios",
    key: "users",
    icon: Users,
  },
  {
    title: "Pedidos",
    key: "orders",
    icon: ShoppingCart,
  },
  {
    title: "Marcas",
    key: "brands",
    icon: Shapes,
  },
  {
    title: "Categorías",
    key: "categories",
    icon: Boxes,
  },
] as const;

export function DashboardCards(props: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.key}
            className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-zinc-500">
                  {card.title}
                </p>

                <h2 className="mt-3 text-4xl font-bold">
                  {props[card.key]}
                </h2>

              </div>

              <div className="rounded-2xl bg-pink-500/20 p-4">
                <Icon
                  size={28}
                  className="text-pink-400"
                />
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
}
