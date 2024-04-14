import React from "react";
import ReactDOM from "react-dom/client";
import App from "./сomponents/App";

import { GlobalStyle } from "./сomponents/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import "./firebase";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        background: "#fff",
        secondBackground: "#f8f8f8",
        heroBackground: "#F2C0BD",
        darkPink: "#B03F3E",
        pink: "#E0A39A",
        black: "#121417",
        lightPink: "#DCAEA0",
        secondBlack: "rgba(18, 20, 23, 0.7)",
        modalBlack: "rgba(18, 20, 23, 0.8)",
        borderBlack: "rgba(18, 20, 23, 0.1)",
    },
    // radii: {
    //     sm: "4px",
    //     md: "10px",
    //     lg: "70px",
    // },
    spacing: (value) => `${value * 4}px`,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter basename="/learn-lingo-react">
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <ThemeProvider theme={theme}>
                        <App />
                        <GlobalStyle />
                    </ThemeProvider>
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
