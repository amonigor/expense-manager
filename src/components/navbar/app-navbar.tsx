import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import UserNavbar from "./user-navbar";
import type { LucideIcon } from "lucide-react";

type Props = {
  menuItems: { icon: LucideIcon; label: string; href: string }[];
};

export default function AppNavbar({ menuItems }: Props) {
  return (
    <div className="fixed bottom-0 p-2 w-full flex justify-center">
      <div className="bg-sidebar border border-sidebar-border rounded-lg">
        <NavigationMenu className="max-w-full">
          <NavigationMenuList className="p-2 gap-2">
            {menuItems.map((item) => (
              <NavigationMenuItem>
                <NavigationMenuLink href={item.href}>
                  <item.icon className="size-6" />
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}

            <UserNavbar />
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
