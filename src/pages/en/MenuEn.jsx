import { useState } from 'react';
import { Outlet} from 'react-router-dom';
import MenuNavigation from '../../components/Menu/Navigation';
import { CategoriesIcon } from '../../components/UI/icons';

export default function StandardMenu() {
  const [open, setOpen] = useState(false);
 
  return (
    <main className="page__main">
      <section className="menu-page min-h-[100vh]">
        <div className="container">
          <div className="menu-page__top">
            <h2 className="title title-lg">Menu Galya Baluvana</h2>
          </div>

          <div className="flex mt-10 gap-4 max-sm:flex-col">
            <MenuNavigation open={open} onClose={()=> setOpen(false)}/>
            <div className="flex items-center gap-2 sm:hidden" onClick={()=> setOpen(!open)}>
              <CategoriesIcon />
              Categories
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
