import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0,
    showCounter: true,    
  },
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increaseBy(state, action) { 
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  }
})

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;