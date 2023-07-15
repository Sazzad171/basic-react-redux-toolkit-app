import { createSlice } from "@reduxjs/toolkit";

// reducer
const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
    },
    reducers: {
        increment: state => {
            state.count = state.count + 1;
        },
        decrement: state => {
            state.count = state.count - 1;
        },
        reset: state => {
            state.count = 0
        },
        countByAmount: state => {
            state.count = state.count + 4
        }
    }
});

// actions
export const { 
    increment,
    decrement,
    reset,
    countByAmount
 } = counterSlice.actions;

export default counterSlice.reducer;