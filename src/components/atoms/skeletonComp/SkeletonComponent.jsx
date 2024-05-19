import PropTypes from 'prop-types';
import Skeleton from '@mui/material/Skeleton';

const SkeletonComponent = ({
	variant = 'rectangular',
	width = '100%',
	height = '30px',
	sx,
	...otherProps
}) => {
	return (
		<>
			<Skeleton
				animation="wave"
				variant={variant}
				width={width}
				height={height}
				sx={{ fontSize: '1rem', ...sx }}
				{...otherProps}
			/>
		</>
	);
};

SkeletonComponent.propTypes = {
	height: PropTypes.string,
	sx: PropTypes.any,
	variant: PropTypes.string,
	width: PropTypes.string,
};

export default SkeletonComponent;
