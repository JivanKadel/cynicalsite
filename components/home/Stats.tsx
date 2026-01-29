const Stats = () => {
  const stats = [
    { value: "0", label: "Client breaches during engagement" },
    { value: "2.4M", label: "Vulnerabilities discovered since 2019" },
    { value: "<4h", label: "Time to triage critical findings" },
    { value: "47", label: "Average criticals per red team op" },
  ];

  return (
    <section className="relative">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-background p-8 lg:p-12 text-center  "
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
                {stat.value}
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
