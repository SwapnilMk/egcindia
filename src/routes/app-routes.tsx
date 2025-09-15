import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/main/index";

// Pages
import Home from "@/pages";
import AboutUs from "@/pages/about";
import Services from "@/pages/services";
import CommercialServicesCollaboration from "@/pages/services/collaboration";
// import Platforms from "@/pages/platform";
// import WhyChoose from "@/pages/whychoose";
// import RequestDemo from "@/pages/requestdemo";
// import WhyRequestDemo from "@/pages/requestdemo/why-req-demo";
// import ContactUs from "@/pages/contact";
// import ConnectOurTeam from "@/pages/contact/connect-team";
// import StartConversation from "@/pages/contact/conversation";
// import Industries from "@/pages/Industries";
// import GetStarted from "@/pages/getstared";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
        ],
      },
      // { path: "platforms", element: <Platforms /> },
      // { path: "industries", element: <Industries /> },
      // { path: "why-choose", element: <WhyChoose /> },
      // { path: "get-started", element: <GetStarted /> },
      // {
      //   path: "request-demo",
      //   children: [
      //     { index: true, element: <RequestDemo /> },
      //     { path: "why", element: <WhyRequestDemo /> },
      //   ],
      // },
      // {
      //   path: "contact",
      //   children: [
      //     { index: true, element: <ContactUs /> },
      //     { path: "connect-team", element: <ConnectOurTeam /> },
      //     { path: "conversation", element: <StartConversation /> },
      //   ],
      // },
    ],
  },
]);
