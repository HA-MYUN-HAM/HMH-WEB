import { Global, ThemeProvider } from '@emotion/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { reset } from './styles/global';
import theme from './styles/theme';
import EventGeneratePage from './views/EventGenerate/page/EventGeneratePage';
import MyPage from './views/My/pages/MyPage';
import Ticket from './views/My/pages/Ticket';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <MyPage/>
    }, {
      path   : '/make-event', 
      element: <EventGeneratePage/>,
    }, {
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
