import Button from "../ui/Button";

type HeaderProps = {
  fullName: string;
};

export default function Header({ fullName }: HeaderProps) {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-10 py-6">
      {/* Left */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900">
          Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Good morning, {fullName} 👋
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <Button>
          Upload Docs
        </Button>

        <Button variant="secondary">
          View Public Profile
        </Button>
      </div>
    </header>
  );
}