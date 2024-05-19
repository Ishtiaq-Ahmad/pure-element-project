import { useMemo } from 'react';
import { Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from 'react-redux';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import Image from '../../atoms/imageComp/Image';
import ButtonComp from '../../atoms/buttonComp/ButtonComp';
import BoxComponent from '../../atoms/boxComp/BoxComponent';
import IconButtonComp from '../../atoms/buttonComp/IconButtonComp';
import TypographyComp from '../../atoms/typographyComp/TypographyComp';
import {
	decreaseQuantity,
	increaseQuantity,
	removeProduct,
} from '../../../store/productSlice';

const fontStyle = {
	fontWeight: 600,
	fontSize: '14px',
	lineHeight: '21px',
};

const SidebarContent = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products.productAddToCard);

	const handleIncreaseQuantity = (id, size) => {
		dispatch(increaseQuantity({ id, size }));
	};

	const handleDecreaseQuantity = (id, size) => {
		dispatch(decreaseQuantity({ id, size }));
	};

	const handleRemoveProduct = (id, size) => {
		dispatch(removeProduct({ id, size }));
	};

	const totalPrice = useMemo(() => {
		return products.reduce(
			(total, product) => total + product.regular_price * product.quantity,
			0,
		);
	}, [products]);

	return (
		<div>
			{products.length === 0 ? (
				<BoxComponent
					sx={{
						display: 'flex',
						height: '100px',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<TypographyComp
						sx={{ fontWeight: 700, fontSize: '18px', lineHeight: '22px' }}
					>
						No item in cart
					</TypographyComp>
				</BoxComponent>
			) : (
				products.map((item, index) => (
					<Stack
						spacing={2}
						mb={4}
						key={index}
						direction="row"
						alignItems={'center'}
						sx={{ height: '140px' }}
					>
						<BoxComponent sx={{ width: '140px' }}>
							<Image source={item.cover_image} alt={item.title} />
						</BoxComponent>
						<BoxComponent
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'space-between',
								justifyContent: 'space-between',
								height: '100%',
								width: '100%',
							}}
						>
							<TypographyComp
								sx={{ fontWeight: 500, fontSize: '15px', lineHeight: '23px' }}
							>
								{item.title}
							</TypographyComp>
							<TypographyComp sx={fontStyle}>
								{item.regular_price} USD
							</TypographyComp>
							<BoxComponent
								sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2 }}
							>
								<BoxComponent
									sx={{
										p: '0px 7px',
										border: '.5px solid #e6e1e1',
										...fontStyle,
									}}
								>
									{item.size} {/* Display dynamic size */}
								</BoxComponent>
							</BoxComponent>
							<Stack
								direction={'row'}
								justifyContent={'space-between'}
								alignItems={'center'}
							>
								<BoxComponent
									sx={{
										display: 'flex',
										alignItems: 'center',
										border: '.5px solid #9b9a9a',
										height: '25px',
										gap: 1,
									}}
								>
									<IconButtonComp
										color="inherit"
										disabled={item.quantity === 1 ? true : false}
										onClick={() => handleDecreaseQuantity(item.id, item.size)}
									>
										<RemoveIcon sx={{ fontSize: '14px' }} />
									</IconButtonComp>
									<TypographyComp sx={fontStyle}>
										{item.quantity}
									</TypographyComp>

									<IconButtonComp
										color="inherit"
										onClick={() => handleIncreaseQuantity(item.id, item.size)}
									>
										<AddIcon sx={{ fontSize: '14px' }} />
									</IconButtonComp>
								</BoxComponent>
								<BoxComponent>
									<IconButtonComp
										onClick={() => handleRemoveProduct(item.id, item.size)}
									>
										<DeleteOutlineIcon fontSize="medium" />
									</IconButtonComp>
									{/* <IconButtonComp>
									<FavoriteIcon fontSize="medium" />
								</IconButtonComp> */}
								</BoxComponent>
							</Stack>
						</BoxComponent>
					</Stack>
				))
			)}

			<Divider sx={{ mb: 1 }} />
			<BoxComponent
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: '5px 20px',
				}}
			>
				<TypographyComp
					sx={{ fontWeight: 700, fontSize: '18px', lineHeight: '22px' }}
				>
					Sub Total
				</TypographyComp>
				<TypographyComp
					sx={{ fontWeight: 700, fontSize: '18px', lineHeight: '22px' }}
				>
					USD {totalPrice}
				</TypographyComp>
			</BoxComponent>
			<Divider sx={{ mt: 1 }} />

			<ButtonComp
				fullWidth
				sx={{
					background: 'linear-gradient(45deg, #2196F3 30%, #4CAF50 90%)',
					color: 'white',
					height: 38,
					padding: '0 30px',
					mt: 3,
					width: '100%',
					textTransform: 'capitalize',
				}}
			>
				Checkout{' '}
			</ButtonComp>
		</div>
	);
};

export default SidebarContent;
