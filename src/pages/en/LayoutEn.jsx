import { Outlet } from 'react-router-dom';
import HeaderEn from '../../components/Header/HeaderEn';
import FooterEn from '../../components/Footer/FooterEn';
import { useEffect } from 'react';

export default function LayoutEn() {


  useEffect(() => {
    scrollTo(0, 0)
  }, [])
  return (
    <div className="page">
      <HeaderEn />
      <Outlet />
      <FooterEn />
    </div>
  );
}
