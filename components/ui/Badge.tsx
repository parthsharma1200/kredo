interface BadgeProps {
  children: React.ReactNode;
  variant?:
    | "verified"
    | "pending"
    | "trust"
    | "category"
    | "default";
}

export default function Badge({
  children,
  variant = "default",
}: BadgeProps) {
  const variants = {
    verified:
      "bg-green-100 text-green-700",

    pending:
      "bg-yellow-100 text-yellow-700",

    trust:
      "bg-blue-100 text-blue-700",

    category:
      "bg-purple-100 text-purple-700",

    default:
      "bg-gray-100 text-gray-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${variants[variant]}`}
    >
      {children}
    </span>
  );
}