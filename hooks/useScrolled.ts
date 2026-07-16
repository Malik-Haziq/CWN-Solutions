"use client";

import { useEffect, useState } from "react";

export function useScrolled(threshold = 80) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, [threshold]);

  return isScrolled;
}
