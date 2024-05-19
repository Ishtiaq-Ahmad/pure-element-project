import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	productData: [],
	sideBarModal: false,
	productAddToCard: [],
};

export const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		productHandler: (state, action) => {
			state.productData = action.payload;
		},
		sideBarModalHandler: (state, action) => {
			state.sideBarModal = action.payload;
		},
		addToCardHandler: (state, action) => {
			state.productAddToCard = [...state.productAddToCard, action.payload];
		},

		increaseQuantity: (state, action) => {
			const product = state.productAddToCard.find(
				(item) =>
					item.id === action.payload.id && item.size === action.payload.size,
			);
			if (product) {
				product.quantity += 1;
			}
		},

		decreaseQuantity: (state, action) => {
			const product = state.productAddToCard.find(
				(item) =>
					item.id === action.payload.id && item.size === action.payload.size,
			);
			if (product && product.quantity > 0) {
				product.quantity -= 1;
			}
		},

		removeProduct: (state, action) => {
			state.productAddToCard = state.productAddToCard.filter(
				(item) =>
					!(item.id === action.payload.id && item.size === action.payload.size),
			);
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	productHandler,
	sideBarModalHandler,
	addToCardHandler,
	increaseQuantity,
	decreaseQuantity,
	removeProduct,
} = productSlice.actions;

export default productSlice.reducer;
