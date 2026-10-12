import { cn } from "@/lib/utils";

interface MaskedHeadingProps extends React.HTMLAttributes<HTMLElement> {
  as?: "h1" | "h2" | "p";
}

export function MaskedHeading({ as: Tag = "h1", className, children, ...props }: MaskedHeadingProps) {
  return (
    <Tag
      {...props}
      className={cn(
        "text-center text-3xl sm:text-4xl md:text-5xl md:leading-[1.125] lg:text-6xl lg:leading-[1.125] tracking-tighter font-medium bg-[radial-gradient(circle_farthest-corner_at_50%_50%,_rgba(255,255,255,1),_rgba(255,255,255,0.25))] bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </Tag>
  );
}
