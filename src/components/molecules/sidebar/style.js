import { styled } from '@mui/material/styles';

export const SidebarContainer = styled('div')(({ isOpen = true }) => ({
	position: 'fixed',
	top: 0,
	right: 0,
	height: '100%',
	padding: isOpen ? '10px' : '0px', // Adjust padding to avoid overflow when hidden
	width: isOpen ? '30vw' : '0', // Ensure width is 0 when not open
	backgroundColor: '#ffffff',
	overflowX: 'hidden',
	transition: 'width 0.5s, padding 0.5s', // Transition for width and padding
	zIndex: 1000,
	visibility: isOpen ? 'visible' : 'hidden', // Hide completely when not open
	'@media (max-width: 768px)': {
		width: isOpen ? '100%' : '0',
	},
}));

export const OverlayBackground = styled('div')(() => ({
	position: 'fixed',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	background: 'rgba(0, 0, 0, 0.5)',
	zIndex: 1000,
	transition: 'opacity 0.5s',
}));

export const RotatingCloseButton = styled('div')(() => ({
	transition: 'transform 0.1s ease',
	'&:hover': {
		transform: 'rotate(180deg)',
	},
}));
