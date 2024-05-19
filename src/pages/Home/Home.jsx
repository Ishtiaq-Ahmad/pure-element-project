import { useDispatch, useSelector } from 'react-redux';
import GridComp from '../../components/atoms/gridComp/GridComp';
import Card from '../../components/molecules/card/Card';
import PropTypes from 'prop-types';
import SkeletonComponent from '../../components/atoms/skeletonComp/SkeletonComponent';

import {
	addToCardHandler,
	sideBarModalHandler,
} from '../../store/productSlice';

import Menu from '../../components/molecules/menu/Menu';
import BoxComponent from '../../components/atoms/boxComp/BoxComponent';

const Home = ({ loading = true }) => {
	const products = useSelector((state) => state.products.productData);
	const dispatch = useDispatch();
	const skeletons = Array.from({ length: 10 });

	const selectedProductHandler = (size, item) => {
		dispatch(sideBarModalHandler(true));
		dispatch(addToCardHandler({ ...item, size, quantity: 1 }));
	};
	return (
		<BoxComponent sx={{ pl: 3, pr: 3 }}>
			<Menu />
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
								productHandler={(size) => selectedProductHandler(size, item)}
							/>
						</GridComp>
					))}
			</GridComp>
		</BoxComponent>
	);
};
Home.propTypes = {
	loading: PropTypes.bool,
};
export default Home;
