import SiteFooter from "@/components/footer/egcindia/site-footer";
import SiteHeader from "@/components/header/egcindia/site-header";
import { useScrollReset } from "@/hooks/use-scroll-restore";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  useScrollReset();

  return (
    <div className="mx-auto">
      <SiteHeader />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
