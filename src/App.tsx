import { useCallback, useEffect, useMemo, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';

import CustomLayout from './components/CustomLayout/CustomLayout';
import AuthContext from './contexts/auth';
import { baseRequest } from './lib/base';
import { setLocalStorage } from './lib/utils';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ProtectedRoutes from './ProtectRoutes';
import PublicRoutes from './PublicRoutes';
import { AuthState } from './types';

const getProfile = async () => {
  const response = await baseRequest({
    url: '/seller/details',
    method: 'GET',
  });
  return response;
};

const router = createBrowserRouter([
  {
    element: <CustomLayout />,
    children: [
      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: '/',
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
  {
    element: <PublicRoutes />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },

]);

function App() {
  const [auth, setAuth] = useState<AuthState | undefined>(undefined);
  const [ready, setReady] = useState(false);

  const login = useCallback((token: string, value: AuthState) => {
    setLocalStorage('app-auth', token);
    setAuth(value);
  }, []);

  const logout = useCallback(() => {
    setAuth(undefined);
    setLocalStorage('app-auth', null);
  }, []);

  const authContextValue = useMemo(
    () => ({
      state: auth,
      setState: setAuth,
      login,
      logout,
    }),
    [login, logout, auth],
  );

  const {
    isError,
    isLoading,
    error,
    data: payloadData,
  } = useQuery({
    queryKey: ['account'],
    queryFn: () => getProfile(),
  });

  useEffect(() => {
    if (!payloadData) {
      return;
    }
    // FIXME: implement this later
    if (payloadData.error === 'Unauthenticated.') {
      logout();
      setReady(true);
    } else {
      setAuth(() => ({
        firstName: payloadData.data.first_name,
        lastName: payloadData.data.last_name,
        role: payloadData.data.role,
        id: payloadData.data.id,
      }));
      setReady(true);
    }
  }, [logout, payloadData]);

  if (!ready) {
    return null;
  }

  if (isError) {
    return error.message;
  }

  if (isLoading) {
    return <>loading....</>;
  }

  return (
    <AuthContext.Provider value={authContextValue}>
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
    </AuthContext.Provider>
  );
}

export default App;
