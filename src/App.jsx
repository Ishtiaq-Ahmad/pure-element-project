import { useEffect, useState } from 'react';
import { fetchProducts } from './apiService';

function App() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	console.log('products', products);
	useEffect(() => {
		const getProducts = async () => {
			try {
				const productData = await fetchProducts();
				setProducts(productData);
			} catch (error) {
				setError('Failed to fetch products. Please try again later.');
			} finally {
				setLoading(false);
			}
		};

		getProducts();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}
	return <>Hello react</>;
}

export default App;
