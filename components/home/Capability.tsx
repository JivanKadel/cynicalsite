/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Capability({
  capability,
  gradient = "from-violet-500/20 to-blue-500/10",
  index,
}: any) {
  return (
    <div
      key={capability.text}
      className={`relative group flex items-center gap-3 p-4 rounded-xl bg-gray-100 dark:bg-card ${gradient}`}
      style={{ animationDelay: `${index * 0.03}s` }}
    >
      <div
        className={`absolute inset-0 bg-linear-to-br rounded-xl ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />
      <capability.icon className="w-4 h-4 text-foreground/70 shrink-0" />
      <span className="text-sm font-medium text-foreground">
        {capability.text}
      </span>
    </div>
  );
}
