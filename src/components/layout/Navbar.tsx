"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { BOOKING_URL, NAV_LINKS } from "@/lib/constants";

const MENU_ID = "mobile-menu";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>(NAV_LINKS[0].href);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Transparent over the hero; solid + compact once the page scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link whose section is crossing the middle of the viewport.
  // Sections that don't exist yet are simply skipped.
  useEffect(() => {
    const targets = NAV_LINKS.map((link) =>
      document.querySelector<HTMLElement>(link.href),
    ).filter((el): el is HTMLElement => el !== null);
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  // While the mobile menu is open: Escape, outside click and
  // growing to desktop width all close it.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onBreakpoint = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <MotionConfig reducedMotion="user">
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 motion-reduce:transition-none ${
          solid
            ? "border-blush bg-ivory/90 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        {/* Full-width container with generous edge padding to push logo left and button right */}
        <div
          className={`w-full flex items-center justify-between gap-6 px-5 transition-[height] duration-300 motion-reduce:transition-none sm:px-8 lg:px-12 xl:px-16 ${
            scrolled ? "h-16 lg:h-20" : "h-[4.5rem] lg:h-28"
          }`}
        >
          <Logo
            className={
              scrolled
                ? "h-11 w-12 lg:h-14 lg:w-16"
                : "h-14 w-16 lg:mt-5 lg:h-28 lg:w-32 lg:self-start xl:h-36 xl:w-40"
            }
          />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-10 xl:gap-12">
              {NAV_LINKS.map((link) => {
                const isActive = active === link.href;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      aria-current={isActive ? "location" : undefined}
                      className={`group relative inline-block py-2 text-[0.9375rem] font-semibold uppercase tracking-[0.12em] transition-colors duration-200 hover:text-burgundy focus-visible:text-burgundy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burgundy motion-reduce:transition-none ${
                        isActive ? "text-burgundy" : "text-burgundy-dark"
                      }`}
                    >
                      {link.label}
                      <span
                        aria-hidden="true"
                        className={`absolute -inset-x-2.5 -bottom-1 h-0.5 origin-left bg-burgundy transition-transform duration-300 motion-reduce:transition-none ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100"
                        }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden lg:block">
              <Button href={BOOKING_URL} size="md" uppercase withArrow>
                Book Appointment
              </Button>
            </div>
            <div className="hidden sm:block lg:hidden">
              <Button href={BOOKING_URL} size="sm" uppercase withArrow>
                Book Appointment
              </Button>
            </div>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls={MENU_ID}
              aria-label={open ? "Close menu" : "Open menu"}
              className="-mr-2 inline-flex size-11 shrink-0 items-center justify-center text-burgundy-dark transition-colors duration-200 hover:text-burgundy focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-burgundy motion-reduce:transition-none lg:hidden"
            >
              {open ? (
                <X className="size-6" aria-hidden="true" strokeWidth={1.5} />
              ) : (
                <Menu className="size-6" aria-hidden="true" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              id={MENU_ID}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="absolute inset-x-0 top-full border-b border-blush bg-ivory lg:hidden"
            >
              <nav
                aria-label="Mobile"
                className="mx-auto max-w-[90rem] px-5 pb-8 pt-2 sm:px-8"
              >
                <ul>
                  {NAV_LINKS.map((link) => {
                    const isActive = active === link.href;
                    return (
                      <li key={link.href} className="border-b border-blush">
                        <a
                          href={link.href}
                          onClick={() => setOpen(false)}
                          aria-current={isActive ? "location" : undefined}
                          className={`block py-4 text-sm font-medium uppercase tracking-[0.14em] transition-colors duration-200 hover:text-burgundy focus-visible:text-burgundy focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-burgundy motion-reduce:transition-none ${
                            isActive ? "text-burgundy" : "text-burgundy-dark"
                          }`}
                        >
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-8 sm:hidden">
                  <Button
                    href={BOOKING_URL}
                    uppercase
                    withArrow
                    onClick={() => setOpen(false)}
                    className="w-full"
                  >
                    Book Appointment
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </MotionConfig>
  );
}
