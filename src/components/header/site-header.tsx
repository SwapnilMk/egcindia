import { Button } from "@/components/ui/button";
import { NavMenu } from "./nav-menu";
import { MobileNav } from "./mobile-nav";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site-config";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="h-16 md:h-20">
        <div className="h-full flex items-center justify-between max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center md:hidden">
            <MobileNav />
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none md:translate-x-0 flex items-center md:gap-8">
            <div className="flex-shrink-0">
              <img
                src={siteConfig.logo}
                className="h-12 md:h-16 w-auto transition-transform duration-200 hover:scale-105"
                alt="EGC India Logo"
              />
            </div>
            <NavMenu className="hidden md:block" />
          </div>

          <div className="hidden md:flex items-center">
            <Button
              size="sm"
              variant="outline"
              className="group transition-all duration-200 hover:shadow-md"
            >
              Login
              <ArrowUpRight className="h-4 w-4 ml-2 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
