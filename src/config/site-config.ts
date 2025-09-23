import egcLogo from "@/assets/images/logos/egcindia-trasparant.webp";
import econsEximGatewayLogo from "@/assets/images/platforms/econs-exim-gateway.webp";
import econsLogo from "@/assets/images/platforms/econs-exim-gateway.webp";
import aecciLogo from "@/assets/images/logos/aecci.webp";
import type { LucideIcon } from "lucide-react";

export const BLUR_FADE_DELAY = 0.15;

export interface SubmenuItem {
  href: string;
  title: string;
  description?: string;
  icon?: LucideIcon;
}

export interface NavItem {
  href: string;
  title: string;
  description?: string;
  submenu?: SubmenuItem[];
}

export const egcSiteConfig = {
  name: "EGC India",
  logo: egcLogo,
  description:
    "EGC India is a trusted exporter of fresh vegetables, spices, pulses, grains, oilseeds, cattle feed, textile products, and foodstuff — serving USA, Europe, Middle East, Canada & Asia with quality and reliability.",
  url: "/",
  keywords: [
    "EGC India agro export",
    "India agro products exporter",
    "export fresh vegetables India",
    "spices exporter India",
    "pulses exporter India",
    "grain exporter India",
    "oilseeds exporter India",
    "cattle feed exporter India",
    "textile products exporter India",
    "international agricultural export India",
    "quality agro exports",
    "competitive pricing agro products",
    "food-grade packing exporters",
    "fast shipment agro exports",
    "port-proximate exporters Mumbai",
    "customer-focused exporters India",
    "flexible agro sourcing India",
    "international trade standards exporter",
    "trusted Indian agro exporter",
    "fresh vegetables exporter with food grade packaging",
    "custom specification agro exports",
    "agro exporter serving USA Europe Middle East Canada Asia",
  ],
  links: {
    email: "egcindia2015@gmail.com",
    website: "https://egcindia.in/",
    github: "https://github.com/egcindia",
  },
  navItems: [
    { href: "/about", title: "About" },
    { href: "/services", title: "Services" },
    { href: "/platforms", title: "Platforms" },
    { href: "/partners", title: "Partners" },
    {
      href: "/contact",
      title: "Contact",
      description: "Get in touch with us for inquiries and partnerships.",
    },
  ] as NavItem[],
};

export const eximGatewaySiteConfig = {
  name: "ECONS EXIM Gateway",
  logo: econsEximGatewayLogo,
  description:
    "ECONS EXIM Gateway is a platform designed to streamline exports and imports with clear roles, benefits, and simplified workflows.",
  url: "/eeg",
  keywords: [
    "EXIM Gateway",
    "export import platform",
    "trade gateway India",
    "international trade portal",
    "export import roles",
    "pricing plans export import",
    "logistics and partners",
    "import export benefits",
    "global trade connection",
    "ECONS EXIM Gateway",
  ],
  links: {
    email: "contact@eximgateway.com",
    website: "https://eximgateway.com/",
  },
  navItems: [
    { href: "about", title: "About" },
    { href: "roles", title: "Roles" },
    { href: "how-it-works", title: "How It Works" },
    { href: "benefits", title: "Benefits" },
    { href: "pricing", title: "Pricing Plans" },
    { href: "partners", title: "Partners" },
    { href: "contact", title: "Contact Us" },
  ] as NavItem[],
  cta: {
    label: "Request Demo",
    href: "request-demo",
  },
  login: {
    label: "Login",
    href: "login",
  },
  footer: {
    logos: [
      { src: aecciLogo, alt: "AECCI", className: "h-10" },
      { src: econsLogo, alt: "ECONS", className: "h-10" },
      { src: egcLogo, alt: "EGC India", className: "h-10" },
    ],
    copyright: "In Association with AECCI | Powered by EGC India",
    links: [
      { title: "Terms of Service", href: "#terms" },
      { title: "Privacy Policy", href: "#privacy" },
      { title: "Contact", href: "#contact" },
    ],
  },
};

// ✅ Correct type exports with proper names
export type EgcSiteConfig = typeof egcSiteConfig;
export type EximGatewaySiteConfig = typeof eximGatewaySiteConfig;
