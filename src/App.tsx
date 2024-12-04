import { Global, ThemeProvider } from '@emotion/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { reset } from './styles/global';
import theme from './styles/theme';
import ImageGeneratePage from './views/EventGenerate/component/ImgGenerator';
import EventGeneratePage from './views/EventGenerate/page/EventGeneratePage';
import MyPage from './views/My/pages/MyPage';
import Ticket from './views/My/pages/Ticket';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <MyPage/>
    }, {
      path   : '/event-generate', 
      element: <EventGeneratePage/>,
    }, {
      path   : '/image-generate', 
      element: <ImageGeneratePage/>,
    },
    {
      path   : '/ticket', 
      element: <Ticket />,
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
