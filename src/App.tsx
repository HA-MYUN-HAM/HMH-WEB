import { Global, ThemeProvider } from '@emotion/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { reset } from './styles/global';
import theme from './styles/theme';
import EventPage from './views/Event/EventPage';
import EventMakePage from './views/My/pages/EventMakePage';
import ImgGeneratorPage from './views/My/pages/ImgGeneratorPage';
import MyPage from './views/My/pages/MyPage';
import Ticket from './views/My/pages/Ticket';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <MyPage/>
    }, {
      path   : '/make-event', 
      element: <EventMakePage/>,
    }, {
      path   : '/img-generator', 
      element: <ImgGeneratorPage/>,
    }, {
      path   : '/ticket', 
      element: <Ticket />,
    }, {
      path   : '/event', 
      element: <EventPage />,
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
