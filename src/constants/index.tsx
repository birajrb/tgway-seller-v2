import { Archive, Briefcase, CircleUser, Home, Key, LocateIcon, LogOut, MapIcon, MapPin, ShoppingBag, UserPen, Wallet } from 'lucide-react';

import { MenuItem } from '@/types';
import { BankOutlined } from '@ant-design/icons';

// eslint-disable-next-line import/prefer-default-export
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
      {
        key: '/order',
        label: 'Order',
        icon: <Archive height={16} width={16} />,
      },
      {
        key: '/return',
        label: 'Return',
        icon: <Archive height={16} width={16} />,
      },
      {
        key: '/review',
        label: 'Review',
        icon: <Archive height={16} width={16} />,
      },
      {
        key: '/refund',
        label: 'Refund',
        icon: <Archive height={16} width={16} />,
      },
    ],
  },
  {
    key: '/income',
    label: 'Income',
    icon: <Wallet height={16} width={16} />,
  },
  {
    key: '/setting',
    label: 'Setting',
    icon: <CircleUser height={16} width={16} />,
    children: [
      {
        key: '/bank-account',
        label: 'Bank Account',
        icon: <BankOutlined height={16} width={16} />,
      },
      {
        key: '/address',
        label: 'Address',
        icon: <MapPin height={16} width={16} />,
      },
      {
        key: '/business-information',
        label: 'Business Information',
        icon: <Briefcase height={16} width={16} />,
      },
      {
        key: '/seller-profile',
        label: 'Seller Profile',
        icon: <UserPen height={16} width={16} />,
      },
      {
        key: '/change-password',
        label: 'Change Password',
        icon: <Key height={16} width={16} />,
      },
    ],
  },
  {
    key: '/logout',
    label: 'Logout',
    icon: <LogOut height={16} width={16} />,
  },
];
