import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    federation({
      name: "cart_mfe",
      filename: "remoteEntry.js",
      exposes: {
        "./CartApp": "./src/CartApp.tsx",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
    resolve: {
      alias: {
        "@shared": path.resolve(__dirname, "../packages"),
      },
    },
  
  build: {
    target: "esnext",
    modulePreload: false,
    cssCodeSplit: false,
      rollupOptions: {
      output: {
        manualChunks: {
          axiosVendor: ['axios'],
        },
      },
    },
  },
  server: {
    port: 3002,
    cors: true,
    origin: "http://localhost:3002"
  },
});
