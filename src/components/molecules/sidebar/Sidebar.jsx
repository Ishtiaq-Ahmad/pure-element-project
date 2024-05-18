import PropTypes from 'prop-types';
import BoxComponent from '../../atoms/boxComp/BoxComponent';
import { OverlayBackground, SidebarContainer } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { sideBarModalHandler } from '../../../store/productSlice';
import IconButtonComp from '../../atoms/buttonComp/IconButtonComp';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

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
				<BoxComponent sx={{ display: 'flex', justifyContent: 'flex-end' }}>
					<IconButtonComp onClick={toggleSidebar}>
						<CancelOutlinedIcon />
					</IconButtonComp>
				</BoxComponent>

				<BoxComponent>{children}</BoxComponent>
			</SidebarContainer>
		</>
	);
};

Sidebar.propTypes = {
	children: PropTypes.node.isRequired,
};
export default Sidebar;
