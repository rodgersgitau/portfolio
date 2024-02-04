import NextLink from "next/link";
import type { AnchorHTMLAttributes, ComponentProps, ReactNode } from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";

type NextLinkProps = ComponentProps<typeof NextLink>;
export interface LinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  external?: boolean;
  href: string;
  underline?: boolean;
  tabIndex?: number;
}

const Link = ({
  external,
  className,
  children,
  tabIndex = 0,
  underline = false,
  variant = "link",
  ...props
}: LinkProps) => {
  if (external) {
    return (
      <a
        {...props}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonVariants({
          variant,
          className: cn(
            `${
              underline
                ? "px-0 underline underline-offset-4 hover:text-accent/50"
                : "px-0 no-underline"
            }`,
            className
          ),
        })}
        tabIndex={tabIndex}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink
      {...props}
      className={buttonVariants({
        variant,
        className: cn(
          `${
            underline
              ? "px-0 underline underline-offset-4 hover:text-accent/50"
              : "px-0 no-underline"
          }`,
          className
        ),
      })}
      {...props}
      tabIndex={tabIndex}
    >
      {children}
    </NextLink>
  );
};

export default Link;
