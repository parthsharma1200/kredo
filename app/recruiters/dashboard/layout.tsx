import { ReactNode } from "react";
import RecruiterSidebar from "@/components/recruiters/RecruiterSidebar";

export default function RecruiterDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <RecruiterSidebar />

      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}