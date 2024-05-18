import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Image = ({
	objectFit = 'contain',
	alt,
	source,
	borderRadius,
	...props
}) => {
	return (
		<LazyLoadImage
			{...props}
			style={{ objectFit, borderRadius }}
			alt={alt}
			height="auto"
			src={source}
			width="100%"
			effect="blur"
		/>
	);
};

Image.propTypes = {
	alt: PropTypes.string.isRequired,
	containerStyles: PropTypes.any,
	height: PropTypes.string,
	objectFit: PropTypes.oneOf([
		'cover',
		'contain',
		'fill',
		'none',
		'scale-down',
	]),
	source: PropTypes.any,
	width: PropTypes.string,
	borderRadius: PropTypes.string,
};

export default Image;
