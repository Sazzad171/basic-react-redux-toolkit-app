import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import layoutSlice from "../features/layouts/layoutSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        layouts: layoutSlice
    }
});

export default store;