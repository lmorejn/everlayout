# Cambios

## Sin publicar

- El cursor ya no salta al principio del párrafo siguiente al escribir al final de un párrafo (ni con espacios al final).
- Fuentes del sistema: los selectores de fuente tienen dos grupos, «Fuentes incluidas» y «Fuentes del sistema». La opción «Fuentes del sistema…» pide la lista al sistema (en la app de escritorio, sin preguntar); donde no se puede, deja añadir una fuente instalada por su nombre. El PDF vectorial las incrusta (TrueType y OpenType/CFF); las colecciones .ttc se exportan como imagen.
- El sonido de máquina de escribir ahora es una grabación real: «Typewriter Sound Effect», de kave_msri, en Pixabay (crédito en Ayuda › Acerca de).
- Tema oscuro: Preferencias › Vista › Tema (automático, claro u oscuro) y Ver › Tema oscuro.

## 0.9.0 «Calderón» — primera versión publicada

- Licencia Apache 2.0: se muestra en el instalador y en Ayuda › Acerca de, con las licencias de Harper y de las fuentes incluidas.
- Preferencias › Sonido: sonido de máquina de escribir en Borrador y Corrección (teclas, espacio, retroceso; campanilla y retorno de carro con Enter; campanilla de margen opcional; volumen).

## 0.9.0 «Calderón» — escritorio, primera compilación

- La app web pasa a este repositorio (`web/`) y se empaqueta para Windows con Electron (`desktop/`).
- Funciona sin conexión: fuentes de pantalla incluidas, Harper incluido.
- Las exportaciones abren el diálogo nativo de Guardar como.
- Compilación automática de instalador y versión portable en GitHub Actions.
