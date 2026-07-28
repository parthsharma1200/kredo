"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { createClient } from "@/lib/supabase/client";

import AuthCard from "@/components/auth/AuthCard";
import AuthDivider from "@/components/auth/AuthDivider";
import AuthInput from "@/components/auth/AuthInput";
import PasswordInput from "@/components/auth/PasswordInput";
import SocialLogin from "@/components/auth/SocialLogin";

export default function RecruiterSignupPage() {
  const router = useRouter();
  const supabase = createClient();

  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    if (
      !fullName.trim() ||
      !company.trim() ||
      !email.trim() ||
      !password.trim()
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (password.length < 7) {
      toast.error("Password must be at least 7 characters.");
      return;
    }

    try {
      setLoading(true);

      const { data, error } = await supabase.auth.signUp({
        email: email.trim().toLowerCase(),
        password,
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      if (!data.user) {
        toast.error("Failed to create account.");
        return;
      }

      const { error: profileError } = await supabase
        .from("profiles")
        .insert({
          id: data.user.id,
          full_name: fullName.trim(),
          email: email.trim().toLowerCase(),
          username: email.trim().split("@")[0],
          university: company.trim(),
          role: "recruiter",
          open_to_work: false,
        });

      if (profileError) {
        toast.error(profileError.message);
        return;
      }

      toast.success(
        "Recruiter account created successfully! Please verify your email before logging in."
      );

      router.push("/recruiters/login");
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 px-6">
      <AuthCard
        title="Recruiter Sign Up 🏢"
        subtitle="Create your recruiter account and start discovering trusted student talent."
      >
        <form onSubmit={handleSignup} className="space-y-5">
          <AuthInput
            label="Full Name"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <AuthInput
            label="Company Name"
            placeholder="Enter your company name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />

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

          <PasswordInput
            label="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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

                Creating Account...
              </span>
            ) : (
              "Create Recruiter Account"
            )}
          </button>
        </form>

        <AuthDivider />

        <SocialLogin />

        <p className="mt-8 text-center text-sm text-gray-600">
          Already have a recruiter account?{" "}
          <Link
            href="/recruiters/login"
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            Login
          </Link>
        </p>

        <p className="mt-3 text-center text-sm text-gray-500">
          Looking for a student account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            Student Sign Up
          </Link>
        </p>
      </AuthCard>
    </main>
  );
}