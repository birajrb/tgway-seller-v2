import { getDashboardContent } from '@/api/vendor';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

// eslint-disable-next-line import/prefer-default-export
export function PieChartData() {
  const { data } = useQuery({
    queryKey: ['piechart'],
    queryFn: () => getDashboardContent(),
  });
  const chartData = useMemo(
    () => data?.order_status_counts?.map((item: any) => ({
      name: item.type.charAt(0).toUpperCase() + item.type.slice(1),
      value: item.count,
    })),
    [data?.order_status_counts],
  );
  const COLORS = ['#0199E6', '#FACD16'];
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={chartData}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={110}
          fill="#8884d8"
          label
        >
          {chartData.map((entry: any, index: number) => (
            <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
