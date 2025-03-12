import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { LogOut, Settings, User } from "lucide-react";

export default function UserDropdown() {
  return (
    <DropdownMenuContent
      className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
      sideOffset={4}
    >
      <DropdownMenuItem>
        <User />
        Perfil
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Settings />
        Configurações
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem asChild>
        <div className="flex items-center gap-2">
          <LogOut className="text-destructive-foreground" />
          <p className="text-destructive-foreground">Sair</p>
        </div>
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
}
