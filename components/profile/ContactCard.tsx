import { Mail, MapPin, Phone } from "lucide-react";

type ContactCardProps = {
  email: string;
  location: string | null;
};

export default function ContactCard({
  email,
  location,
}: ContactCardProps) {
  return (
    <section className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-lg">
      <div className="mb-8 flex items-center gap-3">
        <div className="rounded-xl bg-emerald-100 p-3">
          <Mail className="h-6 w-6 text-emerald-700" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Contact
          </h2>

          <p className="text-sm text-gray-500">
            Reach Out
          </p>
        </div>
      </div>

      <div className="space-y-6">

        <div className="flex items-start gap-4">
          <Mail className="mt-1 h-5 w-5 text-blue-600" />

          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium text-gray-900 break-all">
              {email}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <MapPin className="mt-1 h-5 w-5 text-red-500" />

          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="font-medium text-gray-900">
              {location || "Not Provided"}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Phone className="mt-1 h-5 w-5 text-green-600" />

          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-medium text-gray-900">
              Not Public
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}