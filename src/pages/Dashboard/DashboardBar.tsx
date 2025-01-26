import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';

export default function BarChartData({ data }: any) {
  return (
    <div style={{ width: '100%', height: '300px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={600} height={300} data={data?.orders_graph_data}>
          <XAxis
            dataKey="date"
            tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            })}
          />
          <Tooltip
            labelFormatter={(value) => new Date(value).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          />
          <Bar dataKey="new" fill="#0199E6" />
          <Bar dataKey="delivered" fill="#FACD16" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
