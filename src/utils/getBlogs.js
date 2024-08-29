import axios from "axios";
export const getBlogs = async () => {
    const response = await axios.get("./data/blogs.json");
    return response.data;
}