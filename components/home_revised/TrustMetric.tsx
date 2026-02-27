export default function TrustMetric({
  value,
  label,
  description,
  icon: Icon,
  index,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) {
  return (
    <div
      className="text-center p-6 rounded-xl bg-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
      <div className="text-3xl font-bold text-foreground mb-1">{value}</div>
      <div className="font-semibold text-sm mb-2">{label}</div>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  );
}
