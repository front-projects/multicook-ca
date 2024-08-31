import axios from "axios"

export const getStores = async () => {
    const resposne = await axios.get("./data/stores.json");
    return resposne.data;
}