import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const TypographyComp = ({ variant = 'body1', children, ...props }) => {
	return (
		<Typography variant={variant} {...props}>
			{children}
		</Typography>
	);
};

// Define the prop types
TypographyComp.propTypes = {
	children: PropTypes.node.isRequired,
	variant: PropTypes.oneOf([
		'h1',
		'h2',
		'h3',
		'h4',
		'h5',
		'h6',
		'subtitle1',
		'subtitle2',
		'body1',
		'body2',
		'caption',
		'button',
		'overline',
		'srOnly',
		'inherit',
	]),
};

export default TypographyComp;
