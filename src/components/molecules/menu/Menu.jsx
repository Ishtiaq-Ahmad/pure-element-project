import { useSelector } from 'react-redux';
import Image from '../../atoms/imageComp/Image';
import TypographyComp from '../../atoms/typographyComp/TypographyComp';
import { Stack, Box } from '@mui/material';
import PropTypes from 'prop-types';

const MenuItem = ({ image, label, color }) => (
	<Stack
		direction="column"
		justifyContent="center"
		alignItems="center"
		spacing={1}
	>
		<Image
			source={image}
			alt={`${label}_image`}
			borderRadius="50%"
			width="70px"
			height="70px"
			objectFit="cover"
		/>
		<TypographyComp
			sx={{
				fontWeight: 700,
				fontSize: '12px',
				lineHeight: '14px',
				textTransform: 'uppercase',
				textAlign: 'center',
				color: color,
			}}
		>
			{label}
		</TypographyComp>
	</Stack>
);

MenuItem.propTypes = {
	image: PropTypes.string,
	label: PropTypes.string,
	color: PropTypes.string,
};

const Menu = () => {
	const products = useSelector((state) => state.products.productData);

	const menuItems = [
		{ index: 0, label: 'New In -DEV', color: '#7089fb' },
		{ index: 10, label: 'Bodysuits -DEV', color: '#000000' },
		{ index: 18, label: 'Leggings -DEV', color: '#000000' },
		{ index: 7, label: 'Shorts -DEV', color: '#000000' },
	];

	return (
		<Box
			sx={{
				width: '100%',
				overflowX: { xs: 'auto', sm: 'hidden' },
				'&::-webkit-scrollbar': { display: 'none' },
				'-ms-overflow-style': 'none',
				'scrollbar-width': 'none',
			}}
		>
			<Stack
				direction="row"
				justifyContent="center"
				alignItems="center"
				mt={2}
				mb={5}
				spacing={2}
				sx={{ minWidth: 'max-content', width: '100%' }}
			>
				{menuItems.map((item) => (
					<MenuItem
						key={item.label}
						image={products[item.index]?.cover_image}
						label={item.label}
						color={item.color}
					/>
				))}
			</Stack>
		</Box>
	);
};

export default Menu;
