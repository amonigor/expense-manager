import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/sidebar/app-sidebar";
import ToggleButton from "@/components/sidebar/toggle-button";
import { useIsMobile } from "@/hooks/use-mobile";

import { Outlet } from "react-router";
import { HandCoins, Home, NotebookText, PiggyBank, Wallet } from "lucide-react";
import AppNavbar from "@/components/navbar/app-navbar";

export default function DefaultLayout() {
  const isMobile = useIsMobile();

  const menuItems = [
    { icon: Home, label: "Início", href: "/" },
    { icon: Wallet, label: "Despesas", href: "/expenses" },
    { icon: PiggyBank, label: "Objetivos", href: "/saving" },
    { icon: HandCoins, label: "Devedores", href: "/to-receive" },
    { icon: NotebookText, label: "Relatórios", href: "/reports" },
  ];

  return (
    <SidebarProvider>
      {!isMobile ? (
        <AppSidebar menuItems={menuItems} />
      ) : (
        <AppNavbar menuItems={menuItems} />
      )}
      <main className="pt-2 pb-20 md:pb-2 w-full flex flex-col gap-2">
        {!isMobile ? <ToggleButton /> : null}
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
