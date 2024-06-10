import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

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
