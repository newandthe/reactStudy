import { Outlet } from 'react-router-dom';
import Header from './components/Header.jsx';

function App() {
  return (
    <div>
      <>
        <Header />
        {/* 리액트 라우터에서 제공하는 컴포넌트 */}
        {/* children 으로 설정된 컴포넌트가 상위 컴포넌트에 Outlet 위치에 랜더링 */}
        <Outlet />
      </>
    </div>
  );
}

export default App;
