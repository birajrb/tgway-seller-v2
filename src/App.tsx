import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import CustomLayout from './components/CustomLayout/CustomLayout';
import { ConfigProvider } from 'antd';

const router = createBrowserRouter([
  { 
    element: <CustomLayout />,
    children: [
      {
        path: '/',
        element: <div>contents</div>,
      },
    ]
  },
]);

function App() {
  return (
    <ConfigProvider 
      theme={{
      token: {
        fontFamily: "Figtree, serif"
      }
    }}>
      <RouterProvider
        router={router}
      />
    </ConfigProvider>
    
  );
}

export default App;
