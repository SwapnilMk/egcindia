import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="mx-auto">
      <main className="min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
