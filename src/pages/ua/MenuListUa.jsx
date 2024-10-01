import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../../utils/requests';
import MenuItemUa from '../../components/Menu/MenuItemUa';

export default function StandardProductPageUa() {
  const { product } = useParams();
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductsByCategory(product);
      setProducts(data.products);
    };
    fetchData();
  }, [product]);

  return (
    <>
      {products ? (
        Object.entries(products).map(([key, value]) => {
          return (
            <MenuItemUa product={value} to={key} key={key} category={product} />
          );
        })
      ) : (
        <div>Продукти відсутні</div>
      )}
    </>
  );
}
