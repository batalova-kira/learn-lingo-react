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
            state.favorite = [];
        },
        setToken: (state, { payload }) => {
            state.token = payload;
        },
        setSelectedLevel: (state, { payload }) => {
            state.selectedLevel = payload;
        },
        toggleFavorite: (state, { payload }) => {
            const teacherId = payload.id;
            if (teacherId) {
                const index = state.favorite.findIndex(
                    (item) => item.id === teacherId
                );
                if (index === -1) {
                    state.favorite.push(payload);
                } else {
                    state.favorite.splice(index, 1);
                }
            }
        },
        setUserFavorites: (state, { payload }) => {
            state.favorite = payload;
        },
    },
});

export const {
    setUser,
    removeUser,
    setToken,
    setSelectedLevel,
    toggleFavorite,
    setUserFavorites,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
