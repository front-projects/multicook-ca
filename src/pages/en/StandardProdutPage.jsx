import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductsByCategory } from '../../utils/getProductsByCategory';

export default function StandardProductPage() {
  const { product } = useParams();
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductsByCategory(product);
      setProducts(data);
    };
    fetchData();
  }, [product]);

  return (
    <>
      {products ? (
        products.map((product) => {
          return (
            <Link
              to={`/en/product/${product.path}`}
              className="product"
              key={product.id}
            >
              <img
                src={product.images[0]}
                className="product__img"
                alt="Product-image"
                width="1"
                height="1"
                decoding="async"
              />
              <h3 className="product__title">{product.title}</h3>
            </Link>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
}
