# Ruta Suzuki Piano I - Aplicación Educativa Musicala 🎹🚀

Esta es una aplicación web educativa completa e interactiva diseñada para la **Escuela de Artes Musicala**. Explica de manera clara, visual y amigable la selección y el orden sugerido de canciones por Musicala para el **Libro 1 de piano del Método Suzuki**, bajo la metodología **CREA** (Creatividad, Reflexión, Ejecución y Aprendizaje).

El objetivo principal es explicar a los estudiantes y familias que **en Musicala no sugerimos tocar de forma rígida todas las canciones del libro clásico**, sino concentrarse en esta ruta curada de piezas clave para optimizar su aprendizaje con alegría y sin estrés.

---

## Características Clave

*   **Enfoque en el Estudiante**: Todos los textos explicativos, retos y consejos están redactados hablándole directamente al estudiante ("tú") con cercanía y calidez.
*   **Bases de Práctica ("Antes de comenzar")**: 10 cimientos explicativos (postura, banca, manos relajadas, escucha, etc.) con actividades prácticas para afianzar en casa.
*   **Mapa del Recorrido**: Una senda visual responsiva de 10 etapas pedagógicas que muestra dónde encaja el repertorio clave.
*   **Ficha Detallada de Canciones**: Análisis de las 6 piezas recomendadas (#7 Mary Had a Little Lamb, #4 Lightly Row, #8 Go Tell Aunt Rhody, #10 Long Long Ago, #11 Little Playmates, #17 Allegro) con retos resumidos, pasos de estudio y consejos familiares.
*   **Teclado Virtual Interactivo**: Utiliza la **Web Audio API** del navegador para reproducir sonidos reales de sintetizador al presionar las teclas en pantalla o interactuar con el patrón de notas sugerido de cada pieza.
*   **Diseño Estático y Explicativo**: Sin sistemas de progreso complejos, casillas de verificación ni base de datos local en `localStorage`. La aplicación funciona de manera puramente explicativa y de consulta ágil.
*   **Guías Especializadas**: Secciones de orientación para acompañantes familiares y docentes.
*   **Contenido Totalmente Editable**: Toda la información de las bases, etapas y piezas está estructurada en archivos de datos TS (`src/data/*.ts`) fáciles de actualizar sin alterar el código de interfaz.

---

## Identidad de Marca

El proyecto sigue el **Manual de Marca Musicala 2026**. Todos los valores viven en el bloque `:root` de `src/index.css` — para ajustar la marca, edita ahí y no en los componentes.

### Colores

**Primarios** (págs. 18)

| Nombre | HEX | Variable |
|---|---|---|
| Azul Bach | `#220A63` | `--color-bach` |
| Azul Mozart | `#0C41C4` | `--color-mozart` |
| Violeta Beethoven | `#680DBF` | `--color-beethoven` |
| Violeta Vivaldi | `#5729FF` | `--color-vivaldi` |
| Magenta Brahms | `#CE0071` | `--color-brahms` |

**Secundarios** (pág. 19) — fondos y textos

| Nombre | HEX | Uso |
|---|---|---|
| Gris Tchaikovsky | `#232323` | Párrafos y textos largos |
| Gris Haydn | `#E6E8E8` | Bordes y bloques |
| Blanco Debussy | `#F9F9F9` | Fondo de página |
| Azul Wagner | `#0C0A1E` | Fondos oscuros |
| Azul Chopin | `#121223` | Fondos oscuros |

### Tipografía (págs. 13–16)

*   **Roboto** — familia principal, para títulos y textos (`--font-title`, `--font-body`).
*   **Calibri** — sustituto cuando Roboto no está disponible (ya declarado en el *fallback stack*).
*   **Sacramento** — sólo títulos cortos destacados (`--font-display`). Mínimo 62pt, **sólo minúsculas y nunca para números**. Usa la clase `.display-title`; su subtítulo va en Roboto Thin 24pt con `.display-subtitle`.
*   Párrafos: 11pt con interlineado 16pt (`line-height: 1.45`).

---

## Estructura de Archivos del Proyecto

```text
/src
  /data
    beforeStarting.ts  - Información de las 10 bases previas
    stages.ts          - Información pedagógica de las 10 etapas del recorrido
    pieces.ts          - Información técnica y pedagógica de las 6 piezas sugeridas
    familyGuide.ts     - Consejos para padres y acompañantes
    teacherGuide.ts    - Observaciones y pautas para docentes
  /App.tsx             - Componente principal y lógica del teclado
  /App.css             - Estilos responsivos de los componentes
  /index.css           - Variables CSS globales y fuentes de Musicala
  /main.tsx            - Punto de entrada de React
/public
  /assets
    /illustrations     - Directorio con las ilustraciones del proyecto
```

---

## Requisitos Previos

*   [Node.js](https://nodejs.org/) (Versión 18 o superior recomendada)
*   Un gestor de paquetes de Node (`npm` o `yarn`)

---

## Instrucciones de Instalación y Ejecución

### 1. Instalar dependencias
Ejecuta en tu terminal:
```bash
npm install
```

### 2. Ejecutar en modo desarrollo
Inicia el servidor local de desarrollo:
```bash
npm run dev
```
Abre la dirección `http://localhost:5173` en tu navegador.

### 3. Compilar para producción (Build)
Para generar la build de producción optimizada:
```bash
npm run build
```
Esto generará los archivos estáticos en la carpeta `dist/`, listos para ser publicados en cualquier servidor web (GitHub Pages, Firebase Hosting, Netlify, etc.) de forma gratuita.
