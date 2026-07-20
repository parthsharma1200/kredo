import { createClient } from "@/lib/supabase/client";
import { Document } from "@/types/document";
import { getDocumentUrl } from "@/services/documents.service";

export async function getPendingDocuments() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("documents")
    .select(`
      *,
      profiles:profiles!documents_user_id_fkey(
        full_name,
        email,
        university
      )
    `)
    .eq("verification_status", "pending")
    .order("uploaded_at", { ascending: false });

  if (error) throw error;

  return (data ?? []) as Document[];
}

export async function viewDocument(filePath: string) {
  return await getDocumentUrl(filePath);
}

export async function approveDocument(
  documentId: string,
  userId: string
) {
  const supabase = createClient();

  const { error: verifyError } = await supabase
    .from("documents")
    .update({
      verification_status: "verified",
      verified_at: new Date().toISOString(),
      verified_by: userId,
    })
    .eq("id", documentId);

  if (verifyError) throw verifyError;

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("trust_score")
    .eq("id", userId)
    .single();

  if (profileError) throw profileError;

  const { data: document, error: documentError } = await supabase
    .from("documents")
    .select("document_type")
    .eq("id", documentId)
    .single();

  if (documentError) throw documentError;

  let points = 5;

  switch (document.document_type) {
    case "Marksheet":
      points = 20;
      break;

    case "Certificate":
      points = 15;
      break;

    case "Internship":
      points = 25;
      break;

    case "Resume":
      points = 10;
      break;

    default:
      points = 5;
  }

  const { error: updateError } = await supabase
    .from("profiles")
    .update({
      trust_score: (profile?.trust_score ?? 0) + points,
    })
    .eq("id", userId);

  if (updateError) throw updateError;
}

export async function rejectDocument(
  documentId: string,
  remarks: string
) {
  const supabase = createClient();

  const { error } = await supabase
    .from("documents")
    .update({
      verification_status: "rejected",
      remarks,
    })
    .eq("id", documentId);

  if (error) throw error;
}