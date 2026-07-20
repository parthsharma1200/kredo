"use client";

import { useVerificationQueue } from "@/hooks/useVerificationQueue";
import { viewDocument } from "@/services/admin.services";

export default function AdminDashboard() {
  const {
    documents,
    loading,
    approve,
    reject,
  } = useVerificationQueue();

  async function handleView(filePath: string) {
    try {
      const url = await viewDocument(filePath);

      window.open(url, "_blank");
    } catch (error) {
      console.error(error);
      alert("Unable to open document.");
    }
  }

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="space-y-6 p-8">
      <h1 className="text-3xl font-bold">
        Verification Queue
      </h1>

      {documents.length === 0 && (
        <div className="rounded-xl border p-8 text-center">
          No pending documents.
        </div>
      )}

      {documents.map((doc) => {
  console.log(doc);

  return (
        <div
          key={doc.id}
          className="flex items-center justify-between rounded-xl border p-6"
        >
          {/* Left Side */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              {doc.title}
            </h2>

            <p className="text-gray-400">
              📄 {doc.document_type}
            </p>

            <p className="text-gray-400">
              👤 {doc.profiles?.full_name}
            </p>

            <p className="text-gray-400">
              🎓 {doc.profiles?.university}
            </p>

            <p className="text-sm text-gray-500">
              {new Date(doc.uploaded_at).toLocaleDateString()}
            </p>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            <button
              onClick={() => handleView(doc.file_path)}
              className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
            >
              👁 View
            </button>

            <button
              onClick={() =>
                approve(doc.id, doc.user_id)
              }
              className="rounded-lg bg-green-600 px-5 py-2 text-white hover:bg-green-700"
            >
              ✅ Approve
            </button>

            <button
              onClick={() =>
                reject(doc.id, "Rejected by Admin")
              }
              className="rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700"
            >
              ❌ Reject
            </button>

          </div>
        </div>
            );
})}
    </div>
  );
}