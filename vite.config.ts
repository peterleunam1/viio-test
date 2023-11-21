import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: resolve(__dirname, 'src', 'app'),
      components: resolve(__dirname, 'src', 'components'),
      constant: resolve(__dirname, 'src', 'constant'),
      context: resolve(__dirname, 'src', 'context'),
      guards: resolve(__dirname, 'src', 'guards'),
      hooks: resolve(__dirname, 'src', 'hooks'),
      models: resolve(__dirname, 'src', 'models'),
      pages: resolve(__dirname, 'src', 'pages'),
      services: resolve(__dirname, 'src', 'services'),
      utils: resolve(__dirname, 'src', 'utils'),
    },
  },
})
