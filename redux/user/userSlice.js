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
            // Зчитування фейворитів з локального сховища при вході користувача
            const favorites = localStorage.getItem(payload.id);
            if (favorites) {
                state.favorite = JSON.parse(favorites);
            }
        },
        removeUser: (state) => {
            if (state.isAuthenticated) {
                // Очищення фейворитів лише для аутентифікованого користувача
                state.favorite = [];
            }
            state.email = null;
            state.token = null;
            state.id = null;
            state.name = null;
            state.isAuthenticated = false;
            localStorage.removeItem("id");
        },
        setToken: (state, { payload }) => {
            state.token = payload;
        },
        setSelectedLevel: (state, { payload }) => {
            state.selectedLevel = payload;
        },
        toggleFavorite: (state, { payload }) => {
            const teacherId = payload.id;
            if (state.isAuthenticated) {
                // Перевірка, чи користувач аутентифікований
                const index = state.favorite.findIndex(
                    (item) => item.id === teacherId
                );
                if (index === -1) {
                    state.favorite.push(payload);
                } else {
                    state.favorite.splice(index, 1);
                }
                // Збереження оновлених фейворитів в локальному сховищі під ключем ідентифікатора користувача
                localStorage.setItem(state.id, JSON.stringify(state.favorite));
            }
        },
        // setUserFavorites: (state, { payload }) => {
        //     state.favorite = payload;
        // },
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
