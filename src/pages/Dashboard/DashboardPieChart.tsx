import { useMemo } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

// eslint-disable-next-line import/prefer-default-export
export function PieChartData({ data }: any) {
  const chartData = useMemo(
    () => data?.order_status_counts?.map((item: any) => ({
      name: item.type.charAt(0).toUpperCase() + item.type.slice(1),
      value: item.count,
    })),
    [data?.order_status_counts],
  );
  const COLORS = ['#FACD16', '#0199E6'];
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={chartData}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius="50%"
          outerRadius="80%"
          fill="#8884d8"
          label
        >
          {chartData?.map((entry: any, index: number) => (
            <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
