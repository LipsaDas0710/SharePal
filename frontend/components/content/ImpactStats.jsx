const stats = [
  { value: "250Cr+", label: "Saved Together" },
  { value: "4.5M Kg", label: "CO₂ Emissions Saved" },
  { value: "100K+", label: "Products In Circulation" },
];

export default function ImpactStats() {
  return <section className="impact-stats">{stats.map((stat) => <div className="impact-stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</section>;
}
