import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import CustomLayout from './components/CustomLayout/CustomLayout';

const router = createBrowserRouter([
  { element: <CustomLayout />,
    children: [
      {
        path: '/',
        element: <div>contents</div>,
      },
    ] },
]);

function App() {
  return (
    <RouterProvider
      router={router}
    />

  );
}

export default App;
