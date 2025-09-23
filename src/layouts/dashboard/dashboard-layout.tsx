import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  BarChart2,
  ShoppingCart,
  PackageSearch,
  Truck,
  ShieldAlert,
  Lock,
  Lightbulb,
  Settings,
  User,
  Menu,
} from "lucide-react";
import eximGateWayLogo from "@/assets/images/platforms/econs-exim-gateway.webp";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const SidebarItem = ({
  icon: Icon,
  label,
  to,
  locked = false,
}: {
  icon: React.ElementType;
  label: string;
  to: string;
  locked?: boolean;
}) => (
  <NavLink
    to={to}
    end
    className={({ isActive }) =>
      `group flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer select-none transition-colors ${
        isActive
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:bg-muted"
      }`
    }
  >
    <Icon className="w-5 h-5 opacity-90" />
    <span className="text-sm font-medium flex-1">{label}</span>
    {locked && <Lock className="w-4 h-4 opacity-60" />}
  </NavLink>
);

const SidebarContent = () => (
  <>
    {/* App mark */}
    <div className="flex items-center gap-3">
      <img
        src={eximGateWayLogo}
        alt="EGC India Logo"
        className="w-12 h-12 object-contain"
      />
      <div>
        <div className="text-sm font-bold tracking-wide">
          ECON'S EXIM Gateway
        </div>
        <div className="text-[11px] text-muted-foreground -mt-0.5">
          Powered by EGC India
        </div>
      </div>
    </div>

    <div className="mt-2 text-[11px] text-muted-foreground">
      In Association with AECCI
    </div>

    {/* Navigation */}
    <div className="mt-4 space-y-1 flex-1">
      <SidebarItem icon={BarChart2} label="Overview" to="/eeg/dashboard" />
      <SidebarItem
        icon={ShoppingCart}
        label="Procure"
        to="/eeg/dashboard/procure"
      />
      <SidebarItem
        icon={PackageSearch}
        label="Order"
        to="/eeg/dashboard/order"
      />
      <SidebarItem
        icon={Truck}
        label="Trade Finance"
        to="/eeg/dashboard/trade-finance"
      />
      <SidebarItem
        icon={ShieldAlert}
        label="Trade Advisory & Compliance"
        to="/eeg/dashboard/trade-advisory-and-compliance"
      />
      <SidebarItem
        icon={Lightbulb}
        label="Inventory & Spend"
        to="/eeg/dashboard/inventory-and-spend"
      />
    </div>

    {/* Bottom section: Settings / Profile */}
    <div className="space-y-1 border-t pt-3">
      <SidebarItem icon={Settings} label="Settings" to="/eeg/dashboard/plan" />
      <SidebarItem icon={User} label="Profile" to="/eeg/dashboard/profile" />
    </div>
  </>
);

const DashboardLayout: React.FC = () => {
  return (
    <div className="w-full h-screen min-h-[768px] bg-background text-foreground overflow-hidden flex">
      {/* Sidebar */}
      <aside className="w-[250px] h-full border-r bg-card p-4 hidden lg:flex flex-col gap-4">
        <SidebarContent />
      </aside>

      {/* Main */}
      <main className="flex-1 h-full flex flex-col">
        <header className="lg:hidden h-14 flex items-center px-4 border-b">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[250px] flex flex-col gap-4 p-4">
              <SidebarContent />
            </SheetContent>
          </Sheet>
        </header>
        <div className="flex-1 h-[calc(100vh-3.5rem)] overflow-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
