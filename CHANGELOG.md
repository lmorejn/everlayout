# Cambios

## Sin publicar

- El texto nace en la posición elegida en el estilo de página (por ejemplo, centrado en medio de la página para una portadilla) cuando la página no se llena: la última, la que termina en un salto de página o la que deja mucho blanco. También en la exportación.
- Carátula: Borrador › Metadatos del texto › Carátula carga una imagen que sale en Previsualización › Libro como cubierta. El libro se abre y se cierra con cubierta, guardas y contracubierta.
- Cubierta en Parámetros de encuadernación: material (autocubierta, cartulina estucada, kraft, cartón forrado, tela o guaflex, polipropileno) según la encuadernación, acabado (laminado mate o brillante, soft touch, UV selectivo, estampado dorado, esmerilado…) y color. La cubierta pasa con su propia rigidez.
- Plantillas de página (Maquetación › Estilo de página): clic derecho sobre una página › Marcar como plantilla de página guarda su estilo de página y los estilos de sus párrafos; la plantilla se arrastra sobre otra página (en blanco o no) o se aplica con clic en la página y luego en la plantilla.
- Ventana de estilo de página rediseñada: pestañas Página (tamaño, canon y ajuste manual de márgenes; si no coinciden con el canon, este pasa a «Personalizada»), Posición de la mancha (cuadrícula de 3 × 3 o según el canon, y líneas por página) y Cornisas y folio (cornisa desde título, autor, capítulo o sección actual, o inscripción personalizada). Una columna lateral muestra el pliego con el trazado y la mancha, y los valores resultantes. Desaparece la pestaña Organizador.
- Los títulos «Estilo de página» y «Estilo de párrafo» de sus ventanas son ahora discretos, para no confundirlos con el nombre del estilo.
- Las subsecciones de las barras laterales aparecen plegadas; cada pestaña tiene dos botones para desplegarlas o plegarlas todas, y se recuerda cuáles abriste.
- Arreglado: la barra de estado oculta, los atajos personalizados y el idioma no se recordaban al recargar.
- Menús reorganizados. Editar: Deshacer, Rehacer, Seleccionar todo el texto y Preferencias. Ver: «Calderón» pasa a «Marcas de edición» (calderón y saltos de página); Ajustar página actual a la vista, Ajustar ancho a la vista, Zoom a tamaño real; y Ver barra de estado. Ayuda: Atajos de teclado, Manual de usuario (en preparación) y Acerca de.
- Atajos de teclado personalizados: cualquier comando de los menús puede tener su propio atajo (Ayuda › Atajos de teclado, o Preferencias).
- Restaurar ajustes pasa al final de Preferencias y pide escribir RESTAURAR para confirmar.
- El aviso del modo corrección sale cada vez que entras en corrección; cerrarlo lo quita solo hasta la próxima vez.
- Preferencias reorganizadas en Interfaz (idioma y tema), Zoom (al abrir y calibración del tamaño real con tarjeta y moneda), Atajos de teclado, Efectos de sonido (máquina de escribir y paso de página) y Restaurar ajustes. Se comporta como los demás diálogos: los cambios se ven al momento, Aplicar los fija y Cerrar pregunta si quedan cambios sin aplicar.
- Las excepciones y las reglas de silabeo pasan a la barra lateral (Separación silábica › Excepciones).
- Pestañas de la barra lateral según el modo. Borrador: Metadatos del texto (los mismos de Propiedades del documento) y Estructura del manuscrito. Corrección: Estructura del manuscrito, Marcas de corrección (comentarios) y Revisión de gramática y ortografía (Harper). Maquetación: Valores por defecto (página y columna, mancha y márgenes, tipografía y separación silábica), Estilo de página, Espaciado, Estilos de párrafo, Errores de mancha y Selección. Previsualización: Parámetros de encuadernación (los mismos de Ajustes del documento y de la barra de paso de página).

## 0.9.1 «Calderón»

- El cursor ya no salta al principio del párrafo siguiente al escribir al final de un párrafo (ni con espacios al final).
- Fuentes del sistema: los selectores de fuente tienen dos grupos, «Fuentes incluidas» y «Fuentes del sistema». La opción «Fuentes del sistema…» pide la lista al sistema (en la app de escritorio, sin preguntar); donde no se puede, deja añadir una fuente instalada por su nombre. El PDF vectorial las incrusta (TrueType y OpenType/CFF); las colecciones .ttc se exportan como imagen.
- El sonido de máquina de escribir ahora es una grabación real: «Typewriter Sound Effect», de kave_msri, en Pixabay (crédito en Ayuda › Acerca de).
- Los sonidos grabados (máquina de escribir y paso de página) sonaban con el sintetizado de respaldo cuando el entorno bloqueaba `fetch` de URL `data:`; ahora se decodifican directamente.
- Tema oscuro: Preferencias › Vista › Tema (automático, claro u oscuro) y Ver › Tema oscuro.

## 0.9.0 «Calderón» — primera versión publicada

- Licencia Apache 2.0: se muestra en el instalador y en Ayuda › Acerca de, con las licencias de Harper y de las fuentes incluidas.
- Preferencias › Sonido: sonido de máquina de escribir en Borrador y Corrección (teclas, espacio, retroceso; campanilla y retorno de carro con Enter; campanilla de margen opcional; volumen).

## 0.9.0 «Calderón» — escritorio, primera compilación

- La app web pasa a este repositorio (`web/`) y se empaqueta para Windows con Electron (`desktop/`).
- Funciona sin conexión: fuentes de pantalla incluidas, Harper incluido.
- Las exportaciones abren el diálogo nativo de Guardar como.
- Compilación automática de instalador y versión portable en GitHub Actions.
