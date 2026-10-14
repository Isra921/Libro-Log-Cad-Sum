# Revisión de contenido, ortografía y accesibilidad

**Responsable:** Uriblue · **Fecha:** 13 de octubre de 2026
**Alcance:** Unidades III y IV (actividades formativas) y calidad de contenido de todo el polilibro.

---

## 1. Resumen

| Tarea | Estado | Dónde |
|---|---|---|
| Actividades formativas 3.1 a 3.5 | ✅ Hechas y probadas | `unidades/unidad-03/actividades/actividad-3-*.html` + `assets/data/preguntas/unidad-03/` |
| Actividades formativas 4.1 a 4.4 | ✅ Hechas y probadas | `unidades/unidad-04/actividades/actividad-4-*.html` + `assets/data/preguntas/unidad-04/` |
| Ortografía y redacción (portada y 25 temas) | ✅ Hecho | `index.html`, `unidades/*/temas/*.html` |
| Contador de la portada y nombres oficiales | ✅ Hecho (II y III por confirmar) | `index.html`, JSON de unidades, `README.md` |
| Cotejo contra el DOCX y figuras faltantes | ✅ Hecho (sección 2) | Este documento |
| Accesibilidad (`alt` y contraste) | ✅ Hecho (sección 4) | CSS, temas, actividades finales |

Cada actividad tiene un banco de **12 preguntas** (opción múltiple, verdadero/falso, completar y ordenar) y toma **8 al azar** en cada intento. Se verificó en navegador que las 9 actividades cargan, califican y dan 100 % cuando se responde con la clave.

---

## 2. Cotejo contra el DOCX del docente (`assets/docs/contenido-logistica.docx`)

### 2.1 Figuras del DOCX: están todas

El DOCX trae 16 imágenes. **Ninguna falta en el sitio.**

| Imagen del DOCX | Contenido | Ubicación en el sitio |
|---|---|---|
| image1 | Captura de los datos del programa académico | Ventana "Programa académico" (no se usa como figura) |
| image2 | Fig. 1 Logística y cadena de suministro | Tema 1.1 |
| image3 | Componentes de la cadena de suministro | Tema 1.4 |
| image4 | Tabla de indicadores (KPI) | Tema 1.6 (imagen + tabla HTML) |
| image5 | Tabla de almacenes especializados | Tema 2.2 (imagen + tabla HTML) |
| image6 | Distribución básica de un almacén (layout) | Tema 2.3 |
| image7 | Tabla de clasificación ABC | Tema 2.5 (imagen + tabla HTML) |
| image8 | Comparación FIFO, FEFO y LIFO | Tema 2.6 (imagen + tabla HTML) |
| image9 | Proceso de la industria textil | Tema 3.1 |
| image10 | Ponderación de proveedores | Tema 3.3 (imagen + tabla HTML) |
| image11 | Indicadores de la cadena de suministro | Tema 3.5 (imagen + tabla HTML) |
| image12 | Comparación de medios de transporte | Tema 4.1 (imagen + tabla HTML) |
| image13 | Incoterms más utilizados | Tema 4.4 (imagen + tabla HTML) |
| image14 | Transporte en la industria textil | Tema 4.4 (imagen + tabla HTML) |
| image15 | Comparación de sistemas ERP, MRP, WMS y TMS | Tema 5.1 (imagen + tabla HTML) |
| image16 | Red de distribución | Tema 5.3 |

### 2.2 Temas sin figura (11): preguntar al profesor si tiene material

| Tema | Figura que ayudaría |
|---|---|
| 1.2 Importancia de la logística | Infografía de beneficios (beneficio → resultado) |
| 1.3 Diferencia entre logística y cadena de suministro | Diagrama: la logística como parte de la cadena |
| 1.5 Tipos de cadena de suministro | Comparativo de las 4 cadenas (tradicional → digital) |
| 2.1 ¿Qué es un almacén y cuáles son sus funciones? | Flujo de las funciones: entrada → revisión → … → surtido |
| 2.4 Sistemas de almacenamiento | Ilustraciones de almacenamiento en piso, racks y automatizado |
| 2.7 Señalización, codificación, empaque y embalaje | Señales de seguridad por color, código de barras/QR/etiqueta RFID, empaque vs. embalaje |
| 3.2 Planeación y pronóstico de la demanda | Gráfica de ventas históricas con pronóstico (ej. 20,000 playeras cada julio) |
| 3.4 Manufactura esbelta, JIT y Kanban | Tarjeta Kanban y flujo "jalar"; los 6 desperdicios |
| 4.2 Selección del medio de transporte y rutas | Mapa de ruta con ventanas de entrega |
| 4.3 Régimen aduanero y documentación | Esquema de regímenes y de documentos por etapa |
| 5.2 Tecnologías emergentes | Esquema de RFID/IoT en almacén |

### 2.3 Figuras repetidas (imagen de tabla + tabla HTML)

En 9 temas (1.6, 2.2, 2.5, 2.6, 3.3, 3.5, 4.1, 4.4 —dos— y 5.1) la misma tabla aparece dos veces: como tabla HTML y como imagen del DOCX.
**Recomendación:** conservar la tabla HTML (se lee bien en celular y con lector de pantalla) y quitar la imagen, o dejarla como enlace "Ver tabla original". Decidirlo junto con la unificación de `t-figure` (Aranza).

