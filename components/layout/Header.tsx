"use client";

import Link from "next/link";
import Button from "../ui/Button";
import { useAuth } from "@/context/AuthProvider";

type HeaderProps = {
  fullName?: string;
};

export default function Header({
  fullName = "there",
}: HeaderProps) {
  const { profile } = useAuth();

  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-10 py-6">
  <div>
    <h1 className="text-4xl font-bold text-gray-900">
      Dashboard
    </h1>

    <p className="mt-2 text-gray-500">
      Good morning, {fullName} 👋
    </p>
  </div>

  <div className="flex items-center gap-4">
    

    <Link href="/dashboard/documents">
      <Button>Upload Docs</Button>
    </Link>

    <Link href={`/u/${profile?.username}`}>
      <Button variant="secondary">
        View Public Profile
      </Button>
    </Link>
  </div>
</header>
  )
}