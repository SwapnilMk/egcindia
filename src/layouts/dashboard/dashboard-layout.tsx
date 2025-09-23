import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { BarChart2, ShoppingCart, PackageSearch, Truck, ShieldAlert, Lock, Lightbulb } from "lucide-react";

const SidebarItem = ({ icon: Icon, label, to, locked = false }: { icon: React.ElementType, label: string, to: string, locked?: boolean }) => (
  <NavLink
    to={to}
    end
    className={({ isActive }) =>
      `group flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer select-none transition-colors ${
        isActive ? "bg-[#163445] text-white" : "text-slate-300 hover:bg-[#153242]"
      }`
    }
  >
    <Icon className="w-5 h-5 opacity-90" />
    <span className="text-sm font-medium flex-1">{label}</span>
    {locked && <Lock className="w-4 h-4 opacity-60" />}
  </NavLink>
);

const DashboardLayout: React.FC = () => {
  return (
    <div className="w-full h-screen min-h-[768px] bg-[#0B1C25] text-slate-100 overflow-hidden flex">
      {/* Sidebar */}
      <aside className="w-[250px] h-full border-r border-[#123041] bg-[#0D202A] p-4 flex flex-col gap-4">
        {/* App mark */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#E30613] text-white grid place-items-center font-black text-[11px] leading-none">
            <span className="text-center">ECON'S<br/>EXIM</span>
          </div>
          <div>
            <div className="text-sm font-bold tracking-wide">EXIM Gateway</div>
            <div className="text-[11px] text-slate-400 -mt-0.5">Powered by EGC India</div>
          </div>
        </div>

        <div className="mt-2 text-[11px] text-slate-400">In Association with AECCI</div>

        <div className="mt-4 space-y-1">
          <SidebarItem icon={BarChart2} label="Overview" to="/eeg/dashboard" />
          <SidebarItem icon={ShoppingCart} label="Procure" to="/eeg/dashboard/procure" />
          <SidebarItem icon={PackageSearch} label="Order" to="/eeg/dashboard/order" />
          <SidebarItem icon={Truck} label="Trade Finance" to="/eeg/dashboard/trade-finance" />
          <SidebarItem icon={ShieldAlert} label="Trade Advisory & Compliance" to="/eeg/dashboard/trade-advisory-and-compliance" />
          <SidebarItem icon={Lightbulb} label="Inventory & Spend" to="/eeg/dashboard/inventory-and-spend" />
        </div>

        <div className="mt-auto text-[11px] text-slate-500">
          <div className="mb-1">Plan: <span className="text-slate-200 font-semibold">Basic</span></div>
          <div>Role: <span className="text-slate-200 font-semibold">Exporter</span></div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 h-full overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
