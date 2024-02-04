import { ButtonHTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "transition-all text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 duration-150",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground hover:bg-accent/90",
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        outline:
          "border border-foreground/50 bg-background text-foreground hover:bg-accent hover:!text-accent-foreground rounded hover:border-transparent",
        accent: "bg-accent text-accent-foreground hover:bg-accent/80",
        link: "!p-0 bg-transparent text-accent hover:text-accent/90",
      },
      size: {
        default: "w-max min-h-8 px-3 py-1.5",
        full: "w-full min-h-10 rounded-full",
        sm: "w-max px-3 py-1.5",
        lg: "w-max px-6 py-3",
        icon: "w-10 h-10 flex items-center justify-around text-center",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
