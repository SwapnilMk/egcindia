import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import BasicDashboard from "./BasicDashboard";
import GrowthDashboard from "./GrowthDashboard";
import ProDashboard from "./ProDashboard";

export default function EXimDashboard() {
  const { selectedPlan } = useSelector((state: RootState) => state.register);

  const renderDashboard = () => {
    switch (selectedPlan) {
      case "Basic Plan":
        return <BasicDashboard />;
      case "Growth Plan":
        return <GrowthDashboard />;
      case "Pro Plan":
        return <ProDashboard />;
      default:
        // This case should not be reached due to the ProtectedRoute,
        // which ensures a plan is selected before rendering this component.
        return <BasicDashboard />;
    }
  };

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              {renderDashboard()}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}