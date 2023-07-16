import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// actions
export const fetchLayouts = createAsyncThunk(
    "layouts/fetchLayouts", async () => {
        const res = await axios.get("https://layout.layoutdesign.io/api/version_1/layouts?&per_page=10");
        return res.data.data;
    }
)

// reducers
const layoutSlice = createSlice({
    name: "layouts",
    initialState: {
        loading: false,
        layouts: [],
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(
            fetchLayouts.pending, (state) => {
                state.loading = true;
            }
        );
        builder.addCase(
            fetchLayouts.fulfilled, (state, action) => {
                state.loading = false;
                state.layouts = action.payload;
                state.error = null;
            }
        );
        builder.addCase(
            fetchLayouts.rejected, (state, action) => {
                state.loading = false;
                state.layouts = [];
                state.error = action.error.message;
            }
        );
    }
})

export default layoutSlice.reducer;