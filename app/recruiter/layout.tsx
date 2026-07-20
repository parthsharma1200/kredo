import type { ReactNode } from "react";

import RoleGuard from "@/components/auth/RoleGuard";
import RecruiterLayout from "@/components/recruiter/RecruiterLayout";

interface Props {
  children: ReactNode;
}

export default function Layout({
  children,
}: Props) {
  return (
    <RoleGuard allow={["recruiter", "admin"]}>
      <RecruiterLayout>
        {children}
      </RecruiterLayout>
    </RoleGuard>
  );
}