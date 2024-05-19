import { useDispatch, useSelector } from 'react-redux';
import GridComp from '../../components/atoms/gridComp/GridComp';
import Card from '../../components/molecules/card/Card';
import PropTypes from 'prop-types';
import SkeletonComponent from '../../components/atoms/skeletonComp/SkeletonComponent';
import Sidebar from '../../components/molecules/sidebar/Sidebar';
import {
	addToCardHandler,
	sideBarModalHandler,
} from '../../store/productSlice';
import { Button } from '@mui/material';
import SidebarModal from './SidebarModal';

const Home = ({ loading = true }) => {
	const products = useSelector((state) => state.products.productData);
	const dispatch = useDispatch();
	const skeletons = Array.from({ length: 10 });

	const buttonHandler = () => {
		dispatch(sideBarModalHandler(true));
	};
	const selectedProductHandler = (value, item) => {
		dispatch(sideBarModalHandler(true));
		dispatch(addToCardHandler(item, value));
	};
	return (
		<div>
			<Button onClick={buttonHandler}>click me</Button>
			<GridComp container spacing={3}>
				{loading
					? skeletons.map((_, index) => (
						<GridComp key={index} item xs={6} sm={4} lg={3} xl={2}>
							<SkeletonComponent height="380px" variant="rounded" />
						</GridComp>
					))
					: products.map((item) => (
						<GridComp key={item.id} item xs={6} sm={4} lg={3} xl={2}>
							<Card
								title={item.title}
								onSale={item.on_sale}
								image={item.cover_image}
								regularPrice={item.regular_price}
								salePrice={item.sale_price}
								variants={item.variants}
								productHandler={(value) =>
									selectedProductHandler(value, item)
								}
							/>
						</GridComp>
					))}
			</GridComp>

			<Sidebar>
				<SidebarModal />
			</Sidebar>
		</div>
	);
};
Home.propTypes = {
	loading: PropTypes.bool,
};
export default Home;
