import { RegisterForm } from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <main className="container mx-auto max-w-lg px-4 py-20">
      <h1 className="mb-8 text-4xl font-bold">
        Crear cuenta
      </h1>

      <RegisterForm />
    </main>
  );
}
