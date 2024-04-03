import { configureStore } from "@reduxjs/toolkit";

import {
    persistStore,
    // persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
// import storage from "redux-persist/lib/storage";
import { userReducer } from "./user/userSlice";
import { modalReducer } from "./modal/modalSlice";

// const userConfig = {
//     key: "user",
//     storage,
//     whitelist: ["favorite"],
//     // blacklist: ['isLoading', 'error'],
// };

export const store = configureStore({
    reducer: {
        user: userReducer,
        modal: modalReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);
