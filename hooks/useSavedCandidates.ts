"use client";

import { useCallback, useEffect, useState } from "react";

import {
  getSavedCandidates,
} from "@/services/recruiter.services";

export function useSavedCandidates() {
  const [saved, setSaved] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  const refresh = useCallback(async () => {
    try {
      const data =
        await getSavedCandidates();

      setSaved(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return {
    saved,
    loading,
    refresh,
  };
}