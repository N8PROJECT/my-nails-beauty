import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      aria-label="About My Nails & Beauty"
      className="relative w-full overflow-hidden bg-[#FAF0ED]"
    >
      <div className="w-full">
        <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
          {/* Left Column: Edge-to-Edge Salon Photo with Soft Right Fade */}
          <div className="relative min-h-[380px] w-full sm:min-h-[460px] lg:col-span-6 lg:min-h-[580px]">
            <Image
              src="/images/about-salon.png"
              alt="My Nails & Beauty salon interior in Petrie Plaza, Canberra"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />

            {/* Soft Gradient Overlay fading into background */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#FAF0ED] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#FAF0ED]/30 lg:to-[#FAF0ED] pointer-events-none"
              aria-hidden="true"
            />
          </div>

          {/* Right Column: Content Block */}
          <div className="relative flex flex-col justify-center px-6 py-12 sm:px-12 lg:col-span-6 lg:px-16 xl:px-24 lg:py-20 bg-[#FAF0ED]">
            {/* Top-Right Decorative Botanical Accent */}
            <div
              className="absolute right-0 top-0 pointer-events-none hidden sm:block opacity-60"
              aria-hidden="true"
            >
              <svg
                width="200"
                height="220"
                viewBox="0 0 200 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M200 0C140 30 100 80 90 140C85 165 80 220 80 220"
                  stroke="var(--color-dusty-rose,#c98287)"
                  strokeWidth="1.2"
                  strokeOpacity="0.35"
                />
                <path
                  d="M200 50C150 70 120 110 110 160"
                  stroke="var(--color-dusty-rose,#c98287)"
                  strokeWidth="1"
                  strokeOpacity="0.25"
                />
                <path
                  d="M165 30C175 18 192 12 200 15C198 28 185 40 165 30Z"
                  fill="var(--color-dusty-rose,#c98287)"
                  fillOpacity="0.25"
                />
                <path
                  d="M135 65C148 55 165 50 174 55C170 68 154 78 135 65Z"
                  fill="var(--color-dusty-rose,#c98287)"
                  fillOpacity="0.22"
                />
                <path
                  d="M110 110C123 100 140 98 148 103C142 116 126 124 110 110Z"
                  fill="var(--color-dusty-rose,#c98287)"
                  fillOpacity="0.2"
                />
              </svg>
            </div>

            {/* Content Container */}
            <div className="max-w-xl">
              {/* Eyebrow / Kicker */}
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-burgundy,#842f40)] sm:text-sm">
                About My Nails &amp; Beauty
              </span>

              {/* Main Headline */}
              <h2 className="mt-3 font-heading text-3xl font-normal leading-[1.12] tracking-tight text-[var(--color-burgundy,#842f40)] sm:text-4xl lg:text-5xl">
                A Place to Relax <br className="hidden sm:inline" />
                and Feel <span className="italic">Beautiful.</span>
              </h2>

              {/* Body Paragraph */}
              <p className="mt-5 text-sm leading-relaxed text-[var(--color-charcoal,#382c2c)] sm:text-base lg:text-lg">
                At My Nails &amp; Beauty, we believe self-care is essential. Our
                modern and welcoming salon in Petrie Plaza offers a full range
                of nail and beauty treatments, delivered with care and attention
                to detail.
              </p>

              {/* Action Button linking to #team */}
              <div className="mt-8">
                <a
                  href="#team"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-burgundy,#842f40)] px-7 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-ivory,#fff9f6)] shadow-sm transition-all duration-200 hover:opacity-95 hover:shadow-md"
                >
                  <span>Get to Know Us</span>
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
