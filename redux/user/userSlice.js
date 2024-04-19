import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    token: null,
    id: null,
    name: null,
    isAuthenticated: false,
    selectedLevel: null,
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
    },
});

export const { setUser, removeUser, setToken, setSelectedLevel } =
    userSlice.actions;
export const userReducer = userSlice.reducer;
