import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';

import CustomLayout from './components/CustomLayout/CustomLayout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

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
    path: '/login',
    element: <Login />,
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
      <RouterProvider
        router={router}
      />
    </ConfigProvider>

  );
}

export default App;
