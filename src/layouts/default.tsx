import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/sidebar/app-sidebar";
import ToggleButton from "@/components/sidebar/toggle-button";

import { Outlet } from "react-router";
import { HandCoins, Home, NotebookText, PiggyBank, Wallet } from "lucide-react";

export default function DefaultLayout() {
  const menuItems = [
    { icon: Home, label: "Início", href: "/" },
    { icon: Wallet, label: "Despesas", href: "/expenses" },
    { icon: PiggyBank, label: "Objetivos", href: "/saving" },
    { icon: HandCoins, label: "Devedores", href: "/to-receive" },
    { icon: NotebookText, label: "Relatórios", href: "/reports" },
  ];

  return (
    <SidebarProvider>
      <AppSidebar menuItems={menuItems} />
      <main className="py-2 w-full flex flex-col gap-2">
        <ToggleButton />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
