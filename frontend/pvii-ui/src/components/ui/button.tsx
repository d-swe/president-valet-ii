import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-button text-white hover:bg-white hover:border-[3px] hover:border-maintext hover:text-background",
        ghost: "hover:text-background hover:text-accent-foreground",
        none: "hover:none",
        link: "text-primary underline-offset-4 hover:underline",
        icon: "bg-transparent border-2 border-button rounded-3xl flex items-center ",
        border: "bg-transparent text-white hover:bg-white hover:border-maintext hover:text-background border-[3px] border-button",
      },
      size: {
        default: "h-[50px] w-[190px] text-[22px] rounded-3xl",
        sm: "h-[40px] w-[150px] text-lg rounded-2xl",
        med: "h-[50px] sm:h-[40px] w-[170px] sm:w-[150] text-[17px] sm:text-lg rounded-2xl",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
