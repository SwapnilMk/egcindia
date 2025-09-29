import { AppSidebar } from "@/components/app-sidebar";
import { DashboardHome } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function EXimDashboard() {
  const { selectedPlan } = useSelector((state: RootState) => state.register);

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
              {selectedPlan === "Basic Plan" ? (
                <DashboardHome />
              ) : (
                <div className="p-6">
                  <h1 className="text-2xl font-bold">
                    Welcome to the {selectedPlan} Dashboard
                  </h1>
                  <p>
                    This is the dashboard for the {selectedPlan}. More features
                    coming soon!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}