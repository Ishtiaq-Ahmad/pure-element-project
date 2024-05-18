import { styled } from '@mui/material/styles';

export const SidebarContainer = styled('div')(({ isOpen = true }) => ({
	position: 'fixed',
	top: 0,
	right: -10,
	height: '100%',
	padding: '10px',
	width: isOpen ? '400px' : '0px',
	backgroundColor: '#ffffff',
	overflowX: 'hidden',
	transition: '0.5s',
	zIndex: 1000,
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
