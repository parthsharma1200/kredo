import Navbar from "@/components/recruiters/landing/Navbar";
import Hero from "@/components/recruiters/landing/Hero";
import Stats from "@/components/recruiters/landing/Stats";
import TrustedBy from "@/components/recruiters/landing/TrustedBy";
import Features from "@/components/recruiters/landing/Features";
import HowItWorks from "@/components/recruiters/landing/HowItWorks";
import CandidateShowcase from "@/components/recruiters/landing/CandidateShowcase";
import Testimonials from "@/components/recruiters/landing/Testimonials";
import CTA from "@/components/recruiters/landing/CTA";
import Footer from "@/components/recruiters/landing/Footer";

export default function RecruiterHomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <TrustedBy />
        <Features />
        <HowItWorks />
        <CandidateShowcase />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