### 2.4 Figuras sin número ni fuente

Solo la Fig. 1 (tema 1.1) tiene nota de fuente. `tema-plantilla.js` ya puede numerar las figuras ("Figura 3.1") y escribir la nota APA automáticamente con `data-fuentes` y el campo `referencias` del JSON de la unidad, pero ninguna unidad lo usa todavía. **Falta pedir al profesor la fuente de cada figura** (o confirmar que son "Elaboración propia").

### 2.5 Contenido del DOCX que no aparece en el sitio

**a) Unidad V: listas resumidas.** El sitio redactó estos temas de nuevo y omitió elementos del DOCX:

| Tema del DOCX | Elementos que faltan en el sitio |
|---|---|
| 5.7 IoT | Vehículos conectados; máquinas textiles automatizadas; ejemplo del consumo de agua en tintorería |
| 5.8 Big Data | Optimizar inventarios; mejorar decisiones estratégicas |
| 5.9 Inteligencia artificial | Planeación automática; detección de anomalías; asistentes virtuales |
| 5.10 Blockchain | Certificados de origen; seguimiento de exportaciones |
| 5.11 Redes de distribución | Ventajas de la red directa (mayor control, mejor comunicación, menos intermediarios) e indirecta (mayor cobertura, expansión del mercado); canales de la omnicanal (tiendas físicas, comercio electrónico, marketplaces, redes sociales, aplicaciones móviles) |
| 5.12 Industria 4.0 | Tecnologías que incluye (IA, robótica, IoT, Big Data, automatización, manufactura inteligente); beneficio "menores desperdicios" |

**b) Preguntas de análisis de los casos.** El DOCX trae 5 preguntas para cada caso (Textiles del Centro, Moda ESIT, Confecciones ESIT, Exportaciones Textiles ESIT, Innovación Textil ESIT). **Ninguna aparece en las actividades finales**, que se reemplazaron por simuladores. Sugerencia: agregar en cada actividad final un bloque "Preguntas de análisis del docente".

**c) Objetivos de unidad.** El DOCX tiene un "Objetivo de la unidad" para las unidades II a V; el sitio muestra en su lugar la competencia del programa oficial. Confirmar cuál prefiere el profesor (los del DOCX necesitan corrección de redacción).

**d) Secciones de la portada.** El DOCX menciona "Agenda de actividades", que no existe en el sitio.

### 2.6 Contenido del sitio que no viene del DOCX (validar con el profesor)

- **4.3:** programa IMMEX y Carta Porte "con complemento fiscal digital".
- **4.4:** contribuciones IGI, IVA y DTA; NOM de etiquetado. La tabla tiene 10 Incoterms (igual que el DOCX), pero **Incoterms® 2020 son 11: falta FAS**.
- **5.1:** "exactitud de inventarios de más de 99 %" con WMS (dato sin fuente).
- **5.2 y 5.3:** definiciones ampliadas (BOPIS, D2C, pasaporte digital de producto, *greenwashing*).
- **Actividades finales:** datos inventados para los simuladores. En la Unidad III se menciona a **Pemex y CFE** como clientes de una empresa ficticia; conviene usar algo genérico ("empresas del sector energético") o confirmarlo con el profesor.

### 2.7 Correcciones de contenido aplicadas (avisar al profesor)

| Tema | Antes | Ahora | Motivo |
|---|---|---|---|
| 3.3 Comprueba tu comprensión | "calidad (35%) y tiempo de entrega (25%) … que el precio (20%)" | "la calidad (35 %) … que el precio (25 %) y que el tiempo de entrega (20 %)" | Contradecía la tabla de ponderaciones |
| 3.3 Producción | "Producción y construcción orientada a productos finalizados." | "Es la transformación de la materia prima en productos terminados." | Frase sin sentido completo |
| 3.4 Idea central | "eliminar productos dañados" | "eliminar desperdicios (como los productos dañados)" | Lean elimina todos los desperdicios, no solo los defectos |
| 5.3 ¿Sabías que…? | "precisión superior al 90 %" | Texto original del DOCX | El 90 % no tiene fuente ni está en el DOCX |
| Síntesis 4.4 (`unidad-04.json`) | "los 11 Incoterms® 2020" | "los principales Incoterms® 2020" | La tabla muestra 10 |
| 2.7 Señalización | Color solo en el ícono | Se agregó "(color verde)", etc. | El significado del color se perdía (accesibilidad) |

### 2.8 Dudas para el profesor (no se cambiaron)

1. **Transporte multimodal (4.1).** El texto dice que se gestiona "mediante contratos independientes para cada etapa y transportista". Eso corresponde al transporte *intermodal*; en el *multimodal* suele haber un solo contrato con un operador de transporte multimodal. ¿Se ajusta la definición?
2. **Numeración de subtemas.** Los títulos internos conservan la numeración del DOCX (por ejemplo, el tema 3.2 contiene "3.3 Planeación…" y "3.4 Pronóstico…"). Pasa en 2.7 y en las unidades III, IV y V. Propuesta: 3.2.1, 3.2.2… o quitar el número.
3. **Nombres de las unidades II y III.** Se usaron los del programa oficial (ver sección 3).
4. **Temas del programa oficial sin cobertura clara en el DOCX:** 1.1 fundamentos históricos; 1.4 papel de la reingeniería; 2.7 normatividad de envase, embalaje e información del producto; 3.1 metodologías para el diseño de cadenas de suministro; 4.3 programación, seguimiento y control de servicios; 5.2 contras de las TI; 5.5.4 la reingeniería en las redes de distribución.

---

## 3. Ortografía, redacción y nombres

**Portada.** Se corrigieron Bienvenida, Introducción y Metodología: concordancia ("se abordan", "se utilizan"), acentos ("tu espacio", "ayudarán"), palabras incompletas ("inteligent", "integran" → "integrar"), comas entre sujeto y verbo, mayúsculas indebidas y lenguaje incluyente ("el estudiantado", "Te damos la bienvenida"). El 4.º párrafo de la Bienvenida estaba incompleto y se reconstruyó; **conviene que el profesor lo apruebe**.

**Contador.** "48 temas y casos" → **25 temas** y **5 casos de estudio** (también en `README.md`).

**Nombres oficiales de las unidades** (programa sintético ESIT, hojas 3 a 7), aplicados en portada, JSON, títulos de página, índices, referencias, ventana de actividades, `README.md` y `ESTADO-INTEGRACION.md`:

| Unidad | Nombre oficial |
|---|---|
| I | Introducción a la logística y cadena de suministro |
| II | Almacenaje, señalización, codificación y tecnología de empaque |
| III | Cadenas de suministro en la industria textil y del vestido |
| IV | Transportación y régimen aduanero |
| V | Tecnología de la información y configuración de la red de distribución |

**Temas.** Cada tema tiene ahora **un solo nombre** en el JSON, el `<title>`, el `<h1>` y el índice lateral (antes había hasta tres versiones distintas). Los títulos siguen la norma de la RAE: mayúscula solo en la primera palabra y en nombres propios. También se corrigieron errores puntuales (por ejemplo, "adecuamiento", "Capacidad producción", "Bajo costo / Bajo coste").

---

## 4. Accesibilidad

**Método:** axe-core 4.10 (WCAG 2.1 niveles A y AA) en Chromium, sobre 51 páginas, las 8 ventanas de la portada y los estados de las actividades (retroalimentación y resultado).

| Hallazgo | Corrección |
|---|---|
| Menú superior: enlace activo blanco sobre azul claro (contraste 1.3:1) | Color primario del sitio (`global.css`) |
| Casos de estudio U1–U5: títulos en rojo, ámbar, azul y verde (2.0–3.6:1) | Tonos más oscuros (≥ 4.5:1) |
| Temas 2.5, 2.7, 3.4, 4.1, 4.3, 4.4 y 5.1: títulos e íconos en verde y ámbar | Tonos más oscuros (≥ 4.5:1) |
| Simulador: número blanco sobre verde en pasos completados (2.5:1) | Verde oscuro (`simulador-casos.css`) |
| 22 controles sin etiqueta (listas y deslizadores) en U1, U2, U3 y U5 | `aria-label` o `<label for>` |
| Ventanas Introducción y Metodología: área con desplazamiento sin acceso por teclado | `tabindex`, `role` y `aria-label` (`index.js`) |
| Plantilla de actividades: `aria-label` en `<div>` sin rol | `role="group"` (`actividad-plantilla.js`) |
| Tema 2.7: el significado de las señales dependía solo del color | Se escribió el color en el texto |
| Textos alternativos | Las 17 imágenes del HTML y las generadas por JS ya tenían `alt`; se mejoraron 5 que eran imprecisos |

**Resultado:** 0 violaciones en las 51 páginas y en las 8 ventanas.

**Pendiente:**
- `404.html`: el enlace "Volver a unidades" no se distingue del texto (1.3:1, sin subrayado). Lo dejo para el rediseño de Diego.
- Imágenes de tablas duplicadas (sección 2.3).
- Las actividades 1.x, 2.x y 5.x todavía redirigen a la actividad final.

---

## 5. Notas técnicas para el equipo

- **Error corregido que afectaba a todos los temas:** `tema-plantilla.js` llamaba a `DataManager.urlReferencias()`, que no existía. El script se detenía y por eso el índice lateral nunca mostraba las actividades ni se armaba la navegación desde el JSON. Se agregó la función en `assets/js/data-manager.js`.
- **Cómo crear las actividades de las unidades I, II y V:** ver `assets/data/unidades/LEEME.md` (actualizado). Basta con copiar `actividad-3-1.html`, cambiar `data-tema` y `data-preguntas`, crear el banco JSON y llenar la `url` en el JSON de la unidad.
- **No borrar** `assets/data/preguntas/`: ahí viven los bancos nuevos. Los JSON viejos de `assets/data/unidad-1/2/3/` son del libro de Algoritmos y sí se pueden eliminar.
