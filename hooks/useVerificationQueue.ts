"use client";

import { useEffect, useState } from "react";
import {
  approveDocument,
  getPendingDocuments,
  rejectDocument,
} from "@/services/admin.services";
import { Document } from "@/types/document";

export function useVerificationQueue() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadDocuments() {
    try {
      setLoading(true);

      const docs = await getPendingDocuments();

      setDocuments(docs);
    } catch (error) {
      console.error("Verification Queue Error:", error);
    } finally {
      setLoading(false);
    }
  }

  async function approve(id: string, userId: string) {
    try {
      await approveDocument(id, userId);

      alert("✅ Document verified successfully!");

      await loadDocuments();
    } catch (error) {
      console.error(error);
      alert("Failed to verify document.");
    }
  }

  async function reject(id: string, remarks: string) {
    try {
      await rejectDocument(id, remarks);

      alert("❌ Document rejected.");

      await loadDocuments();
    } catch (error) {
      console.error(error);
      alert("Failed to reject document.");
    }
  }

  useEffect(() => {
    loadDocuments();
  }, []);

  return {
    documents,
    loading,
    approve,
    reject,
    reload: loadDocuments,
  };
}