import { Outlet } from "react-router-dom";
import SiteBanner from "@/components/header/header-banner";
import SiteHeader from "@/components/header/site-header";
import SiteFooter from "@/components/footer/site-footer";

export default function MainLayout() {
  return (
    <div className="mx-auto">
      <SiteBanner />
      <SiteHeader />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
