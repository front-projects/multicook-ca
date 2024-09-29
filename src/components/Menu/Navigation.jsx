import { useEffect, useState } from 'react';
import { getProducts } from '../../utils/requests';
import { RiCloseLargeFill } from 'react-icons/ri';

import { NavLink } from 'react-router-dom';

export default function MenuNavigation({ open, onClose }) {
  const [products, setProducts] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      const list = Object.entries(data).map(([key, value]) => {
        return {
          url: key,
          name: value.nameEn,
        };
      });
      setProducts(list);
    };
    fetchData();
  }, []);

  useEffect(() => {
    open
      ? (document.body.style.overflowY = 'none')
      : (document.body.style.overflowY = 'auto');
  }, [open]);

  return (
    <nav
      className={`w-[295px] 
        max-sm:w-[90vw] max-sm:gap-4 max-sm:h-[75dvh] max-sm:overflow-y-auto max-sm:py-10 max-sm:rounded-xl 
        max-sm:border-[1px] max-sm:border-gray-600/40 max-sm:top-40 
        bg-white max-sm:z-10 flex flex-col gap-2 max-sm:fixed 
        max-sm:px-2 transition-transform duration-500 ${open ? 'max-sm:translate-x-[0]' : 'max-sm:translate-x-[-100vw]'}`}
    >
      <h3 className="pb-2 border-b-[1px] border-gray-600/40 flex justify-between max-sm:pr-10">
        Categories{' '}
        {open && (
          <div onClick={onClose}>
            <RiCloseLargeFill />
          </div>
        )}
      </h3>
      {products ? (
        products.map((el) => (
          <NavLink
            onClick={onClose}
            key={el.url}
            to={`/en/menu/${el.url}`}
            className={({ isActive }) =>
              isActive ? 'text-[#8f5633] font-bold hover' : 'hover'
            }
          >
            {el.name}
          </NavLink>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </nav>
  );
}
