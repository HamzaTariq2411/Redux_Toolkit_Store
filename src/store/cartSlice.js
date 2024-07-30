import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name : 'cart',
    initialState: [], 
    reducers:{
        add (state, action) {
            const newItem = action.payload;

            const existingItem = state.find(item => item.id === newItem.id);
            if (!existingItem) {
                state.push(newItem);
            } else {
                console.log("Item already exists in the cart!");
            }
        },
        remove (state, action) {
            return state.filter( (item) => item.id !== action.payload)
        },
    }
})

export const {add,remove} = cartSlice.actions;
export default cartSlice.reducer;