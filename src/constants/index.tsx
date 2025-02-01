import { Archive, CircleUser, Home, LogOut, ShoppingBag, Wallet } from 'lucide-react';

import { MenuItem } from '@/types';

export const sidebarItems: MenuItem[] = [
  {
    key: '/',
    label: 'Dashboard',
    icon: <Home height={16} width={16} />,
  },
  {
    key: '/products',
    label: 'Products',
    icon: <ShoppingBag height={16} width={16} />,
  },
  {
    key: '',
    label: 'Orders & Reviews',
    icon: <Archive height={16} width={16} />,
    children: [
      { key: '/order', label: 'Order', icon: <Archive height={16} width={16} /> },
      { key: '/return', label: 'Return', icon: <Archive height={16} width={16} /> },
      { key: '/review', label: 'Review', icon: <Archive height={16} width={16} /> },
      { key: '/refund', label: 'Refund', icon: <Archive height={16} width={16} /> },
    ],
  },
  {
    key: '/income',
    label: 'Income',
    icon: <Wallet height={16} width={16} />,
  },
  {
    key: '/my-account',
    label: 'My Account',
    icon: <CircleUser height={16} width={16} />,
  },
];
