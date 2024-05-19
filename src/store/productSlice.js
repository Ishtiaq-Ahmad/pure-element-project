import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid'; // Install uuid: npm install uuid

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
			const newProduct = { ...action.payload, uid: uuidv4() };
			state.productAddToCard.push(newProduct);
		},
		increaseQuantity: (state, action) => {
			const product = state.productAddToCard.find(
				(item) => item.uid === action.payload.uid,
			);
			if (product) {
				product.quantity += 1;
			}
		},
		decreaseQuantity: (state, action) => {
			const product = state.productAddToCard.find(
				(item) => item.uid === action.payload.uid,
			);
			if (product && product.quantity > 1) {
				product.quantity -= 1;
			}
		},
		removeProduct: (state, action) => {
			state.productAddToCard = state.productAddToCard.filter(
				(item) => item.uid !== action.payload.uid,
			);
		},
	},
});

export const {
	productHandler,
	sideBarModalHandler,
	addToCardHandler,
	increaseQuantity,
	decreaseQuantity,
	removeProduct,
} = productSlice.actions;

export default productSlice.reducer;
