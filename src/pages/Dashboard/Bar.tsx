import React from 'react';
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    orders: 2400,
  },
  {
    name: 'Page B',
    orders: 1398,
  },
  {
    name: 'Page A',
    orders: 2400,
  },
  {
    name: 'Page B',
    orders: 1398,
  },
  {
    name: 'Page A',
    orders: 2400,
  },
  {
    name: 'Page B',
    orders: 1398,
  },
  {
    name: 'Page A',
    orders: 2400,
  },
  {
    name: 'Page B',
    orders: 1398,
  },
  {
    name: 'Page A',
    orders: 2400,
  },
  {
    name: 'Page B',
    orders: 1398,
  },
  {
    name: 'Page A',
    orders: 2400,
  },
  {
    name: 'Page B',
    orders: 1398,
  },
  {
    name: 'Page A',
    orders: 2400,
  },
  {
    name: 'Page B',
    orders: 1398,
  },
  {
    name: 'Page A',
    orders: 2400,
  },
  {
    name: 'Page B',
    orders: 1398,
  },
  {
    name: 'Page A',
    orders: 2400,
  },
  {
    name: 'Page B',
    orders: 1398,
  },
  {
    name: 'Page A',
    orders: 2400,
  },
  {
    name: 'Page B',
    orders: 1398,
  },
  {
    name: 'Page A',
    orders: 2400,
  },
  {
    name: 'Page B',
    orders: 1398,
  },
  {
    name: 'Page A',
    orders: 2400,
  },
  {
    name: 'Page B',
    orders: 1398,
  },
  {
    name: 'Page A',
    orders: 2400,
  },
  {
    name: 'Page B',
    orders: 1398,
  },
  {
    name: 'Page A',
    orders: 2400,
  },
  {
    name: 'Page B',
    orders: 1398,
  },
  {
    name: 'Page A',
    orders: 2400,
  },
  {
    name: 'Page B',
    orders: 1398,
  },
  {
    name: 'Page A',
    orders: 2400,
  },
  {
    name: 'Page B',
    orders: 1398,
  },
  {
    name: 'Page A',
    orders: 2400,
  },
  {
    name: 'Page B',
    orders: 1398,
  },
  {
    name: 'Page A',
    orders: 2400,
  },
  {
    name: 'Page B',
    orders: 1398,
  },
  {
    name: 'Page A',
    orders: 2400,
  },
  {
    name: 'Page B',
    orders: 1398,
  },
  {
    name: 'Page A',
    orders: 2400,
  },
  {
    name: 'Page B',
    orders: 1398,
  },
];

export default function BarChartData() {
  return (
    <div style={{ width: '100%', height: '300px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="orders"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
