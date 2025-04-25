# Documentación del Sitio Web "Voces del Alma"

## Introducción

Este documento proporciona información detallada sobre el sitio web creado para el podcast "Voces del Alma". El sitio ha sido diseñado siguiendo las especificaciones proporcionadas, con un enfoque en la calidez, conexión emocional y autenticidad que caracteriza al podcast.

## Estructura del Sitio

El sitio web consta de las siguientes páginas:

1. **Página de Inicio (index.html)**
   - Presentación del podcast
   - Episodios recientes
   - Información sobre el autor
   - Enlaces a plataformas de podcast

2. **Página de Episodios (episodios.html)**
   - Listado completo de episodios
   - Funcionalidad de búsqueda
   - Tarjetas con información de cada episodio

3. **Página de Episodio Individual (episodio.html)**
   - Reproductor de audio
   - Información detallada del episodio
   - Transcripción completa
   - Botones para compartir
   - Navegación entre episodios

4. **Sobre el Podcast (sobre.html)**
   - Historia del podcast
   - Información sobre Anthony Tepach
   - Visión y propósito

5. **Contacto (contacto.html)**
   - Formulario de contacto
   - Información de contacto alternativa
   - Preguntas frecuentes

## Características Principales

### Diseño Responsive
El sitio está completamente optimizado para todos los dispositivos, desde móviles hasta pantallas de escritorio, garantizando una experiencia de usuario consistente.

### Reproductor de Audio
Cada episodio cuenta con un reproductor de audio integrado que permite escuchar los episodios directamente en el sitio.

### Modo Oscuro/Claro
El sitio incluye un toggle para cambiar entre modo claro y oscuro, respetando la paleta de colores establecida.

### Accesibilidad
Se han implementado características de accesibilidad siguiendo las mejores prácticas:
- Etiquetas ARIA
- Estructura semántica
- Enlaces para saltar al contenido principal
- Alto contraste en textos
- Navegación por teclado

### Integración con Feed RSS
El sitio está conectado al feed RSS del podcast, lo que permite mostrar automáticamente los episodios más recientes.

## Paleta de Colores

La paleta de colores implementada es la siguiente:

- **Base y fondos**:
  - #E5D3B8 (beige claro principal)
  - #D6C3A7 (beige cálido)
  - #F8F2E6 (blanco roto)

- **Textos y acentos oscuros**:
  - #7E4B3A (marrón oscuro)
  - #9C5343 (marrón terroso)

- **Acentos vibrantes**:
  - #B5694F (marrón rojizo)
  - #7EAB3A (verde oliva)

## Tipografía

- **Títulos**: Bebas Neue
- **Texto cuerpo**: Quicksand

## Archivos y Estructura de Directorios

```
voces-del-alma/
├── css/
│   ├── styles.css       # Estilos principales
│   └── responsive.css   # Estilos adicionales y responsive
├── js/
│   ├── main.js          # Funcionalidad general
│   ├── episodes.js      # Funcionalidad para página de episodios
│   ├── episodio.js      # Funcionalidad para página de episodio individual
│   └── contact.js       # Funcionalidad para formulario de contacto
├── img/
│   └── [imágenes del sitio]
├── index.html           # Página de inicio
├── episodios.html       # Página de listado de episodios
├── episodio.html        # Plantilla para página de episodio individual
├── sobre.html           # Página sobre el podcast
└── contacto.html        # Página de contacto
```

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- Font Awesome (para iconos)
- Google Fonts (Bebas Neue y Quicksand)

## Instrucciones para Mantenimiento

### Añadir Nuevos Episodios

Para añadir nuevos episodios, se recomienda:

1. Actualizar el feed RSS en la plataforma de podcast (Anchor.fm)
2. Los episodios se cargarán automáticamente en el sitio web

Si desea añadir manualmente un episodio, puede editar el archivo `js/episodes.js` y añadir un nuevo objeto al array de episodios.

### Personalización

- **Cambiar colores**: Editar las variables CSS en el archivo `css/styles.css`
- **Modificar textos**: Editar directamente los archivos HTML correspondientes
- **Cambiar imágenes**: Reemplazar los archivos en la carpeta `img/` manteniendo los mismos nombres

### Hospedaje Recomendado

El sitio está optimizado para ser alojado en cualquier servicio de hosting estático como:
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

## Optimizaciones Realizadas

- Carga diferida de imágenes
- Minificación de CSS y JavaScript
- Optimización de fuentes web
- Estructura semántica para SEO
- Metadatos Open Graph para compartir en redes sociales

## Soporte y Contacto

Para cualquier consulta o soporte adicional relacionado con el sitio web, no dude en contactarnos.

---

Desarrollado con ❤️ para el podcast "Voces del Alma"
