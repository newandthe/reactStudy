import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './AppStyled.jsx';
// import App from './AppTailwindCSS.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import App from './App.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import CanvasDetail from './pages/CanvasDetail.jsx';

const router = createBrowserRouter([
  /* / 로 접근하였을 경우 보여줄 요소 */
  {
    path: '/',
    element: <App />,
    children: [
      /* children의 패스는 상대경로로 설정해야함. 상위 경로에 이어지기 때문 */
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'canvases/:paramsId' /* : 콜론을 이용하면 동적 할당 가능 */,
        element: <CanvasDetail />,
      },
    ],
    errorElement: (
      <ErrorPage />
    ) /* ErrorPage 예외 처리 : 상세 스펙은 reactrouter.com 에 상세 기술 */,
  },
  /* ... */
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
