"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { useState } from "react";
import { TealDot } from "@/components/ui/TealDot";
import { useScrolled } from "@/hooks/useScrolled";

const navLinks = [
  { label: "Services", href: "/services", anchor: "#services" },
  { label: "Work", href: "/work", anchor: "#work" },
  { label: "Industries", href: "/industries", anchor: "#industries" },
  { label: "Process", href: "/process", anchor: "#process" },
  { label: "Blog", href: "/blog", anchor: "#blog" },
];

function getNavHref(pathname: string, href: string, anchor: string) {
  return pathname === "/" ? anchor : href;
}

export function Nav() {
  const pathname = usePathname();
  const isScrolled = useScrolled(80);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 h-20 border-b transition-[background-color,border-color] duration-200 ease-in-out",
          isScrolled
            ? "border-border-subtle bg-bg-surface"
            : "border-transparent bg-transparent",
        )}
      >
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
        >
          <div className="flex flex-1 items-center">
            <Link
              href="/"
              aria-label="CWN Solutions home"
              className="inline-flex items-baseline gap-1 font-display text-xl font-semibold text-text-primary transition-colors duration-200"
            >
              <span>CWN Solutions</span>
              <TealDot className="translate-y-[-1px]" />
            </Link>
          </div>

          <div className="hidden flex-1 items-center justify-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={getNavHref(pathname, link.href, link.anchor)}
                className="bg-[linear-gradient(#3eb7bb,#3eb7bb)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-1 font-body text-sm font-medium text-text-secondary transition-[background-size,color] duration-200 ease-in-out hover:bg-[length:100%_1px] hover:text-text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-1 items-center justify-end">
            <Link
              href={pathname === "/" ? "#contact" : "/contact"}
              className="btn-ghost hidden hover:border-accent hover:bg-accent hover:text-text-inverse md:inline-flex"
            >
              Book a Call
            </Link>

            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center text-text-primary transition-colors duration-200 hover:text-accent md:hidden"
            >
              <Menu size={24} strokeWidth={1.75} />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={clsx(
          "fixed inset-0 z-[60] bg-bg-surface transition-opacity duration-200 ease-in-out md:hidden",
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        aria-hidden={!isMenuOpen}
      >
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={closeMenu}
          className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center text-text-primary transition-colors duration-200 hover:text-accent"
        >
          <X size={26} strokeWidth={1.75} />
        </button>

        <nav
          aria-label="Mobile navigation"
          className="flex min-h-dvh flex-col items-center justify-center gap-8 px-8 text-center"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={getNavHref(pathname, link.href, link.anchor)}
              onClick={closeMenu}
              className="font-display text-4xl font-semibold text-text-primary transition-colors duration-200 hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
