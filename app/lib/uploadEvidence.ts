import { createClient } from "@/lib/supabase/client";

const supabase = createClient();

export async function uploadEvidence(file: File) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User not authenticated.");
  }

  const fileName = `${Date.now()}-${file.name}`;
  const filePath = `${user.id}/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from("documents")
    .upload(filePath, file);

  if (uploadError) {
    throw uploadError;
  }

  const {
    data: { publicUrl },
  } = supabase.storage
    .from("documents")
    .getPublicUrl(filePath);

  return publicUrl;
}