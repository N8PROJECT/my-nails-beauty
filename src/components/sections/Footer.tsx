import Image from "next/image";
import { MapPin, Clock, Phone } from "lucide-react";
import { LOGO_SRC, SITE_NAME } from "@/lib/constants";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full flex-col">
      {/* Upper Main Footer Bar (Deep Burgundy Background) */}
      <div className="w-full bg-[var(--color-burgundy,#842f40)] text-[var(--color-ivory,#fff9f6)] py-12 lg:py-16">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12 xl:px-20">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 items-start">
            {/* Column 1: Brand Logo */}
            <div className="flex items-center justify-start lg:col-span-3">
              <div className="relative size-24 sm:size-28 lg:size-32">
                <Image
                  src={LOGO_SRC}
                  alt={SITE_NAME}
                  fill
                  className="object-contain brightness-0 invert opacity-90"
                />
              </div>
            </div>

            {/* Column 2: Our Location */}
            <div className="flex flex-col gap-3 lg:col-span-3 border-t border-[var(--color-dusty-rose,#c98287)]/20 pt-6 sm:border-t-0 sm:pt-0 lg:border-l lg:border-[var(--color-dusty-rose,#c98287)]/20 lg:pl-8">
              <div className="flex items-center gap-2 text-[var(--color-blush,#f4dfdc)]">
                <MapPin className="size-4 shrink-0" strokeWidth={1.75} />
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em]">
                  Our Location
                </h3>
              </div>
              <address className="not-italic text-xs leading-relaxed text-[var(--color-ivory,#fff9f6)]/80 sm:text-sm">
                Bailey&apos;s Corner <br />
                182–200 City Walk, Tenancy 5 <br />
                Petrie Plaza, Canberra ACT 2601, Australia
              </address>
            </div>

            {/* Column 3: Opening Hours */}
            <div className="flex flex-col gap-3 lg:col-span-3 border-t border-[var(--color-dusty-rose,#c98287)]/20 pt-6 sm:border-t-0 sm:pt-0 lg:border-l lg:border-[var(--color-dusty-rose,#c98287)]/20 lg:pl-8">
              <div className="flex items-center gap-2 text-[var(--color-blush,#f4dfdc)]">
                <Clock className="size-4 shrink-0" strokeWidth={1.75} />
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em]">
                  Opening Hours
                </h3>
              </div>
              <div className="text-xs leading-relaxed text-[var(--color-ivory,#fff9f6)]/80 sm:text-sm space-y-1">
                <div className="flex justify-between gap-4">
                  <span>Mon – Thu</span>
                  <span>9:00 am – 6:00 pm</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Friday</span>
                  <span>9:00 am – 8:00 pm</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Saturday</span>
                  <span>9:00 am – 6:00 pm</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Sunday</span>
                  <span>10:00 am – 5:00 pm</span>
                </div>
              </div>
            </div>

            {/* Column 4: Contact, Socials & Booking CTA */}
            <div className="flex flex-col gap-6 lg:col-span-3 border-t border-[var(--color-dusty-rose,#c98287)]/20 pt-6 sm:border-t-0 sm:pt-0 lg:border-l lg:border-[var(--color-dusty-rose,#c98287)]/20 lg:pl-8">
              {/* Phone Contact */}
              <div className="flex flex-col gap-2">
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-blush,#f4dfdc)]">
                  Get In Touch
                </h3>
                <a
                  href="tel:+61468839327"
                  className="inline-flex items-center gap-2.5 text-xs text-[var(--color-ivory,#fff9f6)]/90 hover:text-[var(--color-blush,#f4dfdc)] transition-colors sm:text-sm"
                >
                  <Phone className="size-4 shrink-0" strokeWidth={1.75} />
                  <span>+61 468 839 327</span>
                </a>
              </div>

              {/* Social Icons & Booking Button Container */}
              <div className="flex flex-col gap-4">
                {/* Social Icons (Inline SVGs, inactive display elements) */}
                <div className="flex items-center gap-3">
                  {/* Instagram Icon */}
                  <span className="flex size-9 items-center justify-center rounded-full bg-[var(--color-ivory,#fff9f6)]/10 text-[var(--color-ivory,#fff9f6)]">
                    <svg
                      className="size-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </span>

                  {/* Facebook Icon */}
                  <span className="flex size-9 items-center justify-center rounded-full bg-[var(--color-ivory,#fff9f6)]/10 text-[var(--color-ivory,#fff9f6)]">
                    <svg
                      className="size-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </span>
                </div>

                {/* Booking CTA Button */}
                <div>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-blush,#f4dfdc)] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-burgundy,#842f40)] transition-all duration-200 hover:bg-[var(--color-ivory,#fff9f6)] shadow-sm"
                  >
                    <span>Book Appointment</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Sub-Footer Bar (Soft Blush Background) */}
      <div className="w-full bg-[var(--color-blush,#f4dfdc)]/50 py-5 text-[var(--color-charcoal,#382c2c)]/80 text-xs">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12 xl:px-20 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>© {currentYear} My Nails &amp; Beauty. All rights reserved.</p>
          <p className="font-heading text-sm italic text-[var(--color-burgundy,#842f40)]">
            Beauty in every detail.
          </p>
        </div>
      </div>
    </footer>
  );
}
