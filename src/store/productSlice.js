import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	productData: [],
};

export const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		productHandler: (state, action) => {
			state.productData = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { productHandler } = productSlice.actions;

export default productSlice.reducer;
