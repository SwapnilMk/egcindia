"use client";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldAlert, LogIn } from "lucide-react";

const AuthenticatePage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-8 px-4 md:px-8 bg-background relative">
      {/* Background subtle icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <ShieldAlert className="w-64 h-64 text-muted-foreground" />
      </div>

      <div className="z-10 text-center flex flex-col items-center gap-4 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Authentication Required
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl">
          You must complete the registration process to access the dashboard.
        </p>

        <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto justify-center mt-6">
          <Button
            className="rounded-full bg-blue-600 text-white hover:bg-blue-500 shadow-md"
            onClick={() => navigate("/register")}
          >
            <LogIn className="h-4 w-4" />
            Go to Registration
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthenticatePage;