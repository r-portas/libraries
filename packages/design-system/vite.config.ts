import react from "@vitejs/plugin-react";
import dts from "unplugin-dts/vite";
import { defineConfig } from "vite";

import packageJson from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.tsx",
      fileName: "index",
      formats: ["es"],
    },
    rolldownOptions: {
      external: [
        // Mark all peer dependencies as external
        ...Object.keys(packageJson.peerDependencies),
        // Also mark the JSX runtime as external too
        "react/jsx-runtime",
      ],
    },
  },
  server: {
    port: 3000,
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    react(),
    dts({
      // Include just the source files for type generation
      include: ["src"],
      // Set the rootDir as "src", so "src/index.tsx" becomes "dist/index.d.ts"
      compilerOptions: { rootDir: "src" },
    }),
  ],
});
