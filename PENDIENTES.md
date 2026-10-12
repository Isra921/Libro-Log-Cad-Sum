# 📋 Pendientes del polilibro

Estado del proyecto y reparto de tareas del equipo: **Aranza, Diego y Uriblue**.

## ✅ Lo que ya está hecho
- Los 25 temas de las 5 unidades.
- Una actividad final (simulador) por unidad.
- Portada, programa académico, glosario, examen diagnóstico y autores.

## ⏳ Lo que falta

1. **Actividades por tema.** Cada unidad solo tiene la actividad final. Los archivos `actividad-1-1` a `actividad-3-2` están vacíos (solo redirigen a la final) y los demás temas no tienen actividad. Tampoco hay evaluación final por unidad.
2. **Archivos del libro anterior (Algoritmos, de ESCOM).** Imágenes, logos, JSON y JS que ya no se usan. `assets/img` pesa ~62 MB.
3. **Errores puntuales.** `404.html` dice "Próximamente", la portada dice "48 temas" (son 25 + 5 casos) y hay faltas de ortografía en la Bienvenida, la Introducción y la Metodología.
4. **Diseño.** Imágenes con estilos en línea, temas sin figuras, CSS repetido; falta revisar en celular.
5. **Publicación.** Activar GitHub Pages y revisar enlaces rotos.

---

## 👥 Reparto (~30 h por persona)

### 🎨 Aranza — Unidades I y V + Diseño visual
- [ ] Actividades de los temas 1.1–1.6 y 5.1–5.3 (9 temas).
- [ ] Evaluación final de las Unidades I y V.
- [ ] 🔴 **Plantilla de actividad** que usaremos todos.
- [ ] Unificar estilos de imágenes (clase `t-figure`) y limpiar CSS.
- [ ] Cambiar las clases `escom` por `esit`.
- [ ] Revisar el diseño en celular y tableta.

### 🧹 Diego — Unidad II + Limpieza técnica
- [ ] Actividades de los temas 2.1–2.7 (7 temas).
- [ ] Evaluación final de la Unidad II.
- [ ] 🔴 **Primero:** borrar los archivos del libro anterior:
  - `assets/img/unidad-03/`, `assets/img/unidad-1/`, `assets/img/unidad-2/`
  - `assets/js/original/` y los JS de páginas viejas en `assets/js/paginas/`
  - Logos `ESCOMB.png`, `logoescom.png`, `favicon-escom.png`
  - `assets/js/pendientes-modal.js`
  - `assets/data/examen-diagnostico-algoritmos-estructuras-datos.json` y los JSON de `assets/data/unidad-1/2/3/`
  - `modal_snippet.html`, `auditoria/bloqueo-modelo.html`
- [ ] Optimizar y renombrar imágenes (`image3.png` → nombre descriptivo).
- [ ] Hacer un `404.html` de verdad.
- [ ] Activar GitHub Pages y revisar enlaces rotos.

### 📝 Uriblue — Unidades III y IV + Contenido y calidad
- [ ] Actividades de los temas 3.1–3.5 y 4.1–4.4 (9 temas).
- [ ] Evaluación final de las Unidades III y IV.
- [ ] Corregir la ortografía en la portada (Bienvenida, Introducción, Metodología) y en los temas.
- [ ] Corregir el dato "48 temas" de la portada y unificar los nombres de las unidades.
- [ ] Comparar los temas contra el DOCX del profesor y hacer la lista de figuras faltantes.
- [ ] Revisar accesibilidad (`alt`, contraste) y actualizar `ESTADO-INTEGRACION.md`.

---

## 📌 Orden de trabajo
1. **Diego** hace la limpieza primero (1–2 días) para que nadie trabaje sobre archivos que se van a borrar.
2. **Aranza** comparte la plantilla de actividad antes de que empecemos las actividades.
3. Cada quien trabaja en su propia rama y hace *pull request* a `main`:
   - `aranza-u1-u5`
   - `diego-u2-limpieza`
   - `uriblue-u3-u4`

## ❓ Hay que preguntarle al profesor
- Confirmar los créditos y los nombres oficiales de las unidades.
- Que nos pase las figuras que faltan del documento original.
- Que revise las preguntas de las actividades antes de publicarlas.
