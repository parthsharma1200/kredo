interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export default function SectionHeader({
  title,
  subtitle,
  action,
}: SectionHeaderProps) {
  return (
    <div className="mb-8 flex items-start justify-between">

      <div>

        <h2 className="text-3xl font-black text-gray-900">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-2 max-w-2xl text-gray-500">
            {subtitle}
          </p>
        )}

      </div>

      {action && (
        <div>
          {action}
        </div>
      )}

    </div>
  );
}