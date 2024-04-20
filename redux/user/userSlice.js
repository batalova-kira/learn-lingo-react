import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    token: null,
    id: null,
    name: null,
    isAuthenticated: false,
    selectedLevel: null,
    favorite: [],
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.email = payload.email;
            state.token = payload.token;
            state.id = payload.id;
            state.name = payload.name;
            state.isAuthenticated = true;
        },
        removeUser: (state) => {
            state.email = null;
            state.token = null;
            state.id = null;
            state.name = null;
            state.isAuthenticated = false;
        },
        setToken: (state, { payload }) => {
            state.token = payload;
        },
        setSelectedLevel: (state, { payload }) => {
            state.selectedLevel = payload;
        },
        toggleFavorite: (state, { payload }) => {
            const index = payload.index;
            if (index !== undefined) {
                const existingIndex = state.favorite.findIndex(
                    (car) => car.index === index
                );
                if (existingIndex === -1) {
                    state.favorite.push({ index });
                } else {
                    state.favorite.splice(existingIndex, 1);
                }
            }
        },
    },
});

export const {
    setUser,
    removeUser,
    setToken,
    setSelectedLevel,
    toggleFavorite,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
