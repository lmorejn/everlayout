# Cambios

## Sin publicar

- Fotos: un clic selecciona una foto (marco del color de acento) y Supr o Retroceso la borra; en una fila solo se quita esa foto. Esc quita la selección y Ctrl+Z la recupera.
- Fotos SVG: se guardan como vector (nítidas a cualquier tamaño) y con su transparencia; las PNG, GIF o WebP con transparencia la conservan; en el PDF llevan su canal alfa. Las fotos ya no tienen fondo gris ni se recortan.
- Filas de fotos: con el ratón sobre una foto aparecen botones + a los lados para añadir otra a la izquierda o a la derecha (también soltándola sobre la mitad izquierda o derecha de una foto). Las fotos de una fila comparten altura, cada una con su pie, y el tirador ajusta la fila entera.
- Fuentes variables importadas: se leen sus ejes (peso y ancho), así que el peso se puede mover en todo su rango en los estilos de párrafo y el ancho ofrece los valores que admite la fuente. En el PDF se usa su instancia por defecto con la negrita simulada.
- Fotos en Borrador y Corrección: botón «Foto…» en la barra o arrastrarlas sobre la hoja. Cada foto ocupa su propio renglón y empuja el texto; se ajusta a la rejilla de líneas. El tirador de la esquina cambia su tamaño; con el ratón encima aparece «Doble clic para añadir una descripción» debajo, y la descripción queda como pie. Se guardan en el texto como `![descripción](img:id)` (sintaxis de Markdown) y salen también en Maquetación, Previsualización y el PDF vectorial. Al escribir junto a una foto, el texto va a un renglón propio; Retroceso o Supr primero la seleccionan.
- Fuentes importadas: «Importar archivos de fuente…» en la lista de fuentes, o arrastrar archivos TTF, OTF, WOFF o WOFF2 sobre la ventana. Se guardan en el navegador (o en la app de escritorio) y aparecen en el grupo «Fuentes importadas»; las TTF, OTF y WOFF se incrustan en el PDF.
- Las fuentes del sistema se buscan de nuevo al volver a la ventana, para encontrar las que se instalen con la app abierta.
- Arreglado: con el cursor en una línea vacía, cambiar el formato en la lista «Párrafo» de la barra de herramientas cambiaba el párrafo de arriba. Ahora el formato es solo de esa línea y lo que se escriba en ella lo toma; la lista muestra «Texto» en una línea vacía.
- Fuentes del sistema: si el entorno no deja listar las fuentes (como el artefacto web), la app busca entre unas 250 familias habituales de Windows, macOS, Linux, Office, Adobe y Google cuáles están instaladas, las pone en el grupo «Fuentes del sistema» y abre la lista para elegir. «Añadir una fuente por su nombre…» sirve para las que no estén.
- El menú de modos muestra solo las vistas del rol elegido, con una nota al pie: «Selecciona otro rol para ver todas las vistas» (abre Preferencias › Interfaz). Arreglado: los modos ocultos por el rol seguían viéndose en el menú.
- El rol también se elige en Preferencias › Interfaz.
- Al entrar en Borrador o Corrección la vista pasa a tamaño real (1:1) y el renglón del cursor queda en el centro de la pantalla; al escribir o moverse con el teclado, la hoja se desplaza como en una máquina de escribir para que el cursor siga en el centro.
- Las páginas insertadas en Maquetación (y los saltos de flujo) se ven también en Borrador y Corrección: la hoja del manuscrito se corta donde se insertó la página, aparece una hoja marcada «Página insertada en Maquetación» y las flechas del salto.
- Roles en la pantalla de bienvenida: Escritor (Borrador, Corrección, Previsualización), Editor (Corrección, Maquetación, Previsualización), Encuadernador (Maquetación, Previsualización) o Generalista (todos). El selector de modos muestra solo los del rol. Ayuda › Mostrar pantalla de bienvenida la vuelve a abrir.
- Tapa dura: el laminado brillante refleja la luz con la ondulación típica del cartón forrado y el mate queda satinado; la cubierta lleva la ranura de la bisagra junto al lomo y el lomo se ve redondeado.
- Nodos de flujo en Maquetación: donde un párrafo pasa de una página a otra hay un nodo de salida (al pie, a la derecha de la mancha) y uno de entrada donde continúa. Arrastrar la salida a otra página hace que el texto siga allí (deja páginas en blanco en medio) o lo vuelve a unir; con un clic se abre un menú (seguir en la página siguiente, dejar una página en blanco, ir a donde sigue). El nodo se pinta naranja si el párrafo salta páginas o se corta antes de llenar la suya.
- La barra de paso de página de Previsualización ya no flota sobre la hoja: va fija debajo de la barra de herramientas.
- Saltos de flujo: si se añade una página entre dos páginas por las que corre un mismo párrafo, el texto que se escriba en ella es suyo y el párrafo sigue después de esa página. Unas flechas («Sigue en la pág. N» / «Viene de la pág. N») marcan el salto y llevan a la otra página con un clic.
- Cubierta: más materiales y acabados (cartulina sin estucar, barniz brillante, estampado metálico en oro, plata o cobre, estampado bajo laminado mate, relieve, holográfico, textura de lino); cada acabado explica cómo se ve y cómo envejece. El papel sin estucar suaviza los colores de la carátula.
- Lomo visible con el libro cerrado, con su ancho real y el texto de abajo arriba, de arriba abajo u horizontal; los lomos de menos de 6 mm no llevan texto. Cantos impresos de color.
- Arreglado: al escribir un párrafo en una página nueva y aplicarle un estilo, el estilo caía también en los párrafos de la página siguiente que estaban seleccionados antes. La selección de párrafos ahora sigue a sus párrafos cuando se insertan o borran otros.
- Deshacer y Rehacer (Ctrl+Z, Ctrl+Mayús+Z o Ctrl+Y, y el menú Editar) abarcan ahora todo el documento: texto, estilos de párrafo y de página, plantillas, saltos y metadatos, no solo lo escrito.
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
