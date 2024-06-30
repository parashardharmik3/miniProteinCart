import { configureStore } from '@reduxjs/toolkit'
import modeReducers from '../features/modes/modeSlice'
import cartReducers from '../features/carts/cartSlice'
export const store = configureStore({
  reducer: {
    modes:modeReducers,
    carts:cartReducers
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false, // Disable SerializableStateInvariantMiddleware
  })
})