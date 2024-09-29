import axios from 'axios';

export const getProducts = async () => {
  const response = await axios.get(
    'https://galya-baluvana-ec037-default-rtdb.firebaseio.com/products.json'
  );
  return response.data;
};

export const getProductsByCategory = async (category) => {
  const response = await axios.get(
    `https://galya-baluvana-ec037-default-rtdb.firebaseio.com/products/${category}.json`
  );
  return response.data;
};

export const getProduct = async (category, product) => {
  try {
    const response = await axios.get(
      `https://galya-baluvana-ec037-default-rtdb.firebaseio.com/products/${category}/products/${product}.json`
    );
    return response.data;
  } catch {
    return false;
  }
};

export const getStores = async () => {
  const response = await axios.get(
    'https://galya-baluvana-ec037-default-rtdb.firebaseio.com/stores.json'
  );
  return response.data;
};
