import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface UseScrollResetOptions {
  resetOnPathChange?: boolean;
  resetOnHashChange?: boolean;
  excludePaths?: string[];
  behavior?: ScrollBehavior;
}

export function useScrollReset({
  resetOnPathChange = true,
  resetOnHashChange = true,
  excludePaths = [],
  behavior = "auto",
}: UseScrollResetOptions = {}) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Handle scroll reset for pathname changes
    if (resetOnPathChange) {
      const shouldReset = !excludePaths.some((path) =>
        pathname.startsWith(path),
      );
      if (shouldReset) {
        window.scrollTo({ top: 0, left: 0, behavior });
      }
    }

    // Handle hash navigation
    if (resetOnHashChange && hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }, 100);
      }
    }
  }, [
    pathname,
    hash,
    resetOnPathChange,
    resetOnHashChange,
    excludePaths,
    behavior,
  ]);
}
