import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { BOOKING_URL } from "@/lib/constants";
import { MapPin } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[var(--color-blush,#f4dfdc)] pt-24 sm:pt-28 lg:pt-32 flex items-center"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-nails.png"
          alt="Luxury glossy manicure with gold details and soft silk drapery at My Nails & Beauty Canberra"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Soft blush-pink to ivory gradient fade originating from the left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/90 sm:via-ivory/80 lg:via-ivory/70 via-40% lg:via-50% to-transparent pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[90rem] px-5 sm:px-8 lg:px-12 xl:px-20 py-12 lg:py-20">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Eyebrow / Kicker */}
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-burgundy sm:text-sm">
            My Nails &amp; Beauty
          </span>

          {/* Main Headline */}
          <h1 className="mt-4 font-heading text-4xl font-normal leading-[1.08] tracking-tight text-burgundy sm:text-6xl lg:text-[4.25rem]">
            Your Beauty, <br />
            Our <span className="italic">Passion</span>.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-lg text-base leading-relaxed text-charcoal sm:text-lg lg:text-xl">
            Premium nail and beauty services in Canberra.
          </p>

          {/* Call to Action */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button href={BOOKING_URL} size="md" uppercase withArrow>
              Book Appointment
            </Button>
          </div>

          {/* Location Indicator */}
          <div className="mt-12 sm:mt-16 flex items-center gap-3 text-xs sm:text-sm font-medium tracking-[0.1em] uppercase text-burgundy/90">
            <span className="h-px w-8 bg-dusty-rose" aria-hidden="true" />
            <div className="flex items-center gap-1.5">
              <MapPin
                className="size-4 text-burgundy shrink-0"
                strokeWidth={1.75}
              />
              <span>Canberra, Australia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
