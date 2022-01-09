import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: 'https://leonardoalonso.github.io/actions-course/',
    plugins: [react()]
})
