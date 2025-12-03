# 🚀 Portfolio de Wilmer Espinal

Portfolio personal de Full Stack Developer especializado en desarrollo web y móvil.

## 🛠️ Tecnologías

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Build Tool**: Vite 7
- **Hosting**: Cloudflare Pages

## ✨ Características

- ✅ Diseño responsive y moderno
- ✅ Animaciones fluidas con Framer Motion
- ✅ Optimizado para rendimiento (PageSpeed > 90)
- ✅ Imágenes optimizadas con WebP
- ✅ Code splitting automático
- ✅ SEO optimizado
- ✅ Cache agresivo para assets estáticos

## 🚀 Optimizaciones Implementadas

### Performance
- Lazy loading de imágenes
- Conversión automática a WebP
- Code splitting de vendors
- Minificación con esbuild
- Cache headers optimizados
- DNS prefetch y preconnect

### SEO
- Meta tags completos
- Open Graph tags
- Twitter Cards
- Estructura semántica HTML5

Ver detalles completos en [OPTIMIZACIONES_RESUMEN.md](./OPTIMIZACIONES_RESUMEN.md)

## 📦 Instalación

```bash
# Clonar repositorio
git clone <repo-url>

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📊 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run preview` - Preview del build
- `npm run lint` - Linter de código
- `./analyze-bundle.sh` - Analizar tamaño del bundle

## 📁 Estructura del Proyecto

```
portfolio_v2/
├── src/
│   ├── components/
│   │   ├── OptimizedImage.tsx   # Componente de imagen optimizada
│   │   ├── proyectos.tsx         # Sección de proyectos
│   │   ├── about.tsx             # Sección sobre mí
│   │   └── ...
│   ├── app.tsx                   # Componente principal
│   ├── main.tsx                  # Entry point
│   └── index.css                 # Estilos globales
├── public/
│   └── _headers                  # Headers de cache para Cloudflare
├── dist/                         # Build de producción
├── vite.config.ts                # Configuración de Vite
└── wrangler.jsonc                # Configuración de Cloudflare Pages
```

## 📚 Documentación

- [Guía de Optimización de Imágenes](./OPTIMIZACION_IMAGENES.md)
- [Resumen de Optimizaciones](./OPTIMIZACIONES_RESUMEN.md)
- [Checklist de Verificación](./CHECKLIST_VERIFICACION.md)

## 🎯 Métricas de Performance

- **LCP**: < 2.5s
- **FCP**: < 1.5s
- **Bundle Size**: ~450KB
- **PageSpeed Score**: 85-95

## 🚀 Deploy

### Cloudflare Pages

```bash
# Build
npm run build

# Deploy
npx wrangler pages deploy dist
```

## 📝 Licencia

MIT

## 👤 Autor

**Wilmer Espinal**
- GitHub: [@WilmerEspinal](https://github.com/WilmerEspinal)
- LinkedIn: [wilmerev](https://www.linkedin.com/in/wilmerev/)
- Email: wespinalvi@gmail.com