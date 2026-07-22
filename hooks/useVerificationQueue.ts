"use client";

import { useEffect, useState } from "react";
import { getVerificationQueue } from "@/services/admin.services";

export interface VerificationItem {
  id: string;
  user_id: string;
  title: string;
  organization: string | null;
  category: string | null;
  description: string | null;
  issue_date: string | null;
  evidence_url: string | null;
  verification_status: string;
  trust_points: number;
  created_at: string;
  profiles?: {
    full_name: string;
    username?: string;
    email?: string;
    trust_score?: number;
  };
}

export function useVerificationQueue() {
  const [queue, setQueue] = useState<VerificationItem[]>([]);
  const [loading, setLoading] = useState(true);

  async function refreshQueue() {
    try {
      setLoading(true);

      const data = await getVerificationQueue();

      setQueue(data as VerificationItem[]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refreshQueue();
  }, []);

  return {
    queue,
    loading,
    refreshQueue,
  };
}