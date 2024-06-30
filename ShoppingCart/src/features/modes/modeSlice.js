import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modes: false,
}

export const modeSlice = createSlice({
  name: 'modes',
  initialState,
  reducers: {
    toggleState: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      if(state.modes === true){
        state.modes = false;
      }else{
        state.modes = true;
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const {toggleState } = modeSlice.actions

export default modeSlice.reducer