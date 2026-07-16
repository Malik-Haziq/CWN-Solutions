"use client";

import { useEffect, useState } from "react";

const darkSectionSelector = '[data-nav-theme="dark"]';

export function useNavTheme(pathname: string, navHeight = 80) {
  const [isDarkSection, setIsDarkSection] = useState(() => pathname === "/");

  useEffect(() => {
    let frameId: number | undefined;

    const updateTheme = () => {
      frameId = undefined;
      const isDark = Array.from(
        document.querySelectorAll<HTMLElement>(darkSectionSelector),
      ).some((section) => {
        const { bottom, top } = section.getBoundingClientRect();
        return top <= navHeight && bottom > navHeight;
      });

      setIsDarkSection(isDark);
    };

    const scheduleThemeUpdate = () => {
      if (frameId === undefined)
        frameId = window.requestAnimationFrame(updateTheme);
    };

    updateTheme();
    window.addEventListener("scroll", scheduleThemeUpdate, { passive: true });
    window.addEventListener("resize", scheduleThemeUpdate);

    return () => {
      if (frameId !== undefined) window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", scheduleThemeUpdate);
      window.removeEventListener("resize", scheduleThemeUpdate);
    };
  }, [navHeight, pathname]);

  return isDarkSection;
}
