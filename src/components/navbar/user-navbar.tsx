import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import UserDropdown from "@/components/user-dropdown";

export default function UserNavbar() {
  return (
    <NavigationMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <NavigationMenuLink>
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarFallback className="rounded-lg dark:bg-fuchsia-800 bg-fuchsia-300">
                JD
              </AvatarFallback>
            </Avatar>
          </NavigationMenuLink>
        </DropdownMenuTrigger>

        <UserDropdown />
      </DropdownMenu>
    </NavigationMenuItem>
  );
}
