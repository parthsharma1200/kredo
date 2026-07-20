import { createClient } from "@/lib/supabase/client";
import { Document } from "@/types/document";

export async function getDocuments(userId: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("documents")
    .select("*")
    .eq("user_id", userId)
    .order("uploaded_at", { ascending: false });

  if (error) throw error;

  return (data ?? []) as Document[];
}

export async function uploadDocument(
  userId: string,
  title: string,
  documentType: string,
  file: File
) {
  const supabase = createClient();

  const fileName = `${Date.now()}-${file.name}`;
  const filePath = `${userId}/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from("documents")
    .upload(filePath, file);

  if (uploadError) throw uploadError;

  console.log("Uploading as user:", userId);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("Current auth user:", user);

  const { error: insertError } = await supabase
    .from("documents")
    .insert({
      user_id: userId,
      title,
      document_type: documentType,
      file_name: fileName,
      file_path: filePath,
      file_url: filePath,
    });

  if (insertError) throw insertError;
}

export async function deleteDocument(
  id: string,
  filePath: string
) {
  const supabase = createClient();

  const { error: storageError } = await supabase.storage
    .from("documents")
    .remove([filePath]);

  if (storageError) throw storageError;

  const { error } = await supabase
    .from("documents")
    .delete()
    .eq("id", id);

  if (error) throw error;
}

export async function getDocumentUrl(
  filePath: string
) {
  const supabase = createClient();

  const { data, error } = await supabase.storage
    .from("documents")
    .createSignedUrl(filePath, 60);

  if (error) throw error;

  return data.signedUrl;
}