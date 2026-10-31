import type { NavLink } from "@/types/navigation";

export const SITE_NAME = "My Nails & Beauty";

export const LOGO_SRC = "/images/logo.png";

/**
 * PLACEHOLDER: replace with the salon's real Fresha booking page URL.
 * Every "Book Appointment" button reads from this one constant.
 */
export const BOOKING_URL = "https://www.fresha.com/";

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
];

export interface ServiceItem {
  id: string;
  name: string;
  imagePath: string;
}

export interface ServiceCategory {
  id: "nails" | "beauty";
  label: string;
  services: ServiceItem[];
}

export const SALON_SERVICES: ServiceCategory[] = [
  {
    id: "nails",
    label: "Nail Services",
    services: [
      {
        id: "acrylic",
        name: "Acrylic",
        imagePath: "/images/services/acrylic.png",
      },
      {
        id: "biab",
        name: "BIAB",
        imagePath: "/images/services/biab.png",
      },
      {
        id: "builder-gel",
        name: "Builder Gel",
        imagePath: "/images/services/builder-gel.png",
      },
      {
        id: "sns",
        name: "SNS",
        imagePath: "/images/services/sns.png",
      },
      {
        id: "pedi-mani",
        name: "Manicure & Pedicure",
        imagePath: "/images/services/pedi-mani.png",
      },
      {
        id: "nail-art",
        name: "Nail Art",
        imagePath: "/images/services/nail-art.png",
      },
    ],
  },
  {
    id: "beauty",
    label: "Beauty Services",
    services: [
      {
        id: "waxing",
        name: "Waxing",
        imagePath: "/images/services/waxing.png",
      },
      {
        id: "eyelash-extensions",
        name: "Eyelash Extensions",
        imagePath: "/images/services/eyelash-extensions.png",
      },
      {
        id: "lash-lift",
        name: "Lash Lift",
        imagePath: "/images/services/lash-lift.png",
      },
      {
        id: "brow-lamination",
        name: "Eyebrow Lamination",
        imagePath: "/images/services/brow-lamination.png",
      },
      {
        id: "facial",
        name: "Facial",
        imagePath: "/images/services/facial.png",
      },
      {
        id: "massage",
        name: "Massage",
        imagePath: "/images/services/massage.png",
      },
    ],
  },
];
