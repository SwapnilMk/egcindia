import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import type { RootState } from "@/store/store";

const ProtectedRoute = () => {
  const { isRegistered } = useSelector((state: RootState) => state.register);

  // If the user is registered, render the nested routes (i.e., the dashboard).
  // Otherwise, redirect them to the authentication page.
  return isRegistered ? <Outlet /> : <Navigate to="/authenticate" replace />;
};

export default ProtectedRoute;
