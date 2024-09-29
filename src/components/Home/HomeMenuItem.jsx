import { Link } from 'react-router-dom';
import { MenuIconChef } from '../UI/icons';

export default function HomeMenuItem({ title, icon, to }) {
  return (
    <Link
      to={to}
      className="bg-[#AD8865] rounded-[10px] flex items-center justify-center h-[140px] hover:bg-[#8f5633] gap-2 max-sm:flex-col text-center px-4 py-2"
    >
      {icon}
      <div className='max-w-[50%] max-sm:max-w-[100%]'>{title}</div>
    </Link>
  );
}
