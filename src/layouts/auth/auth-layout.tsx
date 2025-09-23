import { useScrollReset } from "@/hooks/use-scroll-restore";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  useScrollReset();

  return (
    <div className="mx-auto">
      <main className="min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
