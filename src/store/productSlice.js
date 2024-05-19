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
	},
});

// Action creators are generated for each case reducer function
export const { productHandler, sideBarModalHandler, addToCardHandler } =
	productSlice.actions;

export default productSlice.reducer;
