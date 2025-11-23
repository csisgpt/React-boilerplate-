import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@app/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-secondary-strong)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // دکمهٔ اصلی (Primary)
        default:
          "bg-primary text-[color:var(--color-text-on-primary)] shadow-sm hover:bg-primary-hover",

        // حالت خطر / حذف / اکشن مخرب
        destructive:
          "bg-danger text-[color:var(--color-text-on-primary)] shadow-sm hover:bg-danger/90",

        // دکمهٔ Outline
        outline:
          "border border-[color:var(--color-neutral-border)] bg-base-soft/80 text-main shadow-sm hover:bg-base-soft hover:border-neutral-strong",

        // دکمهٔ Secondary (رنگ مکمل برند)
        secondary:
          "bg-secondary text-[color:var(--color-text-on-primary)] shadow-sm hover:bg-secondary-hover",

        // حالت Ghost (بدون بک‌گراند، فقط هوور ملایم)
        ghost:
          "bg-transparent text-main hover:bg-base-soft/80",

        // حالت لینک
        link:
          "text-[color:var(--color-primary-strong)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
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
