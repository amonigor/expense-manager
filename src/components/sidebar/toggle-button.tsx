import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { ChevronLeft } from "lucide-react";

export default function ToggleButton() {
  const { state, toggleSidebar } = useSidebar();

  return (
    <TooltipProvider>
      <Tooltip delayDuration={800}>
        <TooltipTrigger asChild>
          <Button
            className="cursor-pointer sticky top-2 shadow"
            variant="outline"
            size="icon"
            onClick={toggleSidebar}
          >
            <ChevronLeft
              className={cn([
                "transform",
                "transition-transform",
                "duration-300",
                state === "collapsed" ? "rotate-180" : null,
              ])}
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>{state === "collapsed" ? "Expandir" : "Encolher"} barra lateral</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
