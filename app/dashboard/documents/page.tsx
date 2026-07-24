"use client";

import { useState } from "react";
import { toast } from "sonner";

import BackButton from "@/components/ui/BackButton";
import DocumentsHeader from "@/components/documents/DocumentsHeader";
import DocumentsTable from "@/components/documents/DocumentsTable";
import DocumentsTableSkeleton from "@/components/documents/DocumentTableSkeleton";
import UploadModal from "@/components/documents/UploadModal";

import { useDocuments } from "@/hooks/useDocuments";
import { getDocumentUrl } from "@/services/documents.service";
import { Document } from "@/types/document";

export default function DocumentsPage() {
  const { documents, loading, upload, remove } = useDocuments();

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
      toast.success("Document uploaded successfully.");
    } catch (error) {
      console.error(error);
      toast.error("Upload failed.");
    }
  }

  return (
  <div className="rounded-xl bg-green-500 p-10 text-4xl text-white">
    Documents Page Works ✅
  


      <DocumentsHeader
        onUpload={() => setModalOpen(true)}
      />

      {loading ? (
        <DocumentsTableSkeleton />
      ) : (
        <DocumentsTable
          documents={documents}
          onView={handleView}
          onDelete={handleDelete}
        />
      )}

      <UploadModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onUpload={handleUpload}
      />
    </div>
  );
}