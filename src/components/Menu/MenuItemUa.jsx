import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MenuItemUa({ product, to, category }) {
  const [view, setView] = useState();

  return (
    <Link
      onMouseEnter={() => setView(true)}
      onMouseLeave={() => setView(false)}
      className="w-full text-[18px] h-max"
      to={`/ua/product/${to}?category=${category}`}
    >
      <div className="flex flex-col gap-2 w-[240px] relative max-sm:w-full h-max">
        {view && (
          <div
            className={`absolute top-2 right-4 bg-[#8f5633] px-4 rounded-md transform transition-transform duration-500 ease-in-out ${
              view ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Переглянути
          </div>
        )}
        <img
          src={
            product.images
              ? product.mainImage
              : 'https://res.cloudinary.com/dn2ix40dp/image/upload/v1727605044/gb_logo_g8ygvg.svg'
          }
          alt="image"
          className="object-fit rounded-xl h-[174px] max-h-[174px] max-sm:h-[114px] max-sm:max-h-[114px]"
        />
        <h3 className='font-["Arial"]'>{product.nameUa}</h3>
        <p className="text-[#8f5633] font-['Arial']">{product.price}</p>
      </div>
    </Link>
  );
}
