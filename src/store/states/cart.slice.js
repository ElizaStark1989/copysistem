import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;

            const existingProduct = state.find((item) => item.id === product.id);

            if(existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.push({ ...product, quantity: 1});
            }

        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            return state.filter((item) => item.id !== id);
        },
    },
});

export const { addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;