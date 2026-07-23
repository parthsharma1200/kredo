"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { createClient } from "@/lib/supabase/client";

import AuthCard from "@/components/auth/AuthCard";
import AuthInput from "@/components/auth/AuthInput";
import PasswordInput from "@/components/auth/PasswordInput";
import AuthDivider from "@/components/auth/AuthDivider";
import SocialLogin from "@/components/auth/SocialLogin";

export default function SignupPage() {
  const router = useRouter();
const supabase = createClient();
const [fullName, setFullName] = useState("");
const [username, setUsername] = useState("");
const [university, setUniversity] = useState("");
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
  !username.trim() ||
  !university.trim() ||
  !email.trim() ||
  !password.trim()
) {
  toast.error("Please fill in all required fields.");
  return;
}

if (password.length <7) {
  toast.error("Password must be at least 7 characters.");
  return;
}

  setLoading(true);

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  console.log({ data, error });
  setLoading(false);
  if (error) {
  toast.error(error.message);
  return;
}
const { error: profileError } = await supabase
  .from("profiles")
  .insert({
  id: data.user?.id,
  full_name: fullName,
  username,
  email,
  university,
  degree: "",
  location: "",
  trust_score: 0,
})
  if (profileError) {
  toast.error(profileError.message);
  return;
}
toast.success(
  "Account created successfully! Please check your email to verify your account."
);
router.push("/login");
}

return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 px-6">
      <AuthCard
        title="Create Your Account 🚀"
        subtitle="Start building your verified student profile."
      >
        <form
  onSubmit={handleSignup}
  className="space-y-5"
>

          <AuthInput
  label="Full Name"
  placeholder="Enter your full name"
  value={fullName}
  onChange={(e) => setFullName(e.target.value)}
/>
<AuthInput
  label="Username"
  placeholder="Choose a unique username"
  value={username}
  onChange={(e) => setUsername(e.target.value.toLowerCase())}
/>
         <AuthInput
  label="College / University"
  placeholder="Enter your college"
  value={university}
  onChange={(e) => setUniversity(e.target.value)}
/>

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

         <PasswordInput
  label="Confirm Password"
  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
/>

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
        d="M22 12A10 0 0012 2"
        stroke="currentColor"
        strokeWidth="4"
        className="opacity-90"
      />
    </svg>

    Creating Account...
  </span>
) : (
  "Create Account"
)}
          </button>

        </form>

        <AuthDivider />

        <SocialLogin />

        <p className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            Login
          </Link>
        </p>
      </AuthCard>
    </main>
  );
}