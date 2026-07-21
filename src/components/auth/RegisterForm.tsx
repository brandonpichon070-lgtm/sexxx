"use client";

import { registerUser } from "@/actions/auth.actions";

export function RegisterForm() {
  return (
    <form
  action={async (formData) => {
    await registerUser(formData);
  }}
>
      <input
        name="name"
        placeholder="Nombre"
        required
        className="w-full rounded border p-3"
      />

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
        className="w-full rounded-lg bg-pink-600 py-3 text-white"
      >
        Crear cuenta
      </button>
    </form>
  );
}
