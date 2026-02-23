import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
    "process.env": "{}",
  },
  build: {
    target: "es2020",
    outDir: path.resolve(__dirname, "public/react"),
    emptyOutDir: true,
    copyPublicDir: false,
    minify: "esbuild",
    sourcemap: false,
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(__dirname, "frontend/config/main.jsx"),
      formats: ["es"],
      fileName: () => "config-app.js",
      cssFileName: "config-app",
      name: "ConfigAppBundle",
    },
  },
});
