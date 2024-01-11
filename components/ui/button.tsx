import { ButtonHTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "w-full h-full rounded-md font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 duration-150",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground hover:bg-accent/90",
        primary: "bg-accent text-accent-foreground hover:bg-accent/90",
        secondary: "bg-accent text-accent-foreground hover:bg-accent/90",
        ghost: "",
        outline:
          "bg-transparent text-foreground border border-current hover:scale-110",
        accent: "bg-accent text-accent-foreground hover:bg-accent/80",
        link: "bg-transparent text-accent hover:text-accent/90",
      },
      size: {
        default: "w-max",
        full: "w-full rounded-md p-0",
        sm: "w-max rounded-md px-3 py-1.5",
        lg: "w-max rounded-md px-8 py-4",
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
