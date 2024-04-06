import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import App from "./сomponents/App";

import { GlobalStyle } from "./сomponents/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import "./firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter basename="/learn-lingo-react">
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <App />
                    <GlobalStyle />
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
