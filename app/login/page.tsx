import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="container mx-auto max-w-md px-4 py-20">
      <h1 className="mb-8 text-4xl font-bold">
        Iniciar sesión
      </h1>

      <LoginForm />
    </main>
  );
}
