export default function SquareCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full aspect-square">{children}</div>;
}
