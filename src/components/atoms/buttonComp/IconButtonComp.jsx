import { IconButton } from '@mui/material';
import PropTypes from 'prop-types';

const IconButtonComp = ({ children, ...props }) => {
	return (
		<IconButton aria-label="add an alarm" {...props}>
			{children}
		</IconButton>
	);
};

IconButtonComp.propTypes = {
	children: PropTypes.node,
};
export default IconButtonComp;
