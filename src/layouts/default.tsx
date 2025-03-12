import { Outlet } from "react-router";

import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar";

export default function DefaultLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="p-4 w-full">
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
