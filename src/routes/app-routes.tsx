import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import EximGatewayHome from "@/pages/EximGateway";
import EconsLayout from "@/layouts/main/exim-gateway-layout";
import AboutExim from "@/pages/EximGateway/about";
import HowEximWorks from "@/pages/EximGateway/howEximworks";
import Benefits from "@/pages/EximGateway/benefits";
import PricingPlans from "@/pages/EximGateway/pricing";
import PrivacyPolicy from "@/pages/EgcIndia/privacy-policy";
import { Roles } from "@/pages/EximGateway/roles";
import SelectPlan from "@/pages/EximGateway/auth/register/select-plan";
import EXimDashboard from "@/pages/EximGateway/dashboard";
import DashboardLayout from "@/layouts/dashboard/dashboard-layout";
import Overview from "@/pages/EximGateway/dashboard/pages/Overview";
import Procure from "@/pages/EximGateway/dashboard/pages/Procure";
import Order from "@/pages/EximGateway/dashboard/pages/Order";
import TradeFinance from "@/pages/EximGateway/dashboard/pages/TradeFinance";
import TradeAdvisoryAndCompliance from "@/pages/EximGateway/dashboard/pages/TradeAdvisoryAndCompliance";
import InventoryAndSpend from "@/pages/EximGateway/dashboard/pages/InventoryAndSpend";


// Lazy-loaded layouts
const MainLayout = lazy(() => import("@/layouts/main/main-layout"));
// const EegLayout = lazy(() => import("@/layouts/eeg/index")); // New: EEG layout
// const AuthLayout = lazy(() => import("@/layouts/auth/index")); // New: Auth layout

// Lazy-loaded pages
const Home = lazy(() => import("@/pages"));
const AboutUs = lazy(() => import("@/pages/EgcIndia/about"));
const Services = lazy(() => import("@/pages/EgcIndia/services"));
const CommercialServicesCollaboration = lazy(
  () => import("@/pages/EgcIndia/services/collaboration"),
);
const EximGateway = lazy(
  () => import("@/pages/EgcIndia/services/exim/exim-gateway"),
);
const Platforms = lazy(() => import("@/pages/EgcIndia/platform"));
const Partners = lazy(() => import("@/pages/EgcIndia/partners"));
const Industries = lazy(() => import("@/pages/EgcIndia/Industries"));
const WhyChoose = lazy(() => import("@/pages/EgcIndia/whychoose"));
const GetStarted = lazy(() => import("@/pages/EgcIndia/get-started"));
const RequestDemo = lazy(() => import("@/pages/EgcIndia/requestdemo"));
const ContactUs = lazy(() => import("@/pages/EgcIndia/contact"));
const ConnectOurTeam = lazy(
  () => import("@/pages/EgcIndia/contact/connect-team"),
);
const StartConversation = lazy(
  () => import("@/pages/EgcIndia/contact/conversation"),
);
const NotFound = lazy(() => import("@/pages/NotFound"));
const ErrorPage = lazy(() => import("@/pages/ErrorPage"));
// const EegDashboard = lazy(() => import("@/pages/eeg/dashboard")); // New: Example EEG page
// const Login = lazy(() => import("@/pages/auth/login")); // New: Login page
// const Signup = lazy(() => import("@/pages/auth/signup")); // New: Signup page

export const router = createBrowserRouter(
  [
    // Main routes (using MainLayout)
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <AboutUs /> },
        {
          path: "services",
          children: [
            { index: true, element: <Services /> },
            {
              path: "collaboration",
              element: <CommercialServicesCollaboration />,
            },
            { path: "exim-gateway", element: <EximGateway /> },
          ],
        },
        { path: "platforms", element: <Platforms /> },
        { path: "partners", element: <Partners /> },
        { path: "industries", element: <Industries /> },
        { path: "why-choose", element: <WhyChoose /> },
        { path: "get-started", element: <GetStarted /> },
        {
          path: "request-demo",
          children: [{ index: true, element: <RequestDemo /> }],
        },
        {
          path: "contact",
          children: [
            { index: true, element: <ContactUs /> },
            { path: "connect-team", element: <ConnectOurTeam /> },
            { path: "conversation", element: <StartConversation /> },
          ],
        },
        { path: "privacy-policy", element: <PrivacyPolicy /> },
        // { path: "*", element: <NotFound /> }, // 404 for main routes
      ],
    },
    // EEG routes (using EegLayout)
    {
      path: "/eeg",
      // element: <EegLayout />,
      element: <EconsLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <EximGatewayHome /> }, // Example child route
        { path: "about", element: <AboutExim /> }, // 404 for /eeg/*
        { path: "how-it-works", element: <HowEximWorks /> }, // 404 for /eeg/*
        { path: "benefits", element: <Benefits /> }, // 404 for /eeg/*
        { path: "pricing", element: <PricingPlans /> }, // 404 for /eeg/*
        { path: "roles", element: <Roles /> }, // 404 for /eeg/*
        // { path: "*", element: <NotFound /> }, // 404 for /eeg/*
        {
          path: "auth",
          errorElement: <ErrorPage />,
          children: [
            { path: "select-plan", element: <SelectPlan /> },
            // { path: "signup", element: <Signup /> },
            { path: "*", element: <NotFound /> }, // 404 for /auth/*
          ],
        },
        {
          path: "dashboard",
          element: <DashboardLayout />,
          children: [
            { index: true, element: <Overview /> },
            { path: "procure", element: <Procure /> },
            { path: "order", element: <Order /> },
            { path: "trade-finance", element: <TradeFinance /> },
            { path: "trade-advisory-and-compliance", element: <TradeAdvisoryAndCompliance /> },
            { path: "inventory-and-spend", element: <InventoryAndSpend /> },
          ],
        },
      ],
    },
    // Auth routes (using AuthLayout)
    // Catch-all for unmatched top-level routes
    { path: "*", element: <NotFound /> },
  ],
  {
    basename: "/", // Adjust if deploying under a subpath (e.g., "/my-app")
  },
);
