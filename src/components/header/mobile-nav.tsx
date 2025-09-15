"use client";

import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site-config";
import type { NavItem, SubmenuItem } from "@/config/site-config"; // Use type-only import
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowUpRight } from "lucide-react";

interface MobileNavProps {
  className?: string;
}

export function MobileNav({ className }: MobileNavProps) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <div className="md:hidden">
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
        {/* Animated Hamburger Icon */}
        <div className="relative flex h-6 w-6 items-center justify-center">
          <motion.span
            className="absolute block h-0.5 w-5 bg-current rounded-sm"
            animate={
              open
                ? {
                    top: 12,
                    rotate: 45,
                  }
                : {
                    top: 6,
                    rotate: 0,
                  }
            }
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.span
            className="absolute block h-0.5 w-5 bg-current rounded-sm top-3"
            animate={
              open
                ? {
                    opacity: 0,
                  }
                : {
                    opacity: 1,
                  }
            }
            transition={{ duration: 0.2, ease: "easeInOut" }}
          />
          <motion.span
            className="absolute block h-0.5 w-5 bg-current rounded-sm"
            animate={
              open
                ? {
                    top: 12,
                    rotate: -45,
                  }
                : {
                    top: 18,
                    rotate: 0,
                  }
            }
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </div>
      </Button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed top-16 left-0 right-0 bottom-0 bg-black/20 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="fixed z-50 bg-background border shadow-lg"
              style={{ width: "100vw", left: 0, right: 0 }}
              initial={{
                top: 16,
                left: 16,
                width: 40,
                height: 40,
                borderRadius: 8,
                opacity: 0.8,
              }}
              animate={{
                top: 64,
                left: 0,
                width: "100vw",
                height: "auto",
                borderRadius: 0,
                opacity: 1,
              }}
              exit={{
                top: 16,
                left: 16,
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
              <motion.div
                className="max-h-[calc(100vh-4rem)] overflow-y-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <div className="p-6 space-y-2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    {siteConfig.navItems.map((item: NavItem, index: number) =>
                      item.submenu ? (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.1 + index * 0.05,
                            duration: 0.3,
                          }}
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
                                <span className="flex items-center gap-2">
                                  {item.title}
                                </span>
                              </AccordionTrigger>
                              <AccordionContent className="pb-2">
                                <div className="ml-4 space-y-2 border-l border-border/30 pl-4">
                                  {item.submenu.map(
                                    (sub: SubmenuItem, subIndex: number) => (
                                      <motion.div
                                        key={sub.href}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                          delay: 0.2 + subIndex * 0.03,
                                          duration: 0.2,
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
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.1 + index * 0.05,
                            duration: 0.3,
                          }}
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

                  <motion.div
                    className="my-6 border-t border-border/30"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    <Button
                      className="w-full group transition-all duration-200 hover:shadow-md"
                      size="sm"
                      onClick={() => setOpen(false)}
                    >
                      Get Started
                      <ArrowUpRight className="h-4 w-4 ml-2 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Button>
                  </motion.div>
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
