import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import DashboardPreview from "../components/landing/DashboardPreview";
import TrustedBy from "../components/landing/TrustedBy";
import HowItWorks from "../components/landing/HowItWorks";
import Features from "../components/landing/Features";
import TrustScoreDemo from "../components/landing/TrustScoreDemo";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <DashboardPreview />
      <TrustedBy />
      <HowItWorks />
      <Features />
      <TrustScoreDemo />
    </>
  );
}