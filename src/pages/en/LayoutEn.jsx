import { Outlet, useLocation } from 'react-router-dom';
import HeaderEn from '../../components/Header/HeaderEn';
import FooterEn from '../../components/Footer/FooterEn';
import { useLayoutEffect } from 'react';

export default function LayoutEn() {
  const location = useLocation();
  const { pathname } = location;

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])
  return (
    <div className="page">
      <HeaderEn />
      <Outlet />
      <FooterEn />
    </div>
  );
}
