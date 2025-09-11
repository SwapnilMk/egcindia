"use client";

import * as React from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site-config";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import type { LucideIcon } from "lucide-react";

export function NavMenu({ className }: { className?: string }) {
  return (
    <NavigationMenu className={cn("hidden md:flex", className)}>
      <NavigationMenuList className="gap-1 space-x-0">
        {siteConfig.navItems.map((item) =>
          item.submenu ? (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuTrigger className="h-9 px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-accent/80">
                <span className="flex items-center gap-2">{item.title}</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-6 md:w-[500px] lg:w-[600px]">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                  <ul className="grid gap-3 md:grid-cols-2">
                    {item.submenu.map((sub) => (
                      <ListItem
                        key={sub.href}
                        title={sub.title}
                        icon={sub.icon}
                        to={sub.href}
                      >
                        {sub.description}
                      </ListItem>
                    ))}
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink asChild>
                <Link
                  to={item.href}
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  <span className="flex items-center gap-2">{item.title}</span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ),
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & {
    icon: LucideIcon;
    title: string;
  }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "group block select-none space-y-2 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:shadow-sm border border-transparent hover:border-border/20",
            className,
          )}
          {...props}
        >
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-0.5">
              <Icon className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground transition-colors duration-200" />
            </div>
            <div className="space-y-1">
              <div className="text-sm font-semibold leading-none group-hover:text-accent-foreground transition-colors duration-200">
                {title}
              </div>
              <p className="line-clamp-2 text-xs leading-snug text-muted-foreground group-hover:text-accent-foreground/80 transition-colors duration-200">
                {children}
              </p>
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
