interface AvatarProps {
  name?: string;
  image?: string | null;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Avatar({
  name = "Student",
  image,
  size = "md",
}: AvatarProps) {
  const sizes = {
    sm: "h-10 w-10 text-sm",
    md: "h-14 w-14 text-lg",
    lg: "h-20 w-20 text-2xl",
    xl: "h-32 w-32 text-5xl",
  };

  if (image) {
    return (
      <img
        src={image}
        alt={name}
        className={`rounded-full object-cover shadow-md ${sizes[size]}`}
      />
    );
  }

  return (
    <div
      className={`flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 font-black text-white shadow-lg ${sizes[size]}`}
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );
}