import { Global, ThemeProvider } from '@emotion/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { reset } from './styles/global';
import theme from './styles/theme';
import MainPage from './views/Main/MainPage';
import MyPage from './views/My/pages/MyPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <MainPage />
    }, {
      path: '/my-page', element: <MyPage/>
    },

  ]);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
