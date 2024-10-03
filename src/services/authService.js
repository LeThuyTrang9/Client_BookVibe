import { post } from "../utils/request";

export const login = async (options) => {
	const result = await post("auth/login", options);
	return result;
};

export const register = async (options) => {
    console.log(options);
    
	const result = await post("auth/register", options);
	return result;
};