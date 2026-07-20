import Card from "@/components/ui/Card";
import { FileText, ImageIcon, ExternalLink } from "lucide-react";

interface Props {
  title: string;
  url: string;
}

export default function EvidenceCard({
  title,
  url,
}: Props) {
  const isImage =
    url.endsWith(".jpg") ||
    url.endsWith(".jpeg") ||
    url.endsWith(".png");

  return (
    <Card className="overflow-hidden p-0">

      <div className="aspect-[4/3] bg-slate-100 flex items-center justify-center">

        {isImage ? (
          <img
            src={url}
            alt={title}
            className="h-full w-full object-cover"
          />
        ) : (
          <FileText className="h-20 w-20 text-blue-600" />
        )}

      </div>

      <div className="p-5">

        <h3 className="font-bold text-lg">
          {title}
        </h3>

        <a
          href={url}
          target="_blank"
          className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:underline"
        >
          <ExternalLink className="h-4 w-4" />

          View Evidence

        </a>

      </div>

    </Card>
  );
}