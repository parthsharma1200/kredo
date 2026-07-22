"use client";
import LogoutButton from "@/components/auth/LogoutButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Users,
  Heart,
  BarChart3,
  Settings,
  Shield,
} from "lucide-react";

const menu = [
  {
    name: "Dashboard",
    href: "/recruiter",
    icon: LayoutDashboard,
  },
  {
    name: "Candidates",
    href: "/recruiter",
    icon: Users,
  },
  {
    name: "Saved Candidates",
    href: "/recruiter/saved",
    icon: Heart,
  },
  {
    name: "Analytics",
    href: "/recruiter/analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    href: "/recruiter/settings",
    icon: Settings,
  },
];

export default function RecruiterSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-gray-200 bg-white">

      {/* Logo */}

      <div className="flex items-center gap-3 border-b p-6">

        <div className="rounded-xl bg-blue-600 p-2">
          <Shield className="h-6 w-6 text-white" />
        </div>

        <div>
          <h1 className="text-2xl font-black text-gray-900">
            Kredo
          </h1>

          <p className="text-sm text-gray-500">
            Recruiter Portal
          </p>
        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-2 p-5">

        {menu.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href ||
            (item.href !== "/recruiter" &&
              pathname.startsWith(item.href));

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 rounded-2xl px-5 py-3 transition ${
                active
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Icon className="h-5 w-5" />

              <span className="font-medium">
                {item.name}
              </span>
            </Link>
          );
        })}

      </nav>

      {/* Recruiter */}

<div className="border-t p-5">
  <div className="flex items-center gap-3">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
      R
    </div>

    <div>
      <h3 className="font-semibold text-gray-900">
        Recruiter
      </h3>

      <p className="text-sm text-gray-500">
        recruiter.kredo@gmail.com
      </p>
    </div>
  </div>

  <div className="mt-5">
    <LogoutButton />
  </div>
</div>

    </aside>
  );
}