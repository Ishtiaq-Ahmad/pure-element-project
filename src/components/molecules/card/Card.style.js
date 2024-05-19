import { styled } from '@mui/material/styles';

export const ImageContainer = styled('div')(() => ({
	position: 'relative',
	// overflow: 'hidden',
	width: '100%',
	height: 'auto',
	cursor: 'pointer',
	overflow: 'hidden',
	// background: '#edecf2',
	marginBottom: '-4px',
	'&amp;:hover .overlay': {
		opacity: 1,
	},
}));

export const Overlay = styled('div')(() => ({
	position: 'absolute',
	// top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: 'rgba(0, 0, 0, 0.6)',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	color: '#ffffff',
	padding: '10px 20px',
	marginBottom: '4px',
	opacity: 0,
	transition: 'opacity 0.8s ease, background-color 0.5s ease',
	// '&amp;:hover': {
	// 	backgroundColor: 'rgba(0, 0, 0, 0.9)', // Change the background color on hover
	// },
}));

export const SaleBadge = styled('div')(({ allQuantitiesZero }) => ({
	position: 'absolute',
	top: 5,
	left: 5,
	backgroundColor: allQuantitiesZero ? '#000000' : '#ffffff',
	color: allQuantitiesZero ? '#ffffff' : '#000000',
	fontSize: '10px',
	fontWeight: 500,
	lineHeight: '15px',
	padding: '1px 5px 2px 5px',
	textAlign: 'center',
	textTransform: 'uppercase',
}));
