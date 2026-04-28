import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
   cartItems?: string[];
}

const initialState: CartState = {
   cartItems: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<any>)=>{
            // mutating the state directly is allowed in createSlice because it uses Immer library under the hood to handle immutability
            state.cartItems?.push(action.payload);
        },
        removeItem: (state, action: PayloadAction<any>)=>{
            // mutating the state directly is allowed in createSlice because it uses Immer library under the hood to handle immutability
            state.cartItems = state.cartItems?.filter((item) => item != action.payload);
        },
        clearCart : (state)=>{
            state.cartItems = [];
        }

    }
});


export const { addToCart, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

