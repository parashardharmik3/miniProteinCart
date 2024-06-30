import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  carts:[],
}

export const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
      add: (state, action) => {
        state.carts.push(action.payload);
      },
      remove: (state, action) => {
        state.carts = state.carts.filter(item => item.id !== action.payload.id);
      },
    },
  });
  
  // Action creators are generated for each case reducer function
  export const { add, remove } = cartSlice.actions;
  

export default cartSlice.reducer