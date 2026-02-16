import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice(
{
  name: "counterSlice",
  initialState:{value:0},
  reducers: 
  {
    incrementAction: (state,action) => 
    {
        console.log(state,action);
        
      state.value += 1
    },
    decrementAction: (state,action) => 
    {
        console.log(state,action);

      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmountAction: (state, action) => 
    {
        console.log(state,action);

      state.value += action.payload
    },
  },
});

export const { incrementAction, decrementAction, incrementByAmountAction} = CounterSlice.actions;

export default CounterSlice.reducer;

