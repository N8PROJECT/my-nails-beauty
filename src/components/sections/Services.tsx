"use client";

import { useState } from "react";
import Image from "next/image";
import { SALON_SERVICES } from "@/lib/constants";

export function Services() {
  const [activeCategory, setActiveCategory] = useState<"nails" | "beauty">(
    "nails",
  );

  const activeGroup = SALON_SERVICES.find((cat) => cat.id === activeCategory);

  return (
    <section
      id="services"
      aria-label="Our Salon Services"
      className="w-full bg-[var(--color-ivory,#fff9f6)] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12 xl:px-20">
        {/* Header Block */}
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow / Kicker with flanking lines */}
          <div className="flex items-center gap-3">
            <span
              className="h-px w-12 bg-[var(--color-dusty-rose,#c98287)]/40"
              aria-hidden="true"
            />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-burgundy,#842f40)] sm:text-sm">
              Our Services
            </span>
            <span
              className="h-px w-12 bg-[var(--color-dusty-rose,#c98287)]/40"
              aria-hidden="true"
            />
          </div>

          {/* Main Title */}
          <h2 className="mt-3 font-heading text-3xl font-normal tracking-tight text-[var(--color-burgundy,#842f40)] sm:text-5xl lg:text-5xl">
            Our <span className="italic">Beauty</span> Services
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-lg text-sm text-[var(--color-charcoal,#382c2c)] sm:text-base">
            From nails to skincare, we&apos;ve got you covered.
          </p>

          {/* Category Switcher Tabs */}
          <div
            role="tablist"
            aria-label="Service categories"
            className="mt-8 flex items-center justify-center gap-2 rounded-full bg-[var(--color-blush,#f4dfdc)]/40 p-1.5 border border-[var(--color-blush,#f4dfdc)]"
          >
            {SALON_SERVICES.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${category.id}`}
                  id={`tab-${category.id}`}
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-full px-6 py-2 text-xs font-medium tracking-[0.1em] uppercase transition-all duration-200 sm:text-sm ${
                    isActive
                      ? "bg-[var(--color-burgundy,#842f40)] text-[var(--color-ivory,#fff9f6)] shadow-sm"
                      : "text-[var(--color-charcoal,#382c2c)]/80 hover:text-[var(--color-burgundy,#842f40)]"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 6-Card Horizontal Desktop Grid (Matching Reference Mockup Layout) */}
        <div
          id={`panel-${activeCategory}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory}`}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4 xl:gap-5"
        >
          {activeGroup?.services.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-[#FDF5F3] p-2.5 transition-all duration-300 hover:shadow-md border border-[var(--color-blush,#f4dfdc)]/50"
            >
              {/* Image Container with Rounded Corners inside Card */}
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[var(--color-blush,#f4dfdc)]/40">
                <Image
                  src={service.imagePath}
                  alt={`${service.name} service`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Footer Text */}
              <div className="flex flex-col items-center justify-center px-2 py-4 text-center">
                <h3 className="font-heading text-base font-semibold text-[var(--color-burgundy,#842f40)] sm:text-lg">
                  {service.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Outlined Pill CTA Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-burgundy,#842f40)] px-7 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-burgundy,#842f40)] transition-all duration-200 hover:bg-[var(--color-burgundy,#842f40)] hover:text-[var(--color-ivory,#fff9f6)]"
          >
            <span>View Full Menu</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
