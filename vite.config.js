import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const pwaConfigs = {
  workbox: {
    globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,jpeg}"],
  },
  manifest: {
    name: "todo app",
    short_name: "todo",
    description: "get it done",
    theme_color: "#8E389D",
    background_color: "#8E389D",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
    icons: [
      {
        src: "/icons.png",
        sizes: "152x152",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "monochrome",
      },
      {
        src: "/icons.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  },
  injectManifest: {
    globDirectory: "dist",
    globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,jpeg}"],
  },
};

export default defineConfig({
  plugins: [react(), VitePWA(pwaConfigs)],
});
