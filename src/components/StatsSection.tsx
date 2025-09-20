
import React from 'react';

const stats = [
  { value: "5+", label: "Tech Domains" },
  { value: "50+", label: "Real-world Projects" },
  { value: "100%", label: "Industry-based" },
  { value: "24/7", label: "Support Access" },
];

const StatsSection = () => {
  return (
    <section className="py-12 bg-primary text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">{stat.value}</div>
              <div className="text-sm md:text-base font-medium text-primary-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
