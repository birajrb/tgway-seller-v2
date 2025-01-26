import React from 'react';
import type { TableProps } from 'antd';
import { Table } from 'antd';

interface DataType {
  key: string;
  productId: number;
  productName: string;
  category: string;
  dis: number;
  price: number;
  created_at: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Product ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Product Name',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Category',
    dataIndex: 'category_name',
    key: 'category_name',
  },
  {
    title: 'Price',
    key: 'price1',
    dataIndex: 'price1',
  },
  {
    title: 'Added Date',
    key: 'created_at',
    render: (text: DataType) => new Date(text.created_at).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }),
  },
];

const ProductTable: React.FC = ({ data }: any) => (
  <Table<DataType> pagination={false} columns={columns} dataSource={data} />
);

export default ProductTable;
