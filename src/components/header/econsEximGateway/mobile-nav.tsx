"use client";

import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { eximGatewaySiteConfig } from "@/config/site-config";
import type { NavItem, SubmenuItem } from "@/config/site-config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface MobileNavProps {
  className?: string;
}

export function MobileNav({ className }: MobileNavProps) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "h-10 w-10 p-0 hover:bg-accent/80 focus-visible:bg-accent focus-visible:ring-2 focus-visible:ring-ring/50 active:bg-accent transition-all duration-200",
          className,
        )}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
      >
        <div className="relative flex h-6 w-6 items-center justify-center">
          <motion.span
            className="absolute block h-0.5 w-5 bg-current rounded-sm"
            animate={open ? { top: 12, rotate: 45 } : { top: 6, rotate: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.span
            className="absolute block h-0.5 w-5 bg-current rounded-sm top-3"
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          />
          <motion.span
            className="absolute block h-0.5 w-5 bg-current rounded-sm"
            animate={open ? { top: 12, rotate: -45 } : { top: 18, rotate: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </div>
      </Button>

      {/* Menu Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed top-16 left-0 right-0 bottom-0 bg-black/20 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
            />

            {/* Drawer Panel (Right to Left) */}
            <motion.div
              className="fixed z-50 bg-background border shadow-lg flex flex-col"
              style={{ width: "100vw", right: 0 }}
              initial={{
                top: 16,
                right: 16,
                width: 40,
                height: 40,
                borderRadius: 8,
                opacity: 0.8,
              }}
              animate={{
                top: 64,
                right: 0,
                width: "100vw",
                height: "auto",
                borderRadius: 0,
                opacity: 1,
              }}
              exit={{
                top: 16,
                right: 16,
                width: 40,
                height: 40,
                borderRadius: 8,
                opacity: 0,
              }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
                opacity: { duration: 0.3 },
              }}
            >
              {/* Scrollable Menu Section */}
              <motion.div
                className="max-h-[calc(100vh-4rem)] overflow-y-auto flex flex-col justify-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.15, duration: 0.3 }}
              >
                {/* Menu Links */}
                <div className="p-6 space-y-2">
                  <motion.div
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={{
                      hidden: {},
                      show: {
                        transition: { staggerChildren: 0.08 },
                      },
                    }}
                  >
                    {eximGatewaySiteConfig.navItems.map((item: NavItem) =>
                      item.submenu ? (
                        <motion.div
                          key={item.href}
                          variants={{
                            hidden: { opacity: 0, x: 20 },
                            show: { opacity: 1, x: 0 },
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                          >
                            <AccordionItem
                              value={item.href}
                              className="border-none"
                            >
                              <AccordionTrigger className="text-sm font-medium py-4 px-4 hover:bg-accent rounded-lg transition-colors duration-200 hover:no-underline">
                                {item.title}
                              </AccordionTrigger>
                              <AccordionContent className="pb-2">
                                <div className="ml-4 space-y-2 border-l border-border/30 pl-4">
                                  {item.submenu.map(
                                    (sub: SubmenuItem, subIndex: number) => (
                                      <motion.div
                                        key={sub.href}
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        transition={{
                                          delay: 0.15 + subIndex * 0.05,
                                          duration: 0.25,
                                        }}
                                      >
                                        <MobileLink
                                          href={sub.href}
                                          onOpenChange={setOpen}
                                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent transition-colors duration-200"
                                        >
                                          {sub.icon && (
                                            <sub.icon className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                                          )}
                                          <div className="space-y-0.5">
                                            <div className="text-sm font-medium">
                                              {sub.title}
                                            </div>
                                            <div className="text-xs text-muted-foreground line-clamp-2">
                                              {sub.description}
                                            </div>
                                          </div>
                                        </MobileLink>
                                      </motion.div>
                                    ),
                                  )}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </motion.div>
                      ) : (
                        <motion.div
                          key={item.href}
                          variants={{
                            hidden: { opacity: 0, x: 20 },
                            show: { opacity: 1, x: 0 },
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <MobileLink
                            href={item.href}
                            onOpenChange={setOpen}
                            className="flex items-center gap-2 px-4 py-4 text-sm font-medium rounded-lg hover:bg-accent transition-colors duration-200"
                          >
                            {item.title}
                          </MobileLink>
                        </motion.div>
                      ),
                    )}
                  </motion.div>
                </div>

                {/* ✅ Request Demo Button at Bottom */}
                <div className="p-6 border-t border-border/20">
                  <div className="space-y-3">
                    <Button
                      className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-full shadow hover:bg-yellow-300 transition-colors"
                      asChild
                    >
                      <Link to={eximGatewaySiteConfig.cta.href}>
                        {eximGatewaySiteConfig.cta.label}
                      </Link>
                    </Button>
                    <Button
                      className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-full shadow hover:bg-yellow-300 transition-colors"
                      asChild
                    >
                      <Link to={eximGatewaySiteConfig.login.href}>
                        {eximGatewaySiteConfig.login.label}
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
}: {
  href: string;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}) {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(href);
    onOpenChange?.(false);
  };

  return (
    <Link
      to={href}
      onClick={handleClick}
      className={cn("block transition-colors duration-200", className)}
    >
      {children}
    </Link>
  );
}
