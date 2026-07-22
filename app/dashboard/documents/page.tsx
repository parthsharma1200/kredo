"use client";

import { useState } from "react";
import BackButton from "@/components/ui/BackButton";
import DocumentsHeader from "@/components/documents/DocumentsHeader";
import DocumentsTable from "@/components/documents/DocumentsTable";
import UploadModal from "@/components/documents/UploadModal";
import { toast } from "sonner";
import { useDocuments } from "@/hooks/useDocuments";
import { getDocumentUrl } from "@/services/documents.service";
import { Document } from "@/types/document";
import DocumentsTableSkeleton from "@/components/documents/DocumentTableSkeleton";

export default function DocumentsPage() {
  const {
    documents,
    loading,
    upload,
    remove,
  } = useDocuments();

  const [modalOpen, setModalOpen] = useState(false);

  async function handleView(doc: Document) {
    try {
      const url = await getDocumentUrl(doc.file_path);
      window.open(url, "_blank");
    } catch (error) {
      console.error(error);
      toast.error("Unable to open document.");
    }
  }

  async function handleDelete(doc: Document) {
    const confirmed = window.confirm(
      "Delete this document?"
    );

    if (!confirmed) return;

    try {
      await remove(doc);
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete document.");
    }
  }

  async function handleUpload(
    title: string,
    type: string,
    file: File
  ) {
    try {
      await upload(title, type, file);
      setModalOpen(false);
    } catch (error) {
      console.error(error);
      toast.error("Upload failed");
    }
  }

  if (loading) {
  return (
  <div className="space-y-8">
    <BackButton fallback="/dashboard" />

    <DocumentsHeader
      onUpload={() => setModalOpen(true)}
    />
      <DocumentsHeader
        onUpload={() => setModalOpen(true)}
      />

      <DocumentsTableSkeleton />
    </div>
  );
}

  if (loading) {
  return (
    <div className="space-y-8">
      <BackButton fallback="/dashboard" />

      <DocumentsHeader
        onUpload={() => setModalOpen(true)}
      />
      <DocumentsHeader
        onUpload={() => setModalOpen(true)}
      />

      <DocumentsTable
        documents={documents}
        onView={handleView}
        onDelete={handleDelete}
      />

      <UploadModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onUpload={handleUpload}
      />
    </div>
  )};
}