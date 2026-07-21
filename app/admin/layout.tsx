import { AdminSidebar } from "@/components/admin/sidebar/AdminSidebar";
import { AdminHeader } from "@/components/admin/header/AdminHeader";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="flex">
        <AdminSidebar />

        <div className="flex min-h-screen flex-1 flex-col">
          <AdminHeader />

          <main className="flex-1 overflow-auto p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
