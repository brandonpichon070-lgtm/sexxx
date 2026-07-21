import Link from "next/link";

export function SidebarLogo() {
  return (
    <Link
      href="/admin"
      className="flex items-center gap-3 px-6 py-8"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-fuchsia-600 text-xl font-bold text-white shadow-lg">
        V
      </div>

      <div>
        <h1 className="text-lg font-bold text-white">
          Velvet
        </h1>

        <p className="text-xs text-zinc-500">
          Admin Panel
        </p>
      </div>
    </Link>
  );
}
