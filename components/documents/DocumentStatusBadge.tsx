interface Props {
  status: "pending" | "verified" | "rejected";
}

export default function DocumentStatusBadge({
  status,
}: Props) {
  const styles = {
    pending:
      "bg-yellow-100 text-yellow-700 border border-yellow-200",

    verified:
      "bg-green-100 text-green-700 border border-green-200",

    rejected:
      "bg-red-100 text-red-700 border border-red-200",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${styles[status]}`}
    >
      {status}
    </span>
  );
}