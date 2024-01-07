import NextLink from "next/link";
import type { ComponentProps } from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NextLinkProps = ComponentProps<typeof NextLink>;
export type LinkProps = NextLinkProps & {
  external?: boolean;
  href: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  underline?: boolean;
  tabIndex?: number;
};

const Link = ({
  external,
  href,
  children,
  className,
  title,
  underline = false,
  tabIndex = 0,
  ...props
}: LinkProps) => {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonVariants({
          variant: "link",
          className: cn(
            `${
              underline
                ? "px-0 underline underline-offset-4 hover:text-accent/50"
                : "px-0 no-underline"
            }`,
            className
          ),
        })}
        title={title}
        tabIndex={tabIndex}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink
      href={href}
      title={title}
      className={buttonVariants({
        variant: "link",
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
