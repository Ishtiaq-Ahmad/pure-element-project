import { styled } from '@mui/material/styles';
// // import girl from './../../../assets/images/girl.jpg';

export const ImageContainer = styled('div')(() => ({
	position: 'relative',
	// overflow: 'hidden',
	width: '100%',
	height: 'auto',
	// background: 'yellow',
	// '&:hover.image': {
	// 	transform: 'scale(1.1)',
	// },
}));

// // export const CardContainer = styled('div')(() => ({
// // 	background: 'green',
// // 	position: 'relative',
// // }));
// export const BackgroundImage = styled('div')(() => ({
// 	backgroundImage:
// 		'url(https://assets.cogeter.com/production/BWX_6391_2_SPORTSBRA_BLACK_S_BWX_6391_2_321_c42b43cd37.jpg)',
// 	backgroundSize: 'cover',
// 	backgroundPosition: 'center',
// 	width: '100%',
// 	height: '100%',
// 	transition: 'transform 0.5s ease',
// }));

export const Overlay = styled('div')(() => ({
	position: 'absolute',
	// top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: 'rgba(0, 0, 0, 0.7)',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	color: '#ffffff',
	padding: '10px 20px',
	marginBottom: '5px',
}));

export const SaleBadge = styled('div')(({ onSale = true }) => ({
	position: 'absolute',
	top: 5,
	left: 5,
	backgroundColor: onSale ? '#ffffff' : '#000000',
	color: onSale ? '#000000' : '#ffffff',
	fontSize: '10px',
	fontWeight: 500,
	lineHeight: '15px',
	padding: '1px 5px 2px 5px',
	textAlign: 'center',
	textTransform: 'uppercase',
}));

// export const HeartButton = styled('button')(({ filled }) => ({
// 	position: 'absolute',
// 	top: '10px',
// 	right: '10px',
// 	background: 'none',
// 	border: 'none',
// 	cursor: 'pointer',
// 	color: filled ? 'red' : 'white',
// 	outline: 'none',
// }));
