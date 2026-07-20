import { ShieldCheck, Sparkles } from "lucide-react";
import AnimatedButton from "../shared/AnimatedButton";
import Container from "../shared/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-slate-50">
      {/* Background Blur */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-300/20 blur-3xl" />

      {/* Decorative Blobs */}
      <div className="absolute -left-20 top-32 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />

      <Container>
        <div className="relative flex flex-col items-center py-28 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-2 shadow-sm">
            <Sparkles className="h-4 w-4 text-blue-600" />

            <span className="text-sm font-semibold text-blue-700">
              Trust is the New Resume
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-8 max-w-5xl text-6xl font-extrabold leading-tight tracking-tight text-gray-900 lg:text-7xl">
            Build a{" "}
            <span className="text-blue-600">
              Verified Student Profile
            </span>
            <br />
            Recruiters Can Trust.
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-600">
            Verify your education, internships, projects,
            achievements and skills in one trusted profile.
            <br />
            Earn an AI-powered Trust Score that helps recruiters
            hire with confidence.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <AnimatedButton href="/signup">
  Get Started →
</AnimatedButton>

            <AnimatedButton
  href="/login"
  variant="secondary"
>
              Watch Demo
            </AnimatedButton>
          </div>

          {/* Trust Indicators */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-green-500" />
              AI Verification
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-green-500" />
              Secure Credentials
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-green-500" />
              Recruiter Ready
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}