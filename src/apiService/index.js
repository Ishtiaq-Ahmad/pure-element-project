// apiService.js
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const api = axios.create({
	baseURL: BASE_URL,
	timeout: 10000, // Set a timeout limit for the requests
});

export const fetchProducts = async (limit = 30) => {
	try {
		const response = await api.get(`/products?limit=${limit}`);

		return response.data;
	} catch (error) {
		if (error.response) {
			// The request was made and the server responded with a status code
			// that falls out of the range of 2xx
			console.error('Error response:', error.response);
		} else if (error.request) {
			// The request was made but no response was received
			console.error('Error request:', error.request);
		} else {
			// Something happened in setting up the request that triggered an Error
			console.error('Error message:', error.message);
		}
		throw error;
	}
};
