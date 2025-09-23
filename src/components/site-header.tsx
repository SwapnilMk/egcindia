import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, LogOut, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// ✅ Define allowed plan names
type PlanType = "Basic" | "Pro" | "Premium";

// ✅ Now TS knows userPlan can only be one of these
const userPlan: PlanType = "Basic";

export function SiteHeader() {
  const getPlanConfig = () => {
    switch (userPlan) {
      case "Basic":
        return {
          label: "Basic Plan (Free)",
          color: "text-orange-700", // Bronze color
          emoji: "🥉",
        };
      case "Pro":
        return {
          label: "Pro Plan",
          color: "text-yellow-500", // Gold color
          emoji: "🥇",
        };
      case "Premium":
        return {
          label: "Premium Plan",
          color: "text-gray-400", // Platinum look
          emoji: "🏆",
        };
    }
  };

  const plan = getPlanConfig();

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        {/* Sidebar Trigger */}
        <SidebarTrigger className="-ml-1" />

        {/* Separator */}
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />

        {/* Plan Badge */}
        <h1
          className={`text-base font-semibold flex items-center gap-1 ${plan.color}`}
        >
          <span>{plan.emoji}</span> {plan.label}
        </h1>

        {/* Right Section */}
        <div className="ml-auto flex items-center gap-3">
          {/* Notification Button */}
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>

          {/* Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-8 w-8 cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#logout" className="flex items-center w-full">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
