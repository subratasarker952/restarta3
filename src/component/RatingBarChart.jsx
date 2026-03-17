import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

const RatingBarChart = ({ ratings }) => {

  // ✅ Proper sort (1 → 5)
  const sortedRatings = [...ratings].sort((a, b) => {
    const aNum = Number(a.name.split(" ")[0]);
    const bNum = Number(b.name.split(" ")[0]);
    return bNum - aNum;
  });


  return (
    <div className="w-full h-80 min-w-0">
      {sortedRatings && sortedRatings.length > 0 ? (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={sortedRatings} layout="vertical">

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis type="number" />

            <YAxis dataKey="name" type="category" />

            <Tooltip />

            <Bar
              dataKey="count"
              fill="#FFD700"
              radius={[0, 8, 8, 0]}
            />

          </BarChart>
        </ResponsiveContainer>
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-gray-400">
          No data recorded yet
        </div>
      )}
    </div>
  );
};

export default RatingBarChart;