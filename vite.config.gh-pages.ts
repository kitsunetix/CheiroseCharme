import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { writeFileSync } from "fs";

// Plugin to generate 404.html with the correct base path
function generate404Html(): Plugin {
  let basePath: string;
  
  return {
    name: 'generate-404-html',
    configResolved(config) {
      basePath = config.base;
    },
    closeBundle() {
      const html = `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Redirecting...</title>
    <script>
      // GitHub Pages SPA redirect
      // This script stores the attempted path and redirects to index.html at the base path
      (function() {
        const { pathname, search, hash } = window.location;
        
        // Store the full attempted URL for the router to restore
        sessionStorage.setItem('redirectPath', pathname + search + hash);
        
        // Redirect to index.html at the configured base path
        var basePath = '${basePath}';
        window.location.replace(window.location.origin + basePath + 'index.html');
      })();
    </script>
  </head>
  <body>
    <p>Redirecting...</p>
  </body>
</html>`;
      
      const outDir = path.resolve(import.meta.dirname, "dist/public");
      writeFileSync(path.join(outDir, '404.html'), html);
    },
  };
}

export default defineConfig({
  plugins: [react(), generate404Html()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  base: process.env.VITE_BASE_PATH || "/",
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
});
