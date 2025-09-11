import logo from "../assets/logo/ecgindia.png";
import {
  Heart,
  Sprout,
  Bean,
  Wheat,
  Nut,
  Shirt,
  CrownIcon,
  WheatIcon,
} from "lucide-react";

export const BLUR_FADE_DELAY = 0.15;

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
      href: "/",
      title: "Home",
    },
    {
      href: "/about",
      title: "About",
    },
    {
      href: "/whyus",
      title: "Why Us?",
    },
    {
      href: "/commercial-services",
      title: "Commercial Services",
    },
    {
      href: "/product",
      title: "Products",
      description:
        "Browse our diverse range of high-quality agro and textile products.",
      submenu: [
        {
          href: "/product/vegetables-fruits",
          title: "Vegetables & Fruits",
          icon: Sprout,
          description:
            "Fresh, high-quality vegetables and fruits exported globally.",
        },
        {
          href: "/product/spices",
          title: "Spices",
          icon: Heart,
          description: "Authentic Indian spices with rich flavors and aromas.",
        },
        {
          href: "/product/pulses-beans",
          title: "Pulses & Beans",
          icon: Bean,
          description:
            "Nutritious pulses and beans for diverse culinary needs.",
        },
        {
          href: "/product/grains",
          title: "Grains",
          icon: WheatIcon,
          description: "Premium quality grains sourced from trusted farms.",
        },
        {
          href: "/product/flour",
          title: "Flour",
          icon: Wheat,
          description: "Finely milled flour for baking and cooking.",
        },
        {
          href: "/product/coconut-products",
          title: "Coconut Products",
          icon: Nut,
          description: "High-quality coconut-based products for various uses.",
        },
        {
          href: "/product/cattle-feed",
          title: "Cattle Feed",
          icon: CrownIcon,
          description:
            "Nutritious feed for livestock, ensuring quality and health.",
        },
        {
          href: "/product/textile-products",
          title: "Textile Products",
          icon: Shirt,
          description: "Durable and high-quality textile products for export.",
        },
      ],
    },
    {
      href: "/global-reach",
      title: "Global Reach",
      description:
        "Our export network spans USA, Europe, Middle East, Canada, and Asia.",
    },
    {
      href: "/contact",
      title: "Contact",
      description: "Get in touch with us for inquiries and partnerships.",
    },
  ],
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
  ],
};

export type SiteConfig = typeof siteConfig;
