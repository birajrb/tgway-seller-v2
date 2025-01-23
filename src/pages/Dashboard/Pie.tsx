import { Pie, PieChart, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Pending', value: 100 },
  { name: 'Paid', value: 300 },
];

// eslint-disable-next-line import/prefer-default-export
export function PieChartData() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={110}
          fill="#0199e4"
          label
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
