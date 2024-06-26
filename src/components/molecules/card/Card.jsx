import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import Image from '../../atoms/imageComp/Image';
import BoxComponent from '../../atoms/boxComp/BoxComponent';
import { ImageContainer, Overlay, SaleBadge } from './Card.style';
import IconButtonComp from '../../atoms/buttonComp/IconButtonComp';
import TypographyComp from '../../atoms/typographyComp/TypographyComp';

const Card = ({
	title,
	onSale,
	image,
	regularPrice,
	salePrice,
	variants,
	productHandler,
}) => {
	const [allQuantitiesZero, setAllQuantitiesZero] = useState(false);
	const tagsHandler = (quantity, size) => {
		if (quantity > 0) productHandler(size);
	};

	useEffect(() => {
		const allZero = variants.every((item) => item.quantity === 0);
		setAllQuantitiesZero(allZero);
	}, [variants]);

	return (
		<BoxComponent sx={{ width: '100%', height: 'auto' }}>
			<ImageContainer>
				<Image source={image} alt={title} />
				<Overlay className="overlay">
					{variants.map((item) => (
						<BoxComponent key={item.id}>
							<IconButtonComp
								onClick={() => tagsHandler(item.quantity, item.size)}
								disabled={item.quantity === 0}
								size="small"
								sx={{
									width: '20px',
									height: '20px',
									color: '#ffffff',
									padding: '0px',
									textDecoration: item.quantity === 0 ? 'line-through' : 'none',
									'&.Mui-disabled': {
										color: '#ffffff',
									},
								}}
							>
								{item.size}
							</IconButtonComp>
						</BoxComponent>
					))}
				</Overlay>
				{onSale && (
					<SaleBadge allQuantitiesZero={allQuantitiesZero}>
						{allQuantitiesZero ? 'Sold out' : 'on sale'}
					</SaleBadge>
				)}
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
	onSale: PropTypes.bool,
	image: PropTypes.string,
	regularPrice: PropTypes.number,
	salePrice: PropTypes.number,
	variants: PropTypes.array,
	productHandler: PropTypes.func,
};

export default Card;
