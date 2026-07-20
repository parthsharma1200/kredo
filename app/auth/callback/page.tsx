"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthProvider";

export default function AuthCallbackPage() {
  const router = useRouter();

  const { user, role, loading } = useAuth();

  useEffect(() => {
    // Wait until AuthProvider finishes loading
    if (loading) return;

    // User is not logged in
    if (!user) {
      router.replace("/login");
      return;
    }

    // Wait until role has been loaded
    if (!role) return;

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
        break;
    }
  }, [loading, user, role, router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />

        <h1 className="mt-6 text-2xl font-semibold text-gray-900">
          Signing you in...
        </h1>

        <p className="mt-2 text-gray-500">
          Please wait while we prepare your dashboard.
        </p>
      </div>
    </main>
  );
}