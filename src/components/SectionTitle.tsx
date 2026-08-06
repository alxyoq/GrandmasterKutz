import { cn } from "@/lib/utils";

interface Props {
  children: string;
  className?: string;
  variant?: "light" | "paper";
  size?: "md" | "lg";
}

export function SectionTitle({
  children,
  className,
  variant = "light",
  size = "lg",
}: Props) {
  return (
    <h2
      className={cn(
        "comic-title uppercase",
        variant === "paper" && "comic-title--ink",
        size === "lg"
          ? "text-[clamp(2.6rem,7vw,5.2rem)]"
          : "text-[clamp(2rem,5vw,3.4rem)]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

