import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "frontend",          // frontend/ folder mein index.html hai
  build: {
    outDir: "../dist",       // build output root mein jaayega
    emptyOutDir: true,
  },
});
