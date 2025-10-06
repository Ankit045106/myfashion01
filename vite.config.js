import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/myfashion01/', // 👈 IMPORTANT: same as your repo name
});
