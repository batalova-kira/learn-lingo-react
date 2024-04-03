import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    token: null,
    id: null,
    name: null,
    isAuthenticated: false,
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
    },
});

export const { setUser, removeUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
