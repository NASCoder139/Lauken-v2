# Lago Rapel Propiedades — Landing (React)

Landing page de **Lago Rapel Propiedades** (marcas **Laukén Inmobiliaria** y
**Goycoolea Propiedades**), reconstruida como aplicación **React** a partir del
diseño original de Claude Design.

Stack alineado con el proyecto `lauken`: **Vite + React 18 + Tailwind CSS 3 +
framer-motion**.

## Requisitos

- Node.js 18+ y npm

## Cómo correr (local)

```bash
npm install      # solo la primera vez
npm run dev      # servidor local de desarrollo
```

Luego abre **http://localhost:5173/**

Otros scripts:

```bash
npm run build    # build de producción -> dist/
npm run preview  # sirve el build de producción localmente
```

## Estructura

```
.
├── index.html                  <- entry de Vite (fuentes Google + <div id="root">)
├── vite.config.js
├── tailwind.config.js          <- paleta: navy, gold, cream, green
├── postcss.config.js
├── public/
│   └── assets/lago-rapel.png   <- foto del lago (usada en los image slots)
├── src/
│   ├── main.jsx
│   ├── App.jsx                 <- ensambla todas las secciones
│   ├── styles/index.css        <- Tailwind + base
│   ├── data/content.js         <- textos: marcas, categorías, propiedades, etc.
│   └── components/
│       ├── ui/                 <- Reveal, ImageSlot, Button, icons
│       ├── sections/           <- Hero, BrandCards, Categories, FeaturedProperties,
│       │                          QualityBanner, Locations, Aculeo, WhyChooseUs, FinalCTA
│       └── layout/Footer.jsx
└── _design-original/           <- diseño original de Claude Design (referencia)
    ├── Lago Rapel Propiedades.dc.html
    ├── support.js
    └── image-slot.js
```

## Notas de la conversión

- Cada sección `<!-- ... -->` del HTML original quedó como un componente en
  `src/components/sections/`.
- Los estilos inline se migraron a **Tailwind** (con arbitrary values para los
  `clamp()` responsivos, respetando los tamaños originales).
- La animación `[data-reveal]` (IntersectionObserver del diseño) se reemplazó por
  el componente `Reveal` con **framer-motion** (`whileInView`).
- El componente `<image-slot>` de Claude Design se reemplazó por `ui/ImageSlot`.
  Como las 3 imágenes originales eran la **misma foto del lago**, se reutiliza esa
  imagen en todos los slots. Para reemplazar una imagen, pasa `src` a `ImageSlot`
  o edita los datos en `src/data/content.js`.
- **Fuentes:** Playfair Display (títulos) y Montserrat (texto), vía Google Fonts.

## Pendientes / siguientes pasos

- Reemplazar la imagen única por las fotos reales de cada sección/propiedad.
- Conectar los botones "VER MÁS" / "VER PROPIEDAD" a sus rutas o enlaces reales.
- (Opcional) Agregar `react-router-dom` si se suman páginas internas, como en `lauken`.
