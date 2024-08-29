import axios from "axios"

export const getProduct = async (path) => {
    const response = await axios.get('./data/products.json');
    for (let category of Object.keys(response.data[0])) {
        const result = response.data[0][category].find(item => item.path === path);
        if (result) {
            return result;
        }
    }
    return null;
}