"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { toast } from "sonner";
import AuthCard from "@/components/auth/AuthCard";
import AuthInput from "@/components/auth/AuthInput";
import PasswordInput from "@/components/auth/PasswordInput";
import AuthDivider from "@/components/auth/AuthDivider";
import SocialLogin from "@/components/auth/SocialLogin";

export default function LoginPage() {
  const router = useRouter();
const supabase = createClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message);
      return;
    }
toast.success("Welcome back!");
    // Don't redirect based on role here.
    // Let the callback page handle it.
    router.replace("/auth/callback");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 px-6">
     <div className="absolute left-8 top-8">
  <Link href="/" className="flex items-center gap-3">
    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-lg font-black text-white shadow-lg">
      K
    </div>

    <div>
      <p className="text-xl font-black text-slate-900">
        KREDO
      </p>

      <p className="text-xs text-slate-500">
        Trust is the New Resume
      </p>
    </div>
  </Link>
</div>
 <AuthCard
        title="Welcome Back 👋"
        subtitle="Login to continue to your Kredo dashboard."
      >
        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >
          autoFocus
          <AuthInput
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                className="rounded border-gray-300"
              />
              Remember me
            </label>

            <Link
              href="/forgot-password"
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
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

    Logging in...
  </span>
) : (
  "Login"
)}
          </button>
        </form>

        <AuthDivider />

        <SocialLogin />

        <p className="mt-8 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            Create Account
          </Link>
        </p>
      </AuthCard>
    </main>
  );
}