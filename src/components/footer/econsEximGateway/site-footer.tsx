import { Link } from "react-router-dom";
import { eximGatewaySiteConfig } from "@/config/site-config";
import { cn } from "@/lib/utils";

const SiteFooter = () => {
  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8 text-center">
      {/* Logos Section */}
      <div className="flex flex-row flex-wrap justify-center items-center space-x-4 sm:space-x-6 mb-6">
        {eximGatewaySiteConfig.footer.logos.map((logo, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={logo.src}
              alt={logo.alt}
              className={cn(
                "h-10 w-auto object-contain opacity-90",
                logo.className,
              )}
            />
          </div>
        ))}
      </div>

      {/* Copyright and Tagline */}
      <p className="text-sm mb-6 font-semibold">
        {eximGatewaySiteConfig.footer.copyright}
      </p>

      {/* Navigation Links */}
      <div className="flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm">
        {eximGatewaySiteConfig.footer.links.map((link, index) => (
          <Link
            key={index}
            to={link.href}
            className="hover:underline transition-colors duration-200"
          >
            {link.title}
          </Link>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-6 pt-6 border-t border-gray-800">
        <p className="text-xs text-gray-700">
          © {new Date().getFullYear()} ECONS EXIM Gateway. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
