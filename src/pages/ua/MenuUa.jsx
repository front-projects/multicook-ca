import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { CategoriesIcon } from '../../components/UI/icons';
import MenuNavigationUa from '../../components/Menu/NavigationUa';

export default function StandardMenuUa() {
  const [open, setOpen] = useState(false);

  return (
    <main className="page__main">
      <section className="menu-page min-h-[100vh]">
        <div className="container">
          <div className="menu-page__top">
            <h2 className="title-ua title-lg">Меню Multicook</h2>
          </div>

          <div className="flex mt-10 gap-4 max-sm:flex-col">
            <MenuNavigationUa open={open} onClose={()=> setOpen(false)}/>
            <div className="flex items-center gap-2 sm:hidden" onClick={()=> setOpen(!open)}>
              <CategoriesIcon />
              Категорії
            </div>
            <div className="grid grid-cols-3 w-max gap-10 h-max max-[1200px]:grid-cols-2 max-sm:w-[90vw] max-h-max">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
