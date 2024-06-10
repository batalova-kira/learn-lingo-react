import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// Завантажити змінні оточення з файлу .env
dotenv.config();

export default defineConfig({
    plugins: [react()],
    define: {
        "process.env": process.env,
    },
    server: {
        port: 3000,
        open: true,
    },
    build: {
        outDir: "./dist",
        assetsDir: "assets",
    },
    css: {
        modules: false,
    },
    base: "/learn-lingo-react",
});
