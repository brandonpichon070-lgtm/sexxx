"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export function UserMenu() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <>
        <Link
          href="/login"
          className="rounded bg-white/20 px-3 py-1"
        >
          Login
        </Link>

        <Link
          href="/register"
          className="rounded bg-white/20 px-3 py-1"
        >
          Registro
        </Link>
      </>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span>
        Hola {session.user?.name}
      </span>

      <Link
        href="/profile/orders"
        className="rounded bg-pink-600 px-3 py-1 text-white"
      >
        Mis pedidos
      </Link>

      <Link
        href="/profile/wishlist"
        className="rounded bg-purple-600 px-3 py-1 text-white"
      >
        Favoritos ❤️
      </Link>

      <button
        onClick={() => signOut()}
        className="rounded bg-red-500 px-3 py-1"
      >
        Salir
      </button>
    </div>
  );
}
