# Samantha's XV Pool Party - Landing Page

Una elegante landing page para la fiesta de XV años de Samantha con temática de Pool Party, desarrollada con Astro y Tailwind CSS.

![Samantha's XV Pool Party](https://i.imgur.com/placeholder.jpg)

## Características

- Diseño moderno y colorido con temática de piscina
- Animaciones suaves y efectos interactivos
- Secciones para detalles del evento, temática, ubicación y playlist
- Completamente responsivo para todos los dispositivos
- Integración con Spotify para playlist colaborativa
- Mapa interactivo de Google Maps para la ubicación

## Tecnologías utilizadas

- [Astro](https://astro.build/) - Framework web rápido y ligero
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitario
- [Google Maps API](https://developers.google.com/maps) - Para el mapa de ubicación
- [Spotify API](https://developer.spotify.com/) - Para la integración de la playlist

## Estructura del proyecto

```text
/
├── public/
│   └── images/
│       └── pool-pattern.svg
├── src/
│   ├── components/
│   │   ├── Details.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Location.astro
│   │   ├── Playlist.astro
│   │   └── Theme.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
└── package.json
```

## Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala dependencias                             |
| `npm run dev`             | Inicia servidor local en `localhost:4321`        |
| `npm run build`           | Construye el sitio para producción en `./dist/`  |
| `npm run preview`         | Vista previa de la construcción antes de publicar|

## Personalización

Puedes personalizar fácilmente esta landing page modificando:

- Colores y estilos en `src/styles/global.css`
- Información del evento en los componentes correspondientes
- Playlist de Spotify en `src/components/Playlist.astro`
- Ubicación del mapa en `src/components/Location.astro`

## Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo LICENSE para más detalles.

---

Desarrollado con ❤️ para Samantha
