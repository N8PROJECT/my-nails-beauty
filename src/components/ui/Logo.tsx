import Image from "next/image";
import Link from "next/link";
import { LOGO_SRC, SITE_NAME } from "@/lib/constants";

interface LogoProps {
  /** Tailwind height/width classes that size the logo box. */
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${SITE_NAME} home`}
      className={`relative block shrink-0 transition-[height,width] duration-300 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burgundy ${className}`}
    >
      <Image
        src={LOGO_SRC}
        alt={SITE_NAME}
        fill
        priority
        sizes="(min-width: 1280px) 160px, (min-width: 1024px) 128px, 64px"
        className="object-contain object-left"
      />
    </Link>
  );
}
