export type VerificationStatus =
  | "pending"
  | "verified"
  | "rejected";

export interface Document {
  id: string;

  user_id: string;

  title: string;

  document_type: string;

  file_name: string;

  file_path: string;

  file_url: string;

  verification_status: VerificationStatus;

  uploaded_at: string;

  verified_at: string | null;

  verified_by: string | null;

  extracted_data: Record<string, unknown> | null;

  created_at: string;

  remarks?: string | null;

  profiles?: {
    full_name: string;
    email: string;
    university: string | null;
  };
}