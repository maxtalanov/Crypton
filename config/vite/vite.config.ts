import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(async () => {

    return {
        plugins: [
            tsconfigPaths(),
            react(),
            checker({
                typescript: true,
            }),
        ],
    }
})
