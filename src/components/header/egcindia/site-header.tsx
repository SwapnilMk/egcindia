import { NavMenu } from "./nav-menu";
import { MobileNav } from "./mobile-nav";
import { egcSiteConfig } from "@/config/site-config";
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

          {/* Logo - Centered only on mobile, left-aligned from md+ */}
          <div
            className="flex-shrink-0 cursor-pointer 
                       absolute left-1/2 -translate-x-1/2 
                       md:static md:translate-x-0"
            onClick={() => navigate("/")}
          >
            <img
              src={egcSiteConfig.logo}
              className="h-10 sm:h-12 md:h-16 w-auto max-w-[180px] object-contain "
              alt="EGC India Logo"
            />
          </div>

          {/* Nav Menu - Hidden on mobile, visible on md+ */}
          <NavMenu className="hidden md:flex ml-auto" />
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
