import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">홈</NavLink> {` `}
        <NavLink to="/products">상품목록</NavLink>
      </nav>
    </header>
  );
}