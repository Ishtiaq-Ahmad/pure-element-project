import { Stack } from '@mui/material';
import Image from '../../components/atoms/imageComp/Image';
import BoxComponent from '../../components/atoms/boxComp/BoxComponent';
import TypographyComp from '../../components/atoms/typographyComp/TypographyComp';
import IconButtonComp from '../../components/atoms/buttonComp/IconButtonComp';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from 'react-redux';

const fontStyle = {
	fontWeight: 600,
	fontSize: '14px',
	lineHeight: '21px',
};

const SidebarModal = () => {
	const products = useSelector((state) => state.products.productAddToCard);

	return (
		<div>
			{products.map((item, index) => (
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
							// gap: 1,
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
								S
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
								<IconButtonComp color="inherit">
									<RemoveIcon
										// fontSize="small"
										sx={{ fontSize: '14px' }}
									/>
								</IconButtonComp>
								<TypographyComp sx={fontStyle}>1</TypographyComp>

								<IconButtonComp color="inherit">
									<AddIcon sx={{ fontSize: '14px' }} />
								</IconButtonComp>
							</BoxComponent>
							<BoxComponent>
								<IconButtonComp>
									<DeleteOutlineIcon fontSize="medium" />
								</IconButtonComp>
								<IconButtonComp>
									<FavoriteIcon fontSize="medium" />
								</IconButtonComp>
							</BoxComponent>
						</Stack>
					</BoxComponent>
				</Stack>
			))}

			<TypographyComp>Total price</TypographyComp>
		</div>
	);
};

export default SidebarModal;
