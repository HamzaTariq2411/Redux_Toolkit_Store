import { createSlice } from '@reduxjs/toolkit';

export const Status = Object.freeze({
    IDLE : 'idle',
    ERROR : 'error',
    LOADING: 'loading', 
});

const initialState = {
    data:[],
    status:Status.IDLE
}
const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        setProducts(state,action){
            state.data = action.payload
        },
        setStatus(state,action){
            state.status=action.payload
        }
    }
})


export const {setProducts , setStatus} = productSlice.actions;
export default productSlice.reducer;

export function fetchProducts(){
    return async function fetchProductThunk(dispatch,getState){
        dispatch(setStatus(Status.LOADING));
        try {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            dispatch(setProducts(data));
            dispatch(setStatus(Status.IDLE));
        } catch (error) {
            console.log(error);
        }  
    }
}