import { PieChart, Pie, ResponsiveContainer } from 'recharts';

const data02 = [
  { name: 'Pending', value: 100 },
  { name: 'Paid', value: 300 },
];

export function PieChartData() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data02}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
