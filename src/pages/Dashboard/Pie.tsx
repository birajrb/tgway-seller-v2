import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

import { getDashboardContent } from '@/api/vendor';

import styles from './styles.module.css';

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
