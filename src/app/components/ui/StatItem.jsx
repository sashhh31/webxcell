export default function StatItem({ value, label }) {
  return (
    <div className="text-lightText">
      <p className="text-3xl font-bold">{value}</p>
      <p className="text-sm">{label}</p>
    </div>
  );
}