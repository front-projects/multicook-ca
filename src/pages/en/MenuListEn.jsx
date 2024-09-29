import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductsByCategory } from '../../utils/requests';
import MenuItem from '../../components/Menu/MenuItem';

export default function StandardProductPage() {
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
          return <MenuItem product={value} to={key} key={key} category={product}/>;
        })
      ) : (
        <div>No products</div>
      )}
    </>
  );
}
