import Link from "next/link";
import { Shield } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-slate-200/70 bg-white/80 px-6 py-4 shadow-lg shadow-slate-200/30 backdrop-blur-xl">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="rounded-xl bg-blue-600 p-2">
            <Shield className="h-5 w-5 text-white" />
          </div>

          <span className="text-2xl font-bold tracking-tight text-slate-900">
            Kredo
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {[
            ["Home", "/"],
            ["Features", "#features"],
            ["How It Works", "#how-it-works"],
            ["Trust Score", "#trust-score"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="font-medium text-slate-600 transition-colors duration-200 hover:text-blue-600"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-xl px-4 py-2 font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/30"
          >
            Get Started
          </Link>
        </div>

      </div>
    </header>
  );
}