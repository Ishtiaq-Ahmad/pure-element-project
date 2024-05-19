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

const SidebarModal = () => {
	const products = useSelector((state) => state.products.productAddToCard);
	return (
		<div>
			{products.map((item, index) => (
				<Stack spacing={2} key={index} direction="row">
					<BoxComponent>
						<Image source={item.cover_image} alt={item.title} />
					</BoxComponent>
					<BoxComponent>
						<TypographyComp>{item.title}</TypographyComp>
						<TypographyComp>{item.regular_price}</TypographyComp>
						<BoxComponent
							sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2 }}
						>
							<BoxComponent sx={{ p: '0px 4px', border: '1px solid black' }}>
								S
							</BoxComponent>
						</BoxComponent>
						<Stack direction={'row'} justifyContent={'space-between'}>
							<BoxComponent
								sx={{
									display: 'flex',
									alignItems: 'center',
									border: '1px solid black',
									gap: 1,
								}}
							>
								<IconButtonComp color="inherit">
									<RemoveIcon fontSize="small" />
								</IconButtonComp>
								<TypographyComp>1</TypographyComp>

								<IconButtonComp color="inherit">
									<AddIcon fontSize="small" />
								</IconButtonComp>
							</BoxComponent>
							<BoxComponent>
								<IconButtonComp color="inherit">
									<DeleteOutlineIcon fontSize="medium" />
								</IconButtonComp>
								<IconButtonComp color="inherit">
									<FavoriteIcon fontSize="medium" />
								</IconButtonComp>
							</BoxComponent>
						</Stack>
					</BoxComponent>
				</Stack>
			))}
		</div>
	);
};

export default SidebarModal;
