"use client";

import { useCallback, useEffect, useState } from "react";
import { getAdminStats } from "@/services/admin.services";

interface AdminStatsData {
  pending: number;
  verifiedToday: number;
  rejected: number;
  reviewed: number;
}

export function useAdminStats() {
  const [stats, setStats] = useState<AdminStatsData>({
    pending: 0,
    verifiedToday: 0,
    rejected: 0,
    reviewed: 0,
  });

  const [loading, setLoading] = useState(true);

  const refreshStats = useCallback(async () => {
    try {
      const data = await getAdminStats();
      setStats(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshStats();
  }, [refreshStats]);

  return {
    stats,
    loading,
    refreshStats,
  };
}