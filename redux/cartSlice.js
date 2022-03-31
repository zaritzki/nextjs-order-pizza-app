import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		products: [],
		quantity: 0,
		subtotal: 0,
		delivery: 0,
		discount: 0,
		total: 0,
	},
	reducers: {
		addProduct: (state, action) => {
			state.products.push(action.payload)
			state.quantity += 1
			state.subtotal += action.payload.price * action.payload.quantity
			state.delivery = 2.5,
			state.discount = 0,
			state.total += (action.payload.price * action.payload.quantity) + state.delivery
		},
		reset: (state) => {
			state.products = [];
			state.quantity = 0;
			state.subtotal = 0,
			state.delivery = 0;
			state.discount = 0,
			state.total = 0;
		},
	},
})

export const { addProduct, reset } = cartSlice.actions
export default cartSlice.reducer
