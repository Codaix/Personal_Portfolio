import * as React from "react";
import { cn } from "./index";

export const H1 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <h1 ref={ref} className={cn("scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl xl:text-7xl font-heading text-white", className)} {...props} />
));
H1.displayName = "H1";

export const H2 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <h2 ref={ref} className={cn("scroll-m-20 border-b border-gray-800 pb-2 text-4xl lg:text-5xl font-semibold tracking-tight first:mt-0 font-heading text-white", className)} {...props} />
));
H2.displayName = "H2";

export const H3 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn("scroll-m-20 text-2xl lg:text-3xl font-semibold tracking-tight font-heading text-gray-100", className)} {...props} />
));
H3.displayName = "H3";

export const P = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("leading-7 [&:not(:first-child)]:mt-6 text-gray-300 font-sans", className)} {...props} />
));
P.displayName = "P";

export const Code = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(({ className, ...props }, ref) => (
  <code ref={ref} className={cn("relative rounded bg-gray-800 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-neon-teal", className)} {...props} />
));
Code.displayName = "Code";
