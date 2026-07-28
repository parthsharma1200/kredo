import Link from "next/link";
import {
  ShieldCheck,
  Globe,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const productLinks = [
  "Features",
  "Trust Score",
  "Candidate Search",
  "Analytics",
];

const companyLinks = [
  "About",
  "Careers",
  "Contact",
  "Blog",
];

const resourceLinks = [
  "Privacy Policy",
  "Terms of Service",
  "Help Center",
  "Documentation",
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-16 lg:grid-cols-5">

          <div className="lg:col-span-2">

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                <ShieldCheck className="h-6 w-6 text-white" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  Kredo Hire
                </h2>

                <p className="text-sm text-slate-400">
                  Trust is the New Resume.
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md leading-7 text-slate-400">
              Kredo Hire enables recruiters to discover verified student
              profiles backed by trusted academic records, verified
              achievements and transparent Trust Scores.
            </p>

            <div className="mt-8 flex gap-4">
  <Link
    href="#"
    className="rounded-xl bg-slate-900 p-3 transition hover:bg-blue-600"
  >
    <Globe className="h-5 w-5" />
  </Link>

  <Link
    href="#"
    className="rounded-xl bg-slate-900 p-3 transition hover:bg-blue-600"
  >
    <Mail className="h-5 w-5" />
  </Link>

  <Link
    href="#"
    className="rounded-xl bg-slate-900 p-3 transition hover:bg-blue-600"
  >
    <ArrowUpRight className="h-5 w-5" />
  </Link>
</div>

          </div>

          <div>
            <h3 className="font-semibold text-white">
              Product
            </h3>

            <div className="mt-6 space-y-4">
              {productLinks.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block transition hover:text-white"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Company
            </h3>

            <div className="mt-6 space-y-4">
              {companyLinks.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block transition hover:text-white"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Resources
            </h3>

            <div className="mt-6 space-y-4">
              {resourceLinks.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block transition hover:text-white"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Kredo Hire. All rights reserved.
          </p>

          <p>
            Built with trust for the future of hiring.
          </p>

        </div>

      </div>
    </footer>
  );
}