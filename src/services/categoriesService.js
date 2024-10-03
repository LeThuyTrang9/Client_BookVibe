import { get } from "../utils/request";

export const getCategories = async (parentId) => {
    const path = parentId ? `categories?parentId=${parentId}` : 'categories';
    const result = await get(path);
    return result;
};
