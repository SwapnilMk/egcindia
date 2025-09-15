import SiteHeader from "@/components/header/site-header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="mx-auto">
      <SiteHeader />
      <main className="min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
