import * as React from "react";
import {
  IconCamera,
  // IconChartBar,
  IconDashboard,
  IconFileAi,
  IconFileDescription,
  IconFolder,
  // IconHelp,
  IconListDetails,
  IconPackage,
  IconReportAnalytics,
  IconBuildingBank,
  // IconUsers,
  IconSettings,
  IconBell,
} from "@tabler/icons-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import econsLogo from "@/assets/images/platforms/econs-exim-gateway.webp";
// import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  // SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Overview",
      url: "#",
      icon: IconDashboard, // ✅ Perfect for overview/analytics
    },
    {
      title: "Procure",
      url: "#",
      icon: IconListDetails, // ✅ Good for procurement list
    },
    {
      title: "Order",
      url: "#",
      icon: IconPackage, // ✅ Package = order items
    },
    {
      title: "Trade Finance",
      url: "#",
      icon: IconBuildingBank, // ✅ Bank/building = finance section
    },
    {
      title: "Trade Advisory & Compliance",
      url: "#",
      icon: IconReportAnalytics, // ✅ Analytics/report icon fits compliance
    },
    {
      title: "Inventory & Spend",
      url: "#",
      icon: IconFolder, // ✅ Inventory folder
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings, // ✅ Standard settings gear
    },
    {
      title: "Alerts Center",
      url: "#",
      icon: IconBell, // ✅ Bell icon is better for alerts/notifications
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <img
                  src={econsLogo}
                  alt="ECONS EXIM GATEWAY"
                  className="inline h-10 w-10"
                />
                <span className="text-base font-semibold">
                  ECONS EXIM GATEWAY
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}
    </Sidebar>
  );
}
