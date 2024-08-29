import axios from "axios"

export const getProductsByCategory = async (category) => {
    const response = await axios.get('./data/products.json');

    return response.data[0][category];
}