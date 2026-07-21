import { CheckoutForm } from "@/components/checkout/CheckoutForm";
import { CheckoutSummary } from "@/components/checkout/CheckoutSummary";

export default function CheckoutPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold">Checkout</h1>
        <p className="mt-3 text-zinc-400">Finaliza tu compra de forma segura.</p>
      </div>
      <div className="grid gap-10 lg:grid-cols-[1.6fr_420px]">
        <CheckoutForm />
        <CheckoutSummary />
      </div>
    </main>
  );
}
