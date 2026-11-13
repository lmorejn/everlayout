# Skoxa's — Software de maquetado editorial

Versión 0.9.0 «Calderón». Programa de maquetación para libros en español: justificado con silabeo propio, corte óptimo de párrafos, control de calles, ríos, viudas y huérfanas, cánones de mancha de Jorge de Buen, estilos de párrafo y de página, flujo editorial (Borrador → Corrección → Maquetación → Previsualización) y simulación del libro impreso (papel, transparencia, encuadernación y cuadernillos).

## Estructura

| Carpeta | Qué contiene |
|---|---|
| `web/` | La app completa: `index.html` (interfaz y motor), `fonts/` (TTF para el PDF y WOFF2 para la pantalla), `harper/` (corrector Harper en WebAssembly). Es la única fuente: la versión web y la de escritorio salen de aquí. |
| `desktop/` | Envoltorio de escritorio con Electron. `build-web.js` copia `web/` a `desktop/app/` y la deja lista para funcionar sin conexión. |
| `.github/workflows/` | Compilación automática de los instaladores de Windows. |
| `docs/` | Decisiones de diseño y hoja de ruta. |

## Descargar el programa

Todas las versiones, con sus instaladores, están en **[Releases](https://github.com/lmorejn/everlayout/releases)**. Cada versión trae dos archivos:

- `Skoxas-<versión>-win-x64.exe`: instalador.
- `Skoxas-<versión>-portable.exe`: se ejecuta sin instalar.

Cómo se generan: cada cambio subido a `main` compila Windows en GitHub Actions y deja los instaladores en la entrada de Releases de la versión indicada en `desktop/package.json`. Mientras no cambie ese número, la entrada se actualiza con la última compilación; al subir el número (por ejemplo a 0.9.1) se crea una entrada nueva y la anterior queda guardada.

Los binarios no están firmados: Windows SmartScreen mostrará un aviso la primera vez (*Más información › Ejecutar de todas formas*).

## Compilar en tu equipo

```bash
cd desktop
npm install
npm start          # abre la app
npm run dist:win   # genera los instaladores en desktop/dist
```

## Licencia

Apache 2.0. Harper (en `web/harper/`) y las fuentes incluidas tienen sus propias licencias libres (Apache 2.0 y SIL Open Font License).
