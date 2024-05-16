import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';

const GridComp = ({ children, ...props }) => {
	return <Grid {...props}>{children}</Grid>;
};

GridComp.propTypes = {
	children: PropTypes.node,
};
export default GridComp;
