import { useEffect, useState } from 'react';
import { fetchProducts } from './apiService';
import { useDispatch } from 'react-redux';
import { productHandler } from './store/productSlice';
import Home from './pages/Home/Home';

function App() {
	const dispatch = useDispatch();

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getProducts = async () => {
			try {
				const productData = await fetchProducts();
				console.log('productData', productData);
				const { data } = productData;
				// setProducts(productData);
				dispatch(productHandler(data));
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
	return (
		<>
			<Home />
		</>
	);
}

export default App;
