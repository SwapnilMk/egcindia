import React from "react";
import { NavLink } from "react-router-dom";
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
} from "lucide-react";
import eximGateWayLogo from "@/assets/images/platforms/econs-exim-gateway.webp";

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

const Sidebar: React.FC = () => {
  return (
    <aside className="w-[250px] h-full border-r bg-background p-4 flex flex-col gap-4">
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
        <SidebarItem icon={BarChart2} label="Overview" to="/eeg/dashboard/overview" />
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
        <SidebarItem
          icon={Settings}
          label="Settings"
          to="/eeg/dashboard/plan"
        />
        <SidebarItem
          icon={User}
          label="Profile"
          to="/eeg/dashboard/profile"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
