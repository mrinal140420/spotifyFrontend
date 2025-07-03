import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/spotifyFrontend/', // your repo name with trailing slash
  plugins: [react()],
});
