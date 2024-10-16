import { Global, ThemeProvider } from '@emotion/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { reset } from './styles/global';
import theme from './styles/theme';
import MainPage from './views/Main/MainPage';
import EventMakePage from './views/My/pages/EventMakePage';
import ImgGeneratorPage from './views/My/pages/ImgGeneratorPage';
import MyPage from './views/My/pages/MyPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <MainPage />
    }, {
      path: '/my-page', element: <MyPage/>
    }, {
      path   : '/make-event', 
      element: <EventMakePage/>,
    }, {
      path   : '/img-generator', 
      element: <ImgGeneratorPage/>,
    }
  ]);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
