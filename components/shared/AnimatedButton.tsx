import Link from "next/link";

type AnimatedButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function AnimatedButton({
  href,
  children,
  variant = "primary",
}: AnimatedButtonProps) {
  const styles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl",

    secondary:
      "border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 shadow-sm hover:shadow-md",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-2xl px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-1 ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}