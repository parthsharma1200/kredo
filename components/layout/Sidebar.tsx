"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { useAuth } from "@/context/AuthProvider";
import { toast } from "sonner";
import {
  LayoutDashboard,
  FileText,
  BadgeCheck,
  Users,
  Star,
  Globe,
  Bell,
  Settings,
  User,
  Shield,
  LogOut,
} from "lucide-react";



const accountMenu = [
  {
    name: "Notifications",
    icon: Bell,
    href: "/dashboard/notifications",
  },
  {
    name: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
  {
    name: "My Profile",
    icon: User,
    href: "/dashboard/profile",
  },
];

export default function Sidebar() {
  const router = useRouter();
  const supabase = createClient();
  const { profile } = useAuth();
  const mainMenu = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    name: "Documents",
    icon: FileText,
    href: "/dashboard/documents",
  },
  {
    name: "Verification",
    icon: BadgeCheck,
    href: "/dashboard/verification",
  },
  {
    name: "Public Profile",
    icon: Globe,
    href: profile?.username
      ? `/u/${profile.username}`
      : "/dashboard",
  },
];

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      toast.error(error.message);
      return;
    }

    router.replace("/login");
  }
const pathname = usePathname();
  const initials =
    profile?.full_name
      ?.split(" ")
      .map((name) => name[0])
      .join("")
      .toUpperCase() || "?";

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-gray-200 bg-white">
      {/* Logo */}
      <div className="flex items-center gap-3 border-b p-6">
        <div className="rounded-xl bg-blue-600 p-2">
          <Shield className="h-5 w-5 text-white" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900">
          Kredo
        </h1>
      </div>

      {/* Main Menu */}
      <div className="px-4 pt-6">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Main
        </p>

        <nav className="space-y-2">
          {mainMenu.map((item) => {
            const Icon = item.icon;

            return (
              <button
  key={item.name}
  onClick={() => router.push(item.href)}
  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
    pathname === item.href
      ? "bg-blue-50 font-semibold text-blue-600"
      : "text-gray-600 hover:bg-gray-100"
  }`}
>
              
                <Icon className="h-5 w-5" />
                {item.name}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Account Menu */}
      <div className="mt-8 px-4">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Account
        </p>

        <nav className="space-y-2">
          {accountMenu.map((item) => {
  const Icon = item.icon;

  return (
    <button
      key={item.name}
      onClick={() => item.href && router.push(item.href)}
      className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
        pathname === item.href
          ? "bg-blue-50 font-semibold text-blue-600"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      <Icon className="h-5 w-5 flex-shrink-0" />

      <span>{item.name}</span>
    </button>
  );
})}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="mt-auto border-t p-5">
        <div className="flex items-center gap-3">
          {profile?.avatar_url ? (
            <img
              src={profile.avatar_url}
              alt={profile.full_name}
              className="h-11 w-11 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
              {initials}
            </div>
          )}

          <div>
            <h3 className="font-semibold text-gray-900">
              {profile?.full_name || "Loading..."}
            </h3>

            <p className="text-sm capitalize text-gray-500">
              {profile?.role || ""}
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 py-3 font-medium text-red-600 transition hover:bg-red-50"
        >
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </div>
    </aside>
  );
}