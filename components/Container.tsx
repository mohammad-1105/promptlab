export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-full max-w-6xl mx-auto px-2 py-1 ${className}`}>
      {children}
    </div>
  );
}
