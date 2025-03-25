import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent shadow text-white",
        secondary:
          "border-transparent dark:bg-red-900 dark:bg-sky-900 dark:bg-slate-900 dark:bg-green-900 dark:bg-indigo-900 dark:bg-teal-900 dark:bg-cyan-900 bg-red-500 bg-sky-500 bg-slate-500 bg-green-500 bg-indigo-500 bg-teal-500 bg-cyan-500",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
