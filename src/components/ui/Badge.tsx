interface BadgeProps {
  children: React.ReactNode;
  variant?: "amber" | "indigo" | "stone";
  className?: string;
}

const variants = {
  amber: "bg-amber-100 text-amber-800",
  indigo: "bg-indigo-100 text-indigo-700",
  stone: "bg-stone-100 text-stone-600",
};

export default function Badge({
  children,
  variant = "amber",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
