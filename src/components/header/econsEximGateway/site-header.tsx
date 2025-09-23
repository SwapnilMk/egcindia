import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { eximGatewaySiteConfig } from "@/config/site-config";
import { NavMenu } from "./nav-menu";
import { MobileNav } from "./mobile-nav";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SiteHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 left-0 w-full bg-white z-50 transition-all duration-300",
        isScrolled ? "shadow-md" : "shadow-none",
      )}
    >
      <div
        className="
          grid grid-cols-[auto_1fr_auto] 
          items-center px-4 sm:px-6 py-3
          max-w-[1400px] mx-auto
        "
      >
        {/* Left: Logo */}
        <Link to="/eeg" className="flex items-center space-x-2">
          <img
            src={eximGatewaySiteConfig.logo}
            alt="EXIM Gateway"
            className="h-9 sm:h-10 w-auto object-contain"
          />
        </Link>

        {/* Center: Desktop Menu - only visible ≥1024px */}
        <nav className="hidden lg:flex justify-center">
          <NavMenu />
        </nav>

        {/* Right: CTA + Hamburger */}
        <div className="flex items-center space-x-3 justify-end">
          {/* CTA Button only visible ≥1024px */}
          <Button
            asChild
            className="hidden lg:inline-flex bg-yellow-400 text-black cursor-pointer font-semibold  rounded-full shadow hover:bg-yellow-300 transition-colors"
          >
            <span onClick={() => navigate(eximGatewaySiteConfig.cta.href)}>
              {eximGatewaySiteConfig.cta.label}
            </span>
          </Button>
          <Button
            asChild
            className="hidden lg:inline-flex bg-yellow-400 text-black cursor-pointer font-semibold  rounded-full shadow hover:bg-yellow-300 transition-colors"
          >
            <span onClick={() => navigate(eximGatewaySiteConfig.login.href)}>
              {eximGatewaySiteConfig.login.label}
            </span>
          </Button>

          {/* Hamburger visible < 1024px (tablet + mobile) */}
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
