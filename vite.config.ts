import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  build: {
    // Minificación con esbuild (más rápido y compatible)
    minify: 'esbuild',

    // Configuración de target para mejor compatibilidad
    target: 'es2015',

    // Code splitting optimizado
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar vendor chunks para mejor caching
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['framer-motion', 'react-fast-marquee'],
        },
        // Nombres de archivos con hash para cache busting
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },

    // Optimizaciones adicionales
    cssCodeSplit: true, // Separar CSS por chunks
    sourcemap: false, // Desactivar sourcemaps en producción
    reportCompressedSize: false, // Más rápido en build
    chunkSizeWarningLimit: 1000, // Advertir si chunks > 1MB
  },

  // Optimización de dependencias
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'react-fast-marquee'],
  },

  // Configuración de servidor para desarrollo
  server: {
    headers: {
      // Headers de cache para desarrollo
      'Cache-Control': 'public, max-age=0',
    },
  },

  // Preview server (para testing de producción)
  preview: {
    headers: {
      // Headers de cache para assets estáticos
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  },
});
