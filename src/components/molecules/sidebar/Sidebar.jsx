import PropTypes from 'prop-types';
import BoxComponent from '../../atoms/boxComp/BoxComponent';
import {
	OverlayBackground,
	RotatingCloseButton,
	SidebarContainer,
} from './style';
import { useDispatch, useSelector } from 'react-redux';
import { sideBarModalHandler } from '../../../store/productSlice';
import IconButtonComp from '../../atoms/buttonComp/IconButtonComp';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import TypographyComp from '../../atoms/typographyComp/TypographyComp';

const Sidebar = ({ children }) => {
	// const [isOpen, setIsOpen] = useState(false);
	const dispatch = useDispatch();
	const isOpen = useSelector((state) => state.products.sideBarModal);

	const toggleSidebar = () => {
		// setIsOpen(!isOpen);
		dispatch(sideBarModalHandler(!isOpen));
	};
	return (
		<>
			{' '}
			{isOpen && <OverlayBackground onClick={toggleSidebar} />}
			<SidebarContainer isOpen={isOpen}>
				<BoxComponent
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<TypographyComp sx={{ fontSize: '16px', lineHeight: '24px' }}>
						<span
							style={{ fontSize: '18px', fontWeight: 500, lineHeight: '27px' }}
						>
							1
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
