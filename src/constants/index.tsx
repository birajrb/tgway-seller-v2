import {
  Archive,
  CircleUser,
  Home,
  LogOut,
  ShoppingBag,
  Wallet,
} from 'lucide-react';

export const sidebarItems = [
  {
    label: 'Dashboard',
    key: '/',
    icon: <Home className="h-4 w-4" />,
  },
  {
    label: 'Products',
    key: '/products',
    icon: <ShoppingBag className="h-4 w-4" />,
  },
  {
    label: 'Order & Review',
    icon: <Archive className="h-4 w-4" />,
    subnav: [
      {
        label: 'Order',
        key: '/order',
        icon: <Archive className="h-4 w-4" />,
      },
      {
        label: 'Return',
        key: '/return',
        icon: <Archive className="h-4 w-4" />,
      },
      {
        label: 'Review',
        key: '/review',
        icon: <Archive className="h-4 w-4" />,
      },

      {
        label: 'Refund',
        key: '/refund',
        icon: <Archive className="h-4 w-4" />,
      },
    ],
  },
  {
    label: 'Income',
    key: '/income',
    icon: <Wallet className="h-4 w-4" />,
  },
  {
    label: 'My Account',
    key: '/my-account',
    icon: <CircleUser className="h-4 w-4" />,
  },
  {
    label: 'Logout',
    key: '/',
    icon: <LogOut className="h-4 w-4" />,
  },
];
