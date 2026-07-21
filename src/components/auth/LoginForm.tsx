"use client";

import { signIn } from "next-auth/react";

export function LoginForm() {
  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const formData = new FormData(
      event.currentTarget
    );

    const email =
      formData.get("email")?.toString() ?? "";

    const password =
      formData.get("password")?.toString() ?? "";

    await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/",
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input
        name="email"
        type="email"
        placeholder="Correo"
        required
        className="w-full rounded border p-3"
      />

      <input
        name="password"
        type="password"
        placeholder="Contraseña"
        required
        className="w-full rounded border p-3"
      />

      <button
        type="submit"
        className="w-full rounded bg-pink-600 p-3 text-white"
      >
        Iniciar sesión
      </button>
    </form>
  );
}
