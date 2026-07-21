
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  id: string;
  slug: string;
  name: string;
  price: number;
  quantity: number;
  variantId: string;
};

type CartStore = {
  items: CartItem[];

  addItem: (item: CartItem) => void;

  removeItem: (id: string) => void;

  clearCart: () => void;

  increaseQuantity: (id: string) => void;

  decreaseQuantity: (id: string) => void;

  totalItems: () => number;

  totalPrice: () => number;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) => {
        const existing = get().items.find(
          (i) => i.id === item.id
        );

        if (existing) {
          set({
            items: get().items.map((i) =>
              i.id === item.id
                ? {
                    ...i,
                    quantity: i.quantity + 1,
                  }
                : i
            ),
          });

          return;
        }

        set({
          items: [
            ...get().items,
            {
              ...item,
              quantity: 1,
            },
          ],
        });
      },

      removeItem: (id) => {
        set({
          items: get().items.filter(
            (item) => item.id !== id
          ),
        });
      },

      clearCart: () => {
        set({
          items: [],
        });
      },

      increaseQuantity: (id) => {
        set({
          items: get().items.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        });
      },

      decreaseQuantity: (id) => {
        set({
          items: get().items
            .map((item) =>
              item.id === id
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                  }
                : item
            )
            .filter((item) => item.quantity > 0),
        });
      },

      totalItems: () =>
        get().items.reduce(
          (acc, item) => acc + item.quantity,
          0
        ),

      totalPrice: () =>
        get().items.reduce(
          (acc, item) =>
            acc + item.price * item.quantity,
          0
        ),
    }),
    {
      name: "velvet-cart",
    }
  )
);
