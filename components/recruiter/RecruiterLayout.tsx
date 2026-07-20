"use client";

import type { ReactNode } from "react";

import RecruiterSidebar from "./RecruiterSidebar";

interface Props {
  children: ReactNode;
}

export default function RecruiterLayout({
  children,
}: Props) {
  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* Sidebar */}

      <RecruiterSidebar />

      {/* Main Content */}

      <main className="flex-1 overflow-y-auto">
        {children}
      </main>

    </div>
  );
}