"use client";

import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/recruiters"
          className="flex items-center gap-3"
        >
          <div className="rounded-xl bg-blue-600 p-2">
            <ShieldCheck className="h-6 w-6 text-white" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Kredo Hire
            </h1>

            <p className="-mt-1 text-xs text-slate-500">
              Recruiter Platform
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 text-sm font-medium text-slate-600 lg:flex">
          <a href="#platform" className="hover:text-blue-600">
            Platform
          </a>

          <a href="#features" className="hover:text-blue-600">
            Features
          </a>

          <a href="#pricing" className="hover:text-blue-600">
            Pricing
          </a>

          <a href="#resources" className="hover:text-blue-600">
            Resources
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link href="/recruiters/login">
            <Button variant="secondary">
              Login
            </Button>
          </Link>

          <Link href="/recruiters/signup">
            <Button>
              Start Hiring
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}