import { NavMenu } from "./nav-menu";
import { MobileNav } from "./mobile-nav";
import { siteConfig } from "@/config/site-config";
import { useNavigate } from "react-router-dom";

const SiteHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <nav className="h-16 md:h-20">
        <div className="h-full flex items-center justify-between max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Mobile Menu Button (Left on Mobile) */}
          <div className="flex items-center md:hidden">
            <MobileNav />
          </div>

          {/* Logo - Centered on Mobile, Left on Desktop */}
          <div
            className="absolute left-1/2 -translate-x-1/2 md:static md:transform-none cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src={siteConfig.logo}
              className="h-12 md:h-16 w-auto transition-transform duration-200 hover:scale-105"
              alt="EGC India Logo"
            />
          </div>

          {/* Nav Menu - Right Side on Desktop */}
          <NavMenu className="hidden md:block" />
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
