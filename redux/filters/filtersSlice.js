import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        filterLanguage: "",
        filterLevel: "",
        filterPrice: "",
    },
    reducers: {
        setFilterLanguage(state, { payload }) {
            state.filterLanguage = payload;
        },
        setFilterLevel(state, { payload }) {
            state.filterLevel = payload;
        },
        setFilterPrice(state, { payload }) {
            state.filterPrice = payload;
        },
    },
});

export const { setFilterLanguage, setFilterLevel, setFilterPrice } =
    filtersSlice.actions;

export const filterReducer = filtersSlice.reducer;
