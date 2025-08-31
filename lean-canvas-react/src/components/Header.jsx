import { useNavigate, Link, NavLink } from 'react-router-dom';

function Header() {
  const navigateMethod = useNavigate();

  return (
    <header className="header">
      <ul>
        {/*
        // useNavigate를 활용한 프로그래밍 네비게이팅 방식
        <li onClick={() => navigateMethod('/')}>Home</li>
        <li onClick={() => navigateMethod('/about')}>About</li>
        <li onClick={() => navigateMethod('/contact')}>Contact</li>
        */}

        {/*
        // a 태그를 Inline 방식으로 작성하게 될 경우 페이지 새로고침이 발생하게 되므로 아래 방식이 올바른 케이스
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/contact'}>Contact</Link>
        </li>*/}

        <li>
          <NavLink
            to="/"
            // className={isActive => {
            //   /* 활성화 여부 콜백 */
            //   return isActive ? 'text-blue-700' : '';
            // }}
            className={({ isActive }) => (isActive ? 'text-blue-700' : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/about'}
            className={({ isActive }) => (isActive ? 'text-blue-700' : '')}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/contact'}
            className={({ isActive }) => (isActive ? 'text-blue-700' : '')}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
