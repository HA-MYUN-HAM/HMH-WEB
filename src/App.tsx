import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
      {
        path: "/",
        children: [
        ],
      },
    ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
