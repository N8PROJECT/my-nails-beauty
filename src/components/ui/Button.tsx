import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type ButtonSize = "sm" | "md";

interface ButtonProps extends Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "children"
> {
  href: string;
  size?: ButtonSize;
  uppercase?: boolean;
  withArrow?: boolean;
  children: ReactNode;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5",
  md: "px-7 py-3.5",
};

const isExternal = (href: string) => /^https?:\/\//.test(href);

export function Button({
  href,
  size = "md",
  uppercase = false,
  withArrow = false,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const external = isExternal(href);

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={[
        "group inline-flex items-center justify-center gap-2 rounded-full bg-burgundy text-ivory",
        "transition-colors duration-200 hover:bg-burgundy-dark motion-reduce:transition-none",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy",
        uppercase
          ? "text-[0.8125rem] font-semibold uppercase tracking-[0.06em]"
          : "text-sm font-medium tracking-wide sm:text-[0.9375rem]",
        sizeClasses[size],
        className,
      ].join(" ")}
      {...rest}
    >
      {children}
      {withArrow && (
        <ArrowRight
          aria-hidden="true"
          strokeWidth={1.75}
          className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
        />
      )}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
