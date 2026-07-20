"use client";

import { useEffect, useState } from "react";

import type { Profile } from "@/types/profile";
import { getStudents } from "@/services/recruiter.services";

export function useStudents() {
  const [students, setStudents] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStudents() {
      try {
        const data = await getStudents();
        setStudents(data);
      } finally {
        setLoading(false);
      }
    }

    loadStudents();
  }, []);

  return {
    students,
    loading,
  };
}