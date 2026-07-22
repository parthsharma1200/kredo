"use client";

import { useEffect, useState } from "react";
import { getAdminStats } from "@/services/admin.services";

interface AdminStats {
  pending: number;
  verifiedToday: number;
  rejected: number;
  reviewed: number;
}

export function useAdminStats() {
  const [stats, setStats] = useState<AdminStats>({
    pending: 0,
    verifiedToday: 0,
    rejected: 0,
    reviewed: 0,
  });

  const [loading, setLoading] = useState(true);

  async function refreshStats() {
    try {
      setLoading(true);

      const data = await getAdminStats();

      setStats(data);
    } catch (error) {
      console.error("Failed to load admin stats", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refreshStats();
  }, []);

  return {
    stats,
    loading,
    refreshStats,
  };
}