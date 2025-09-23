import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/sidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";

const DashboardLayout: React.FC = () => {
  const isMobile = useMobile();

  if (isMobile) {
    return (
      <div className="w-full h-screen min-h-[768px] bg-background text-foreground overflow-hidden flex">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-50">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-[250px]">
            <Sidebar />
          </SheetContent>
        </Sheet>
        <main className="flex-1 h-full overflow-auto pt-16">
          <Outlet />
        </main>
      </div>
    );
  }

  return (
    <div className="w-full h-screen min-h-[768px] bg-background text-foreground overflow-hidden flex">
      <Sidebar />
      <main className="flex-1 h-full overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
