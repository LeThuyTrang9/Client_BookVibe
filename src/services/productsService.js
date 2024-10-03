import { del, get, patch, post } from "../utils/request";

export const getProductList = async () => {
	const result = await get("products");
	return result;
};

export const getProductByIdOrSlug = async (idOrSlug) => {
	const result = await get("products/" + idOrSlug);
	return result;
};

export const getProductSimilar = async (parentId, categoryId) => {
	const result = await get(`products?parentId=${parentId}&categoryId=${categoryId}`);
	return result;
};

export const getProductHot = async (limit) => {
	const result = await get(`products?sortBySales=true&limit=${limit}`);
	return result;
};

export const getProductsByFilter = async (filters) => {
    const { parentId, categoryId = [], brandId = [], minPrice, maxPrice } = filters;
    const queryParams = new URLSearchParams();

    if (parentId) {
        queryParams.set("parentId", parentId);
    }

    if (categoryId.length > 0) {
        categoryId.forEach((id) => queryParams.append("categoryId", id));
    }

    if (brandId.length > 0) {
        brandId.forEach((id) => queryParams.append("brandId", id));
    }

    queryParams.set("minPrice", minPrice);
    queryParams.set("maxPrice", maxPrice);

    try {
        // console.log(queryParams.toString());
        const response = await get(`products?${queryParams.toString()}`);
        return response;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};

export const createProduct = async (options) => {
	const result = await post("products", options);
	return result;
};

export const deleteProduct = async (id) => {
	const result = await del(`products/${id}`);
	return result;
};

export const editProduct = async (id, options) => {
	const result = await patch(`products/${id}`, options);
	return result;
};
