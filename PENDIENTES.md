# 📋 Pendientes del polilibro

Estado del proyecto y reparto de tareas del equipo: **Aranza, Diego y Uriblue**.

## ✅ Lo que ya está hecho
- **Contenido temático:** los 25 temas de las 5 unidades.
- **Evaluación final por unidad:** la actividad final de cada unidad (`actividad-final.html`) funge como la evaluación final y laboratorio práctico integrador.
- **Estructura base:** Portada, programa académico oficial (modal), examen diagnóstico interactivo y autores.
- **Actividades formativas por tema:** completas en las unidades **II, III y IV** (16 actividades con banco de preguntas al azar).
- **Publicación:** GitHub Pages ya está activado.

---

## ⏳ Lo que falta y aclaraciones clave

1. **Actividades por tema (formativas):** Faltan las de la **Unidad I (1.1 a 1.6)** y la **Unidad V (5.1 a 5.3)**. Las unidades II, III y IV ya están completas. **Nota:** No hay que diseñar una plantilla desde cero; se copia la plantilla estándar (ver `unidades/unidad-02/actividades/actividad-2-1.html` o `unidad-03/actividades/actividad-3-1.html`) y se documenta en `assets/data/unidades/LEEME.md`. En la Unidad I, los archivos `actividad-1-1` a `actividad-1-5` todavía son solo redirecciones al caso final.
2. **Glosario pendiente:** El glosario actual no es el autorizado por el docente; queda pendiente sustituirlo o validarlo con los términos oficiales.
3. **Limpieza de archivos del libro anterior (Algoritmos / ESCOM):** ✅ Hecho. El árbol de trabajo bajó de ~20 MB a 9 MB y `assets/img/` de 11 MB a 1.6 MB. **Pendiente aparte:** los ~62 MB corresponden al historial de Git (`.git/`), que no se reduce al borrar archivos; haría falta reescribir el historial (`git filter-repo` o BFG) y forzar el push, algo que debe acordar todo el equipo porque invalida los clones existentes.
4. **Correcciones y detalles puntuales:** ✅ `404.html` ya es una página funcional con navegación de retorno. El contador de la portada y la ortografía de Bienvenida, Introducción y Metodología ya los corrigió Uriblue.
5. **Diseño y estilos:** Migrar estilos en línea a la clase `t-figure`, sustituir referencias de clases `escom` por `esit`, y validar diseño adaptable en móviles y tabletas.

---

## 👥 Reparto (~25-30 h por persona)

### 🎨 Aranza — Unidades I y V + Diseño visual
- [x] Copiar y adaptar la plantilla de actividades (tomada de `Libro-App-Com-Red`) para que sirva de referencia al equipo. *(La plantilla ya es la que usan las unidades II–IV — `actividad-plantilla.js` + `actividad.css` — y está documentada en `assets/data/unidades/LEEME.md`, sección "Crear o editar una actividad de aprendizaje".)*
- [ ] Crear/poblar las actividades formativas de los temas de la **Unidad I** (1.1 a 1.6).
- [ ] Crear/poblar las actividades formativas de los temas de la **Unidad V** (5.1 a 5.3).
- [ ] Unificar estilos de figuras e imágenes (uso de clase `t-figure`) y limpiar CSS residual.
  - Hay **5 variantes de `t-callout` que se usan pero no están definidas** en `assets/css/tema.css` (solo existen `--note` y `--example`), así que se ven sin color distintivo: `--alert` (temas 2.2, 3.2, 3.3), `--tip` (1.5, 3.2, 3.5, 4.4), `--info` y `--accent` (5.2, 5.3) e `--important` (4.4).
- [ ] Reemplazar las clases CSS con nombre `escom` por `esit`.
- [ ] Revisar y ajustar el diseño en dispositivos móviles y tabletas.

