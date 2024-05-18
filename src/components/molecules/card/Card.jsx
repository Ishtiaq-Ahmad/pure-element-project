// import { FavoriteBorder, Favorite } from '@mui/icons-material';
import PropTypes from 'prop-types';
// import { BackgroundImage } from './Card.style';
import Image from '../../atoms/imageComp/Image';
import { ImageContainer, Overlay, SaleBadge } from './Card.style';
import TypographyComp from '../../atoms/typographyComp/TypographyComp';
import BoxComponent from '../../atoms/boxComp/BoxComponent';

const Card = ({ title, onSale, image, regularPrice, salePrice, variants }) => {
	// const [isFavorite, setIsFavorite] = useState(false);

	// const toggleFavorite = () => {
	// 	setIsFavorite(!isFavorite);
	// };

	return (
		<BoxComponent sx={{ width: '100%', height: 'auto' }}>
			<ImageContainer>
				<Image source={image} />
				<Overlay>
					{variants.map((item) => (
						<BoxComponent key={item.id}>
							<TypographyComp
								sx={{
									textDecoration: item.quantity === 0 ? 'line-through' : 'none',
								}}
							>
								{item.size}
							</TypographyComp>
						</BoxComponent>
					))}
				</Overlay>
				{onSale && <SaleBadge>on sale</SaleBadge>}

				{/* <HeartButton onClick={toggleFavorite}>
				{isFavorite ? <Favorite /> : <FavoriteBorder />}
			</HeartButton> */}
			</ImageContainer>
			<TypographyComp
				sx={{ fontSize: '14px', fontWeight: 500, lineHeight: '21px' }}
			>
				{title}
			</TypographyComp>
			<BoxComponent sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
				<TypographyComp
					sx={{ fontSize: '16px', fontWeight: 700, lineHeight: '24px' }}
				>
					{regularPrice} USD
				</TypographyComp>
				{onSale && (
					<TypographyComp
						sx={{
							fontSize: '15px',
							fontWeight: 400,
							lineHeight: '24px',
							color: '#101010',
							textDecoration: 'line-through',
							opacity: 0.5,
						}}
					>
						{salePrice} USD
					</TypographyComp>
				)}
			</BoxComponent>
		</BoxComponent>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	onSale: PropTypes.string,
	image: PropTypes.string,
	regularPrice: PropTypes.number,
	salePrice: PropTypes.number,
	variants: PropTypes.array,
};

export default Card;
