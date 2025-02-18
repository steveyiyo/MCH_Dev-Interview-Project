import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/MCH_Dev-Interview-Project/',
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
