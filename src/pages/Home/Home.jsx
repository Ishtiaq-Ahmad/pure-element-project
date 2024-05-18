import { useSelector } from 'react-redux';
import GridComp from '../../components/atoms/gridComp/GridComp';
import Card from '../../components/molecules/card/Card';

const Home = () => {
	const products = useSelector((state) => state.products.productData);

	return (
		<div>
			<GridComp container spacing={3}>
				{products.map((item) => (
					<GridComp key={item.id} item xs={6} sm={4} lg={3} xl={2}>
						<Card
							title={item.title}
							onSale={item.on_sale}
							image={item.cover_image}
							regularPrice={item.regular_price}
							salePrice={item.sale_price}
							variants={item.variants}
						/>
					</GridComp>
				))}
			</GridComp>
		</div>
	);
};

export default Home;
