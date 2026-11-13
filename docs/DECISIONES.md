# Decisiones y hoja de ruta

## Decisiones tomadas

- **Una sola fuente para web y escritorio.** `web/index.html` es la app; el escritorio la envuelve sin modificarla salvo las fuentes (ver `desktop/build-web.js`).
- **Electron como envoltorio (no Tauri, por ahora).** Lleva su propio Chromium, así que el texto se mide igual en todos los sistemas y los cortes de línea no cambian entre equipos. Tauri usa el navegador del sistema y podría mover cortes hasta que el motor mida con su propio sistema de dibujo de texto.
- **La app se sirve desde `app://skoxas/`** (protocolo propio) y no desde `file://`, para que funcionen `fetch`, los módulos y WebAssembly (Harper y las fuentes del PDF).
- **Fuentes incluidas.** En pantalla, WOFF2 variables (Archivo con ejes de peso y ancho; Lora, EB Garamond, Libre Baskerville y Figtree con eje de peso). En el PDF, los TTF de `web/fonts/`. Sin conexión no se pierde nada.
- **Pruebas en Windows.** Los instaladores se compilan en GitHub Actions (`windows-latest`).

## Hoja de ruta

1. **Archivos de verdad.** Hoy los documentos se guardan en el almacenamiento interno de la app. Pasar a archivos `.skoxa` con Abrir/Guardar nativos, documentos recientes y asociación de archivos.
2. **Impresión nativa** con elección de impresora y vista previa del sistema.
3. **Rendimiento con libros largos.** Dibujar solo las páginas visibles (o en canvas) en lugar de una etiqueta HTML por palabra.
4. **Motor en Rust** (silabeo, corte óptimo, paginación y medición con HarfBuzz), compilado a WebAssembly para la app y como biblioteca para una extensión de LibreOffice Writer. Medida idéntica en pantalla y PDF, con interletraje, ligaduras y versalitas reales.
5. **Con el motor propio, valorar Tauri** para instaladores de ~10 MB.
6. **Firma de código** de los instaladores (Windows y, si llega, macOS).
