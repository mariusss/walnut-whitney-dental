import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

const root = process.cwd();

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.join(root, "client", "src"),
      "@shared": path.join(root, "shared"),
      "@assets": path.join(root, "attached_assets"),
    },
  },
  envDir: root,
  root: path.join(root, "client"),
  publicDir: path.join(root, "client", "public"),
  build: {
    outDir: path.join(root, "dist/public"),
    emptyOutDir: true,
  },
});