### 🧹 Diego — Unidad II + Limpieza técnica
- [x] 🔴 **Primero (Limpieza):** Eliminar los archivos residuales del libro base anterior:
  - `assets/img/unidad-03/`, `assets/img/unidad-1/`, `assets/img/unidad-2/` (imágenes de árboles, grafos, etc.)
  - `assets/js/original/` (13 archivos) y 18 scripts huérfanos en `assets/js/paginas/`
  - Logos e íconos: `ESCOMB.png`, `logoescom.png`, `favicon-escom.png` (y `favicon.png`/`favicon.ico`, que eran el mismo logo ESCOM sin usar)
  - `assets/js/pendientes-modal.js` y 5 scripts sueltos sin uso (`modales.js`, `navegacion.js`, `actividades.js`, `volver-arriba.js`, `progreso-lectura.js`)
  - `assets/data/examen-diagnostico-algoritmos-estructuras-datos.json` y las carpetas `assets/data/unidad-1/2/3/`
  - Archivos temporales: `modal_snippet.html`, `auditoria/bloqueo-modelo.html` y los `auditoria/plan-*.jpg` (copias idénticas de `assets/docs/programa/hoja-*.jpg`)
  - Fotos del libro anterior sin referencia: `Daniel_Cruz_Garcia.png`, `Yaxkin.png`, `isr.png`, `Título1.png`, `EST.jpeg`, `FIGURA1.jpg`, `image1.png`
- [x] Crear/poblar las actividades formativas de los temas de la **Unidad II** (2.1 a 2.7) usando la plantilla estándar. *(7 actividades + 7 bancos de 12 preguntas en `assets/data/preguntas/unidad-02/`; registradas en `unidad-02.json` y en la ventana de Actividades de la portada.)*
- [x] Optimizar imágenes de logística y asignarles nombres descriptivos. *(`assets/img/` pasó de 11 MB a 1.6 MB; ya no quedan nombres tipo `imageN`.)*
- [x] Diseñar una página `404.html` funcional con navegación de retorno al polilibro.
- [x] Verificar enlaces internos y navegación en GitHub Pages. *(Sin enlaces rotos; ver nota abajo.)*

> **Aviso para Aranza:** se recuperaron `image5/7/8.png` (figuras de los temas 2.2, 2.5 y 2.6), que estaban borradas pero seguían referenciadas. Ya quedaron con nombre descriptivo. Las figuras siguen usando estilos en línea: migrarlas a `t-figure` sigue siendo parte de tu tarea.

### 📝 Uriblue — Unidades III y IV + Contenido y calidad
- [x] Crear/poblar las actividades formativas de los temas de la **Unidad III** (3.1 a 3.5) usando la plantilla estándar.
- [x] Crear/poblar las actividades formativas de los temas de la **Unidad IV** (4.1 a 4.4) usando la plantilla estándar.
- [x] Corregir la ortografía y redacción en la portada (Bienvenida, Introducción, Metodología) y en los temas.
- [x] Corregir el contador en portada (cambiar "48 temas" por los 25 temas y 5 casos reales) y unificar nombres oficiales de las unidades. *(Se usaron los nombres del programa oficial; falta que el profesor confirme II y III.)*
- [x] Cotejar contenidos contra el DOCX oficial del docente y listar figuras faltantes. *(Ver `auditoria/REVISION-CONTENIDO-Y-ACCESIBILIDAD.md`.)*
- [x] Revisar accesibilidad (atributos `alt` en imágenes, contrastes de color).

---

## ❓ Dudas a confirmar con el profesor
- **Glosario oficial:** Solicitar la lista de términos y definiciones autorizadas para reemplazar el borrador actual.
- **Figuras faltantes:** Validar si existen diagramas o imágenes adicionales en el material de origen para los temas que aún no cuentan con figura.
- **Créditos y nomenclatura:** Confirmar créditos oficiales del plan de estudios y nombres exactos de las unidades II y III, ademas de los profesores que se colocarán en autores.
