"use client";

import { useEffect, useState } from "react";

import { useAuth } from "@/context/AuthProvider";

import { Document } from "@/types/document";

import {
  getDocuments,
  uploadDocument,
  deleteDocument,
} from "@/services/documents.service";

export function useDocuments() {
  const { user } = useAuth();

  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadDocuments() {
    if (!user) {
      setLoading(false);
      return;
    }

    try {
      const docs = await getDocuments(user.id);
      setDocuments(docs);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function upload(
    title: string,
    type: string,
    file: File
  ) {
    if (!user) return;

    await uploadDocument(
      user.id,
      title,
      type,
      file
    );

    await loadDocuments();
  }

  async function remove(doc: Document) {
    await deleteDocument(
      doc.id,
      doc.file_path
    );

    await loadDocuments();
  }

  useEffect(() => {
    loadDocuments();
  }, [user]);

  return {
    documents,
    loading,
    upload,
    remove,
    reload: loadDocuments,
  };
}