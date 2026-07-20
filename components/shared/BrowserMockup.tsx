import { ReactNode } from "react";

interface BrowserMockupProps {
  children: ReactNode;
}

export default function BrowserMockup({
  children,
}: BrowserMockupProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.12)]">

      {/* Browser Top Bar */}
      <div className="flex items-center justify-between border-b bg-slate-50 px-5 py-3">

        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        <div className="rounded-full border bg-white px-5 py-1 text-sm text-slate-500">
          app.kredo.in/dashboard
        </div>

        <div className="w-14" />
      </div>

      {children}

    </div>
  );
}