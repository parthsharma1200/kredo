import { ReactNode } from "react";
import { createClient } from "@/lib/supabase/server";
import Header from "./Header";
import Sidebar from "./Sidebar";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let profile = null;

  if (user) {
    const { data } = await supabase
      .from("profiles")
      .select("full_name, username")
      .eq("id", user.id)
      .single();

    profile = data;

console.log("User ID:", user.id);
console.log("Profile:", profile);
  }

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header fullName={profile?.full_name} />

        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}