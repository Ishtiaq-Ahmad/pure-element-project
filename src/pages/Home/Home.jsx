import GridComp from '../../components/atoms/gridComp/GridComp';
import Card from '../../components/molecules/card/Card';

const Home = () => {
	return (
		<div>
			<GridComp container spacing={2}>
				<GridComp item xs={6} sm={4} lg={3} xl={2}>
					<Card />
				</GridComp>
				<GridComp item xs={6} sm={4} lg={3} xl={2}>
					<Card />
				</GridComp>
				<GridComp item xs={6} sm={4} lg={3} xl={2}>
					<Card />
				</GridComp>
				<GridComp item xs={6} sm={4} lg={3} xl={2}>
					<Card />
				</GridComp>
			</GridComp>
		</div>
	);
};

export default Home;
