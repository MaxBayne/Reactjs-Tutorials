import { configureStore } from '@reduxjs/toolkit'

import CounterReducer from '@/redux/slices/counterSlice'

export const store = configureStore({
  reducer: {
    counterReducer: CounterReducer,
  

  },
})