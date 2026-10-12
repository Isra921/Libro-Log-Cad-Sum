# 📋 Pendientes del polilibro

Estado del proyecto y reparto de tareas del equipo: **Aranza, Diego y Uriblue**.

## ✅ Lo que ya está hecho
- **Contenido temático:** los 25 temas de las 5 unidades.
- **Evaluación final por unidad:** la actividad final de cada unidad (`actividad-final.html`) funge como la evaluación final y laboratorio práctico integrador.
- **Estructura base:** Portada, programa académico oficial (modal), examen diagnóstico interactivo y autores.
- **Publicación:** GitHub Pages ya está activado.

---

## ⏳ Lo que falta y aclaraciones clave

1. **Actividades por tema (formativas):** Cada tema requiere su actividad interactiva/práctica. Los archivos existentes (`actividad-1-1` a `actividad-3-2`) solo tienen redirecciones y faltan las demás. **Nota:** No hay que diseñar una plantilla desde cero; se copia la plantilla estándar de actividades de los otros libros (`Libro-App-Com-Red` o `Libro-Com-Paralelo`).
2. **Glosario pendiente:** El glosario actual no es el autorizado por el docente; queda pendiente sustituirlo o validarlo con los términos oficiales.
3. **Limpieza de archivos del libro anterior (Algoritmos / ESCOM):** Restos de imágenes (árboles, grafos, logos ESCOM), scripts viejos en `assets/js/original/` y JSON de algoritmos que abultan el repositorio (~62 MB).
4. **Correcciones y detalles puntuales:** `404.html` muestra mensaje de "Próximamente", la portada indica "48 temas" (cuando son 25 temas + 5 evaluaciones/casos = 30) y hay detalles de ortografía y redacción en Bienvenida, Introducción y Metodología.
5. **Diseño y estilos:** Migrar estilos en línea a la clase `t-figure`, sustituir referencias de clases `escom` por `esit`, y validar diseño adaptable en móviles y tabletas.

---

## 👥 Reparto (~25-30 h por persona)

### 🎨 Aranza — Unidades I y V + Diseño visual
- [ ] Copiar y adaptar la plantilla de actividades (tomada de `Libro-App-Com-Red`) para que sirva de referencia al equipo.
- [ ] Crear/poblar las actividades formativas de los temas de la **Unidad I** (1.1 a 1.6).
- [ ] Crear/poblar las actividades formativas de los temas de la **Unidad V** (5.1 a 5.3).
- [ ] Unificar estilos de figuras e imágenes (uso de clase `t-figure`) y limpiar CSS residual.
- [ ] Reemplazar las clases CSS con nombre `escom` por `esit`.
- [ ] Revisar y ajustar el diseño en dispositivos móviles y tabletas.

### 🧹 Diego — Unidad II + Limpieza técnica
- [ ] 🔴 **Primero (Limpieza):** Eliminar los archivos residuales del libro base anterior:
  - `assets/img/unidad-03/`, `assets/img/unidad-1/`, `assets/img/unidad-2/` (imágenes de árboles, grafos, etc.)
  - `assets/js/original/` y scripts obsoletos en `assets/js/paginas/`
  - Logos e íconos: `ESCOMB.png`, `logoescom.png`, `favicon-escom.png`
  - `assets/js/pendientes-modal.js`
  - `assets/data/examen-diagnostico-algoritmos-estructuras-datos.json` y JSON obsoletos en `assets/data/unidad-1/2/3/`
  - Archivos temporales: `modal_snippet.html`, `auditoria/bloqueo-modelo.html`
- [ ] Crear/poblar las actividades formativas de los temas de la **Unidad II** (2.1 a 2.7) usando la plantilla estándar.
- [ ] Optimizar imágenes de logística y asignarles nombres descriptivos.
- [ ] Diseñar una página `404.html` funcional con navegación de retorno al polilibro.
- [ ] Verificar enlaces internos y navegación en GitHub Pages.

### 📝 Uriblue — Unidades III y IV + Contenido y calidad
- [ ] Crear/poblar las actividades formativas de los temas de la **Unidad III** (3.1 a 3.5) usando la plantilla estándar.
- [ ] Crear/poblar las actividades formativas de los temas de la **Unidad IV** (4.1 a 4.4) usando la plantilla estándar.
- [ ] Corregir la ortografía y redacción en la portada (Bienvenida, Introducción, Metodología) y en los temas.
- [ ] Corregir el contador en portada (cambiar "48 temas" por los 25 temas y 5 casos reales) y unificar nombres oficiales de las unidades.
- [ ] Cotejar contenidos contra el DOCX oficial del docente y listar figuras faltantes.
- [ ] Revisar accesibilidad (atributos `alt` en imágenes, contrastes de color).

---

## 📌 Orden de trabajo recomendado
1. **Diego** realiza la limpieza de archivos obsoletos (1–2 días) para dejar el árbol limpio.
2. **Aranza** toma la plantilla de actividad de los otros libros (`Libro-App-Com-Red` / `Libro-Com-Paralelo`) y confirma la estructura base para los temas.
3. Cada quien trabaja en su rama y envía *Pull Request* a `main`:
   - `aranza-u1-u5`
   - `diego-u2-limpieza`
   - `uriblue-u3-u4`

---

## ❓ Dudas a confirmar con el profesor
- **Glosario oficial:** Solicitar la lista de términos y definiciones autorizadas para reemplazar el borrador actual.
- **Figuras faltantes:** Validar si existen diagramas o imágenes adicionales en el material de origen para los temas que aún no cuentan con figura.
- **Créditos y nomenclatura:** Confirmar créditos oficiales del plan de estudios y nombres exactos de las unidades II y III.
