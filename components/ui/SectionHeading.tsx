import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={cn("max-w-2xl", alignment, className)}>
      {eyebrow && (
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#B97810]">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-3 text-3xl font-black tracking-tight text-[#071F5B] sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}