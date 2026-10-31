import { Star } from "lucide-react";

export function SocialProof() {
  return (
    <section
      aria-label="Client Trust and Reviews"
      className="relative w-full border-y border-[var(--color-blush,#f4dfdc)] bg-[var(--color-blush,#f4dfdc)]/30 py-6 sm:py-8 overflow-hidden"
    >
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12 xl:px-20">
        <div className="flex flex-col items-center justify-between gap-6 sm:gap-8 lg:flex-row lg:gap-12">
          {/* Column 1: Client Trust Statement */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-burgundy,#842f40)]">
              Loved by our clients
            </span>
            <p className="mt-1 font-heading text-lg font-medium italic text-[var(--color-charcoal,#382c2c)] sm:text-xl">
              Beautiful results. Every time.
            </p>
          </div>

          {/* Vertical Divider (Desktop) */}
          <div
            className="hidden h-10 w-px bg-[var(--color-dusty-rose,#c98287)]/40 lg:block"
            aria-hidden="true"
          />

          {/* Column 2: Google Reviews & Stars Visual */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-1.5 text-[var(--color-burgundy,#842f40)]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="size-4 fill-current sm:size-5"
                  strokeWidth={1.5}
                />
              ))}
            </div>
            <span className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-burgundy,#842f40)]/90">
              Google Reviews
            </span>
          </div>

          {/* Vertical Divider (Desktop) */}
          <div
            className="hidden h-10 w-px bg-[var(--color-dusty-rose,#c98287)]/40 lg:block"
            aria-hidden="true"
          />

          {/* Column 3: Rating & Reviews */}
          <div className="flex items-center justify-center gap-3">
            <div className="flex flex-col items-center text-center lg:items-end lg:text-right">
              <span className="font-heading text-2xl font-semibold leading-none text-[var(--color-burgundy,#842f40)] sm:text-3xl">
                4.9
              </span>
              <span className="mt-1 text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-[var(--color-charcoal,#382c2c)]/70">
                Reviews
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Floral/Botanical Flourish Accent (Right Side) */}
      <div
        className="absolute right-0 bottom-0 pointer-events-none hidden xl:block opacity-80"
        aria-hidden="true"
      >
        <svg
          width="180"
          height="60"
          viewBox="0 0 180 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M180 60C140 60 120 40 100 20C90 10 80 0 70 0C60 0 50 20 40 30C30 40 15 50 0 55"
            stroke="var(--color-dusty-rose)"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
          <path
            d="M160 60C130 50 110 35 95 15"
            stroke="var(--color-dusty-rose)"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          <path
            d="M145 35C148 30 155 25 160 25C160 30 155 38 145 35Z"
            fill="var(--color-dusty-rose)"
            fillOpacity="0.2"
          />
          <path
            d="M120 22C125 18 132 15 137 17C136 22 128 27 120 22Z"
            fill="var(--color-dusty-rose)"
            fillOpacity="0.2"
          />
        </svg>
      </div>
    </section>
  );
}
