"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuth, UserRole } from "@/context/AuthProvider";

interface Props {
  allow: UserRole[];
  children: ReactNode;
}

export default function RoleGuard({
  allow,
  children,
}: Props) {
  const router = useRouter();

  const { role, loading } = useAuth();

  useEffect(() => {
    if (loading) return;

    // Not logged in
    if (!role) {
      router.replace("/login");
      return;
    }

    // Logged in but wrong role
    if (!allow.includes(role)) {
      switch (role) {
        case "student":
          router.replace("/dashboard");
          break;

        case "recruiter":
          router.replace("/recruiter");
          break;

        case "admin":
          router.replace("/admin/dashboard");
          break;

        default:
          router.replace("/login");
      }
    }
  }, [role, loading, allow, router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!role || !allow.includes(role)) {
    return null;
  }

  return <>{children}</>;
}