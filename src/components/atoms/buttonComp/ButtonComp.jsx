import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

const ButtonComp = ({ variant, color, onClick, children, sx }) => {
	return (
		<div>
			<Button variant={variant} color={color} onClick={onClick} sx={sx}>
				{children}
			</Button>
		</div>
	);
};

ButtonComp.propTypes = {
	variant: PropTypes.string,
	color: PropTypes.string,
	onClick: PropTypes.func,
	children: PropTypes.node,
	sx: PropTypes.object,
};

ButtonComp.defaultProps = {
	variant: 'outlined',
	color: 'primary',
	onClick: () => {},
	children: 'Outlined',
	sx: {},
};

export default ButtonComp;
