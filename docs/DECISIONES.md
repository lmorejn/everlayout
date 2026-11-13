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

## Fuentes del sistema
- Se listan con la API Local Font Access (`window.queryLocalFonts`). Electron concede el permiso `local-fonts` sin preguntar. En navegadores sin la API (o en el artefacto, que corre en un iframe), se añade la fuente a mano por su nombre y se comprueba midiéndola con canvas.
- La lista guardada (`S.sysFonts`) solo tiene familia, pesos y si hay cursiva; los archivos se leen al exportar. El PDF vectorial lee las métricas del propio archivo (cmap 4, hmtx, head, hhea, OS/2) y lo incrusta entero: TrueType como FontFile2, CFF como FontFile3/OpenType (PDF 1.6). Si no se puede (p. ej. .ttc), se exporta como imagen.

## Sonido de máquina de escribir
- Se usa la primera parte de «Typewriter Sound Effect» (kave_msri, Pixabay) recortada en un sprite: 10 teclas, espacio, retroceso, campanilla y retorno. Si el audio no se puede decodificar, se vuelve al sonido sintetizado.

## Menús y atajos
- Los menús se limitan a lo que se busca en un menú. Salieron de Editar: borrar la selección, duplicar, limpiar, insertar calderón, panel de selección, texto de muestra, copiar texto y copiar/pegar ajustes; sus acciones siguen en el código (`ACTIONS`) por si se reubican, y los que tenían tecla (Supr, ¶) la conservan.
- Los atajos del usuario (`S.userKeys`, combinación → comando de `MENUS`) tienen prioridad sobre los predefinidos y exigen Ctrl, Alt/⌥, Win/⌘ o una tecla F, para no chocar con la escritura.

