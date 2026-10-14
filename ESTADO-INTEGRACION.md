# Estado de Integración: Logística y Cadena de Suministro (ESIT - IPN)

**Estado:** Completado y 100% Integrado. Listo para publicación y revisión docente.  
**Fecha de actualización:** Octubre 2026.  
**Institución:** Instituto Politécnico Nacional (IPN) — Escuela Superior de Ingeniería Textil (ESIT).

---

## 1. Resumen Ejecutivo
El polilibro digital **«Logística y cadena de suministro»** ha sido completamente adaptado y poblado a partir de la infraestructura web del repositorio base, sustituyendo la materia previa por la identidad, programas y contenidos oficiales de la ESIT-IPN para la carrera de Ingeniería Textil (Confección).

---

## 2. Componentes e Integraciones Realizadas

### A. Identidad Institucional y Estética
- **Emblemas Oficiales:** Incorporación del escudo oficial de la **ESIT-IPN** (`assets/img/esit.png`) con transparencia limpia y fidelidad vectorial en encabezado, portada, modales y favicons.
- **Paleta Cromática:** Azul marino institucional (#003366, #004d99) y detalles en blanco y azul cielo, armonizados con la identidad politécnica y textil.
- **Portada e Index:** Estadísticas del curso (5 unidades temáticas, 25 temas interactivos, 72 horas teóricas, 8.0 créditos Tepic / 5.20 SATCA).

### B. Programa Académico Oficial (PDF Escaneado de 9 Páginas)
- **Extracción de Datos:** Digitalización exhaustiva de las 9 páginas del plan de estudios oficial (`Logística y cadena de suministro_1.pdf`) en `assets/data/plan-estudios.json`.
  - Datos generales: Semestre VIII, 4.0 hrs/semana teoría, 0.0 práctica, 14.0 hrs autónomas.
  - Competencia general y competencias particulares por cada una de las 5 unidades.
  - Contenidos temáticos oficiales, ponderaciones de evaluación (60% Portafolio de evidencias, 40% Evaluación temática).
  - Bibliografía básica y de consulta oficial del IPN.
  - Autoridades de la Academia de Confección Textil y directivos de la ESIT.
- **Modal Interactivo:** Modal optimizado (`assets/js/plan-estudios-modal.js`):
  - *Estructura Curricular y Plan Oficial:* Desglose exhaustivo por unidades, horas, competencias, bibliografía y datos generales, con botón de descarga directa del PDF oficial del IPN.

### C. Contenido Didáctico Fiel al Documento Docente (DOCX / 57 Páginas)
Se estructuraron las 5 unidades respetando de manera literal y fiel las redacciones, conceptos, ejemplos, fórmulas y casos de estudio formulados por el profesor:

- **Unidad I: Introducción a la logística y cadena de suministro**
  - Temas 1.1 al 1.6: Objetivos, diferencias clave, importancia del servicio al cliente, ciclo del pedido, niveles de servicio y costos asociados.
  - Figuras y tablas oficiales: Diagrama de cadena de suministro (Fig. 1.1) y Tabla 1.1 de costos logísticos.
  - Actividad Integradora: **Simulador y Laboratorio de Decisiones "Textiles del Centro"** (Diagnóstico causal de incidentes, simulador dinámico de trade-off de costos con sliders y pruebas de estrés, auditoría en tiempo real de 10 pedidos con cálculo de OTIF/Fill Rate/Lead Time, y dictamen estratégico formal con guardado en portafolio y descarga en PDF).
  - Referencias bibliográficas especializadas.

- **Unidad II: Almacenaje, señalización, codificación y tecnología de empaque**
  - Temas 2.1 al 2.7: Cargas y tipos de materiales en hilatura/confección, almacenes, equipo de movimiento, inventarios (PEPS, UEPS, Costo Promedio), lote económico EOQ, tipos de empaque y embalaje, y simbología de marcado internacional.
  - Figuras y tablas oficiales: Figuras de tarimas, racks, montacargas, fórmulas de inventario y diagramas de marcado.
  - Actividad Integradora: **Simulador y Laboratorio de Almacenes "Moda ESIT"** (Cálculo cuantitativo de modelo EOQ y ROP con sliders de sensibilidad, auditoría de valuación PEPS vs UEPS en colorantes químicos para evitar mermas por caducidad, optimizador de cubicaje y paletizado de 8,000 prendas en tarima americana, y dictamen técnico de layout y señalización).
  - Referencias bibliográficas especializadas.

- **Unidad III: Cadenas de suministro en la industria textil y del vestido**
  - Temas 3.1 al 3.5: Ciclo de adquisiciones, planeación de requerimientos, selección y homologación de proveedores, técnicas de negociación y matriz de evaluación ponderada.
  - Figuras y tablas: Tabla comparativa de proveedores con ponderaciones técnicas de calidad y entrega.
  - Actividad Integradora: **Simulador y Laboratorio de Adquisiciones "Confecciones ESIT"** (Explosión de materiales BOM/MRP para 12,000 uniformes industriales, matriz interactiva de decisión multicriterio con ponderaciones en tiempo real para 3 proveedores, mesa de negociación contractual SLA con cláusulas AQL y créditos, y estrategia de Dual Sourcing con entregas Just-in-Time).
  - Referencias bibliográficas especializadas.

- **Unidad IV: Transportación y régimen aduanero**
  - Temas 4.1 al 4.4: Modos de transporte (carretero, ferroviario, marítimo, aéreo, multimodal), cálculo de fletes y cubicaje, regímenes aduaneros y términos Incoterms® 2020 (EXW, FOB, CIF, DDP).
  - Fórmulas de flete por peso volumétrico y tablas de Incoterms para la exportación de prendas.
  - Actividad Integradora: **Simulador y Laboratorio de Comercio Exterior "Exportaciones Textiles ESIT"** (Cálculo de volumen y peso volumétrico IATA para 8,000 chamarras, simulador de selección modal carretera vs marítima frente a ventana crítica de 30 días con inyección de contingencias, selección de Incoterms® 2020 CIP/CIF y dictamen aduanero de Exportación Definitiva con regla de origen Yarn-Forward T-MEC).
  - Referencias bibliográficas especializadas y normativas.

- **Unidad V: Tecnología de la información y configuración de la red de distribución**
  - Temas 5.1 al 5.3: Sistemas integrados (ERP, MRP, WMS, TMS), tecnologías emergentes (RFID, sensores IoT, Big Data, Inteligencia Artificial), Blockchain y trazabilidad, diseño de redes (directa, indirecta y omnicanal) e Industria 4.0.
  - Figuras y tablas: Tabla comparativa de software ERP/WMS/TMS (Fig. 5.1) y Diagrama de Red de Distribución (Fig. 5.2).
  - Actividad Integradora: **Simulador y Laboratorio de Industria 4.0 "Innovación Textil ESIT"** (Blueprint interactivo de integración ERP-WMS-TMS-MRP, calculadora financiera de retorno de inversión Payback para pórticos RFID masivos vs código de barras, simulador de red omnicanal híbrida con fulfillment Ship-from-Store para entregas en 24h, y dictamen de consultoría tecnológica con guardado en portafolio).
  - Referencias bibliográficas especializadas.

### D. Herramientas Complementarias y Modales
- **Glosario de Términos:** Más de 20 conceptos técnicos clave de la logística textil (Cross-docking, Lead time, BOM, EOQ, RFID, Incoterms, WMS, Merma textil, Trazabilidad, etc.) indexados alfabéticamente en `assets/data/glosario.json`.
- **Examen Diagnóstico:** Cuestionario interactivo de 12 preguntas de opción múltiple representativas de los conocimientos previos y áreas clave de la asignatura en `assets/data/examen-diagnostico.json`.
- **Autores y Créditos:** Directorio académico formal con las autoridades y cuerpo docente de la ESIT-IPN en `assets/data/autores.json`.
- **Desbloqueo Total:** Eliminación de los estados de bloqueo preliminar (`bloqueo-modelo.html`) y plena operatividad de la navegación por catálogo, temas y actividades.
