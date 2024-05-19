import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Badge } from '@mui/material';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { sideBarModalHandler } from '../../../store/productSlice';

const Navbar = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products.productAddToCard);
	return (
		<AppBar position="static" color="inherit">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					logo
				</Typography>

				<IconButton
					edge="end"
					color="inherit"
					onClick={() => dispatch(sideBarModalHandler(true))}
				>
					<Badge badgeContent={products.length} color="primary">
						<ShoppingCartOutlinedIcon />
					</Badge>
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

Navbar.propTypes = {
	logo: PropTypes.node.isRequired,
	icon: PropTypes.node.isRequired,
};

export default Navbar;
