import { Outlet } from "react-router";

import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/sidebar/app-sidebar";
import ToggleButton from "@/components/sidebar/toggle-button";

export default function DefaultLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="py-2 w-full flex flex-col gap-2">
        <ToggleButton />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
