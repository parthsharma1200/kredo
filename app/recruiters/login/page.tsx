"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { createClient } from "@/lib/supabase/client";

import AuthCard from "@/components/auth/AuthCard";
import AuthInput from "@/components/auth/AuthInput";
import PasswordInput from "@/components/auth/PasswordInput";
import AuthDivider from "@/components/auth/AuthDivider";
import SocialLogin from "@/components/auth/SocialLogin";

export default function RecruiterLoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      toast.error("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password,
      });
      console.log("Login Result:", { data, error });

      if (error) {
        toast.error(error.message);
        return;
      }

      if (!data.user) {
        toast.error("Login failed.");
        return;
      }

      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", data.user.id)
        .single();

      if (profileError) {
        await supabase.auth.signOut();
        toast.error("Unable to verify your account.");
        return;
      }
console.log("Profile:", profile);
      if (profile.role !== "recruiter") {
        await supabase.auth.signOut();
        toast.error("This account is not registered as a recruiter.");
        return;
      }

      toast.success("Welcome back!");

      router.push("/recruiters/dashboard");
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 px-6">
      <AuthCard
        title="Recruiter Login"
        subtitle="Sign in to access your recruiter dashboard."
      >
        <form onSubmit={handleLogin} className="space-y-5">
          <AuthInput
            label="Work Email"
            type="email"
            placeholder="Enter your work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_0_25px_rgba(37,99,235,0.35)] hover:tracking-wide active:scale-[0.99] active:shadow-sm disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="h-5 w-5 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    className="opacity-25"
                  />
                  <path
                    d="M22 12A10 10 0 0012 2"
                    stroke="currentColor"
                    strokeWidth="4"
                    className="opacity-90"
                  />
                </svg>

                Signing In...
              </span>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <AuthDivider />

        <SocialLogin />

        <p className="mt-8 text-center text-sm text-gray-600">
          Don't have a recruiter account?{" "}
          <Link
            href="/recruiters/signup"
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            Sign Up
          </Link>
        </p>

        <p className="mt-3 text-center text-sm text-gray-500">
          Looking for a student login?{" "}
          <Link
            href="/login"
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            Student Login
          </Link>
        </p>
      </AuthCard>
    </main>
  );
}