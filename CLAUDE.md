# Instrucciones para Claude en este repositorio

- El usuario (Luis) escribe en español; responde en español. Los textos de la interfaz también van en español.
- `web/index.html` es la app entera (interfaz, motor de justificado, exportación). Edita ahí; no dupliques código en `desktop/`.
- La interfaz sigue el sistema de diseño Astryx (variables CSS `--color-*`, `--spacing-*`, `--radius-*`).
- Antes de subir cambios de la app: prueba en un navegador sin cabeza (Playwright) sirviendo `web/` con `python3 -m http.server`, y si tocas `desktop/`, prueba con `xvfb-run` + Electron.
- La versión web también se publica como artefacto de Claude (Banco de justificado); mantenlos en sincronía.
- Registra decisiones nuevas en `docs/DECISIONES.md` y cambios visibles en `CHANGELOG.md`.
- Cada push a `main` compila los instaladores de Windows y los publica en Releases bajo `v<versión de desktop/package.json>`. Para abrir una versión nueva, sube ese número (y `APP_VERSION` en `web/index.html`) y pasa las notas de «Sin publicar» del CHANGELOG a la nueva versión.
