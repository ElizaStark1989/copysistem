import { createSlice } from "@reduxjs/toolkit";
import printers from "../../data/printers";

export const printersSlice = createSlice({
    name: 'printers',
    initialState: printers,
    reducers: {
        setPrinters:(state, action) => action.payload

    }
});

export const { setPrinters } = printersSlice.actions;

export default printersSlice.reducer;

