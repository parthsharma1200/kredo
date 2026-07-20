type SectionHeadingProps = {
  badge: string;
  title: string;
  description: string;
  centered?: boolean;
};

export default function SectionHeading({
  badge,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <p className="font-semibold uppercase tracking-widest text-blue-600">
        {badge}
      </p>

      <h2 className="mt-4 text-4xl font-bold text-gray-900">
        {title}
      </h2>

      <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
        {description}
      </p>
    </div>
  );
}