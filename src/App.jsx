import { fetchProducts } from './apiService';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Home from './pages/Home/Home';
import { productHandler } from './store/productSlice';
import Navbar from './components/molecules/navbar/Navbar';
import Sidebar from './components/molecules/sidebar/Sidebar';
import SidebarContent from './components/molecules/sidebarContent/SidebarContent';

function App() {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getProducts = async () => {
			try {
				const { data } = await fetchProducts();
				dispatch(productHandler(data));
			} catch (err) {
				setError('Failed to fetch products. Please try again later.');
			} finally {
				setLoading(false);
			}
		};

		getProducts();
	}, [dispatch]);

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<>
			<Navbar />
			<Home loading={loading} />
			<Sidebar>
				<SidebarContent />
			</Sidebar>
		</>
	);
}

export default App;
