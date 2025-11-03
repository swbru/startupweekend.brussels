import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// Production configuration for https://startupweekend.brussels
export default defineConfig({
  site: "https://startupweekend.brussels",
  base: "/",
  output: "static",
  outDir: "dist",
  server: {
    host: true,
    port: 4321,
  },
  integrations: [react(), tailwind()],
});
