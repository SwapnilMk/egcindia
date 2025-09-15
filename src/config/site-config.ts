import logo from "@/assets/images/logos/ecgindia.png";
import type { LucideIcon } from "lucide-react"; // Import LucideIcon type

export const BLUR_FADE_DELAY = 0.15;

// Define the type for submenu items
export interface SubmenuItem {
  href: string;
  title: string;
  description?: string;
  icon?: LucideIcon; // Use LucideIcon instead of React.ComponentType
}

// Define the type for nav items
export interface NavItem {
  href: string;
  title: string;
  description?: string;
  submenu?: SubmenuItem[];
}

// Define the type for footer items
interface FooterItem {
  links: {
    title: string;
    href: string;
  }[];
}

export const siteConfig = {
  name: "EGC India",
  logo: logo,
  description:
    "EGC India is a trusted exporter of fresh vegetables, spices, pulses, grains, oilseeds, cattle feed, textile products, and foodstuff — serving USA, Europe, Middle East, Canada & Asia with quality and reliability.",
  url: "http://localhost:5173",
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
    {
      href: "/about",
      title: "About",
    },
    {
      href: "/services",
      title: "Commercial Services",
    },
    {
      href: "/platforms",
      title: "Platforms",
    },
    {
      href: "/partners",
      title: "Partners",
    },
    {
      href: "/contact",
      title: "Contact",
      description: "Get in touch with us for inquiries and partnerships.",
    },
  ] as NavItem[], // Explicitly type navItems
  footerItems: [
    {
      links: [
        { title: "Home", href: "#" },
        { title: "About", href: "#" },
        { title: "Why us?", href: "#" },
      ],
    },
    {
      links: [
        { title: "Textile Products", href: "#" },
        { title: "Global Reach", href: "#" },
        { title: "Vegetables and Fruits", href: "#" },
      ],
    },
    {
      links: [
        { title: "Spices", href: "#" },
        { title: "Pulses and Beans", href: "#" },
        { title: "Grains", href: "#" },
      ],
    },
    {
      links: [
        { title: "Flour", href: "#" },
        { title: "Coconut products", href: "#" },
        { title: "Cattle Feed", href: "#" },
      ],
    },
    {
      links: [
        { title: "Contact", href: "#" },
        { title: "Facebook", href: "#" },
        { title: "Disclaimer", href: "#" },
      ],
    },
  ] as FooterItem[],
};

export type SiteConfig = typeof siteConfig;
