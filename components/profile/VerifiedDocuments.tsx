import {
  BadgeCheck,
  Calendar,
  Eye,
  FileBadge,
  FileCheck,
  GraduationCap,
} from "lucide-react";

type Document = {
  id: string;
  title: string;
  document_type: string;
  verification_status: string;
  verified_at: string | null;
  file_url?: string | null;
};

type VerifiedDocumentsProps = {
  documents: Document[];
};

function getIcon(type: string) {
  switch (type.toLowerCase()) {
    case "transcript":
      return <GraduationCap className="h-6 w-6 text-blue-600" />;
    case "certificate":
      return <FileBadge className="h-6 w-6 text-amber-500" />;
    default:
      return <FileCheck className="h-6 w-6 text-emerald-600" />;
  }
}

export default function VerifiedDocuments({
  documents,
}: VerifiedDocumentsProps) {
  return (
    <section className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-lg">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          Verified Documents
        </h2>

        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
          {documents.length} Verified
        </span>
      </div>

      {documents.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-300 py-12 text-center">
          <FileCheck className="mx-auto mb-4 h-12 w-12 text-gray-400" />

          <p className="text-gray-500">
            No verified documents yet.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="flex items-center justify-between rounded-xl border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-blue-50 p-3">
                  {getIcon(doc.document_type)}
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    {doc.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {doc.document_type}
                  </p>

                  <div className="mt-2 flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1 text-green-600">
                      <BadgeCheck size={16} />
                      Verified
                    </span>

                    {doc.verified_at && (
                      <span className="flex items-center gap-1 text-gray-500">
                        <Calendar size={16} />
                        {new Date(doc.verified_at).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {doc.file_url && (
                <a
                  href={doc.file_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  <Eye size={16} />
                  View
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}