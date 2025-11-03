import { defineConfig } from 'astro/config';

// For GitHub Project Pages, Astro needs a base path matching the repository name.
// The installer will replace startup-weekend-brussels with your repository slug.
export default defineConfig({
  site: 'https://__GITHUB_USER__.github.io/startup-weekend-brussels/',
  base: '/startup-weekend-brussels/',
  outDir: 'dist',
  server: {
    host: true,
    port: 4321
  }
});
