import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import BoxComponent from '../../atoms/boxComp/BoxComponent';
import { sideBarModalHandler } from '../../../store/productSlice';
import IconButtonComp from '../../atoms/buttonComp/IconButtonComp';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import TypographyComp from '../../atoms/typographyComp/TypographyComp';
import {
	OverlayBackground,
	RotatingCloseButton,
	SidebarContainer,
} from './style';

const Sidebar = ({ children }) => {
	const dispatch = useDispatch();
	const isOpen = useSelector((state) => state.products.sideBarModal);
	const products = useSelector((state) => state.products.productAddToCard);

	const toggleSidebar = () => dispatch(sideBarModalHandler(!isOpen));

	return (
		<>
			{isOpen && <OverlayBackground onClick={toggleSidebar} />}
			<SidebarContainer isOpen={isOpen}>
				<BoxComponent
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<TypographyComp
						sx={{ fontSize: '16px', lineHeight: '24px', fontWeight: 400 }}
					>
						<span
							style={{ fontSize: '18px', fontWeight: 600, lineHeight: '27px' }}
						>
							{products.length}
						</span>{' '}
						Product added to your basket
					</TypographyComp>
					<RotatingCloseButton>
						<IconButtonComp onClick={toggleSidebar} color="inherit">
							<CancelOutlinedIcon />
						</IconButtonComp>
					</RotatingCloseButton>
				</BoxComponent>

				<BoxComponent sx={{ mt: 2 }}>{children}</BoxComponent>
			</SidebarContainer>
		</>
	);
};

Sidebar.propTypes = {
	children: PropTypes.node.isRequired,
};
export default Sidebar;
