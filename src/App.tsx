import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';

import CustomLayout from './components/CustomLayout/CustomLayout';
import BankAccount from './pages/BankAccount';
import Dashboard from './pages/Dashboard';
import SellerProfile from './pages/SellerProfile';

const router = createBrowserRouter([
  {
    element: <CustomLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
    ],
  },
  {
    element: <CustomLayout />,
    children: [
      {
        path: '/seller-profile',
        element: <SellerProfile />,
      },
    ],
  },
  {
    element: <CustomLayout />,
    children: [
      {
        path: '/bank-account',
        element: <BankAccount />,
      },
    ],
  },
]);

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Figtree, serif',
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
