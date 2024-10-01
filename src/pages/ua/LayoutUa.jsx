import { Outlet, useLocation } from 'react-router-dom';
import HeaderUa from '../../components/Header/HeaderUa';
import { useLayoutEffect } from 'react';
import FooterUa from '../../components/Footer/FooterUa';

export default function LayoutUa() {
  const location = useLocation();
  const { pathname } = location;

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])
  return (
    <div className="page">
      <HeaderUa />
      <Outlet />
      <FooterUa />
    </div>
  );
}
