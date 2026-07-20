interface TrustRingProps {
  score: number;
  size?: number;
}

export default function TrustRing({
  score,
  size = 180,
}: TrustRingProps) {
  const stroke = 12;

  const radius = (size - stroke) / 2;

  const circumference = 2 * Math.PI * radius;

  const progress =
    circumference - (Math.min(score, 100) / 100) * circumference;

  return (
    <div
      className="relative"
      style={{
        width: size,
        height: size,
      }}
    >
      <svg
        width={size}
        height={size}
        className="-rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth={stroke}
        />

        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#2563EB"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          className="transition-all duration-1000"
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">

        <h2 className="text-5xl font-black text-gray-900">
          {score}
        </h2>

        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
          Trust
        </p>

      </div>
    </div>
  );
}