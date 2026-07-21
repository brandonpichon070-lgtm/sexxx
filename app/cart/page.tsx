import { CartPage } from "@/components/cart/CartPage";

export default function Cart() {
  return (
    <main className="container mx-auto px-4 py-20">
      <h1 className="mb-10 text-4xl font-bold">
        Carrito
      </h1>

      <CartPage />
    </main>
  );
}
