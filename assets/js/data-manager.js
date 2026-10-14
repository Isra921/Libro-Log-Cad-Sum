// ==========================================================================
// DATA MANAGER · Carga de datos de las unidades (JSON)
// --------------------------------------------------------------------------
// - Todas las rutas de los JSON se escriben desde la RAÍZ del sitio
//   (ej. "unidades/unidad-01/temas/tema-01-01.html").
// - Cada página indica en <body data-root="..."> cuántos niveles debe subir
//   para llegar a la raíz ("" en la raíz, "../../" dentro de unidades/unidad-XX/).
// - Guarda en caché cada archivo para no repetir peticiones fetch.
// - Incluye respaldo offline embebido para visualización local directa (file:///).
// ==========================================================================

class DataError extends Error {
    constructor(archivo, mensaje) {
        super(mensaje);
        this.name = 'DataError';
        this.archivo = archivo;
    }
}

const DataManager = {
    RUTA_CATALOGO: 'assets/data/unidades-data.json',
    CARPETA_UNIDADES: 'assets/data/unidades/',
    PATRON_PAGINA_UNIDAD: id => `unidades/${id}/index.html`,
    PATRON_URL_ABSOLUTA: /^(?:[a-z]+:)?\/\//i,

    _cache: new Map(),

    /** Prefijo relativo para llegar a la raíz del sitio desde la página actual. */
    raiz() {
        return document.body.dataset.root || '';
    },

    /** Convierte una ruta escrita desde la raíz en una ruta válida para esta página. */
    ruta(rutaDesdeRaiz) {
        if (!rutaDesdeRaiz) return '';
        if (this.PATRON_URL_ABSOLUTA.test(rutaDesdeRaiz) || rutaDesdeRaiz.startsWith('#')) {
            return rutaDesdeRaiz;
        }
        return `${this.raiz()}${rutaDesdeRaiz}`;
    },

    /** Descarga y valida un JSON. Si fetch falla (ej. por CORS al abrir con file:///), usa el respaldo embebido. */
    async _cargarJSON(rutaDesdeRaiz) {
        if (this._cache.has(rutaDesdeRaiz)) return this._cache.get(rutaDesdeRaiz);

        const promesa = (async () => {
            try {
                const respuesta = await fetch(this.ruta(rutaDesdeRaiz));
                if (respuesta.ok) {
                    const texto = await respuesta.text();
                    return JSON.parse(texto);
                }
            } catch (error) {
                // Fetch falló (típicamente CORS en protocolo file:///). Proceder con respaldo embebido si existe.
            }

            if (DataManager.DATOS_EMBEBIDOS && DataManager.DATOS_EMBEBIDOS[rutaDesdeRaiz]) {
                return DataManager.DATOS_EMBEBIDOS[rutaDesdeRaiz];
            }

            throw new DataError(rutaDesdeRaiz,
                'No se pudo leer el archivo. Si abriste la página con doble clic, ábrela con un servidor local (por ejemplo, Live Server).');
        })();

        this._cache.set(rutaDesdeRaiz, promesa);
        promesa.catch(() => this._cache.delete(rutaDesdeRaiz));
        return promesa;
    },

    /** Datos generales del catálogo: título, descripción y orden de las unidades. */
    async getCatalogo() {
        return this._cargarJSON(this.RUTA_CATALOGO);
    },

    /** Datos completos de una unidad (assets/data/unidades/<id>.json). */
    async getUnidad(idUnidad) {
        return this._cargarJSON(`${this.CARPETA_UNIDADES}${idUnidad}.json`);
    },

    /** Todas las unidades, en el orden definido en el catálogo. */
    async getUnidades() {
        const catalogo = await this.getCatalogo();
        return Promise.all(catalogo.unidades.map(id => this.getUnidad(id)));
    },

    /** Cualquier otro JSON del sitio (ej. bancos de preguntas de las actividades). */
    async getArchivo(rutaDesdeRaiz) {
        return this._cargarJSON(rutaDesdeRaiz);
    },

    /** Ruta (ya ajustada a la página actual) hacia la página de una unidad. */
    urlUnidad(idUnidad) {
        return this.ruta(this.PATRON_PAGINA_UNIDAD(idUnidad));
    },

    /**
     * Ruta (ya ajustada a la página actual) hacia las referencias de una unidad.
     * La usa tema-plantilla.js ("Ver lista completa"); sin ella el índice lateral
     * y la navegación de los temas no se generaban desde el JSON.
     */
    urlReferencias(idUnidad) {
        return this.ruta(`unidades/${idUnidad}/referencias.html`);
    },

    /** Respaldo embebido de datos para que la interfaz funcione offline y bajo file:/// */
    DATOS_EMBEBIDOS: {
        'assets/data/unidades-data.json': {
            "titulo": "Unidades temáticas",
            "descripcion": "Programa académico de Logística y cadena de suministro de la Escuela Superior de Ingeniería Textil (ESIT - IPN).",
            "unidades": ["unidad-01", "unidad-02", "unidad-03", "unidad-04", "unidad-05"]
        },
        'assets/data/unidades/unidad-01.json': {
            "id": "unidad-01",
            "numero": 1,
            "titulo": "Introducción a la logística y cadena de suministro",
            "descripcion": "Distingue los aspectos integrales de una cadena de suministro a partir de sus elementos y clasificación en la industria textil.",
            "lema": "Comprende la administración de materiales, información, costos y flujos productivos en la industria textil.",
            "duracion_horas": 10.0,
            "introduccion": [
                "La logística tiene como finalidad administrar de manera eficaz la línea de materiales, productos, datos y medios financieros a lo largo de todo el recorrido operativo. Su propósito no radica únicamente en transportar mercancías, sino en coordinar cada una de las actividades indispensables para que el cliente reciba con puntualidad y exactitud lo que necesita.",
                "En esta unidad inicial se abordan los fundamentos conceptuales, la planificación y el control del almacenamiento y traslado físico de los bienes textiles, analizando su estrecha relación con la eficiencia operativa y la competitividad empresarial a través del estudio de casos reales."
            ],
            "temas": [
                { "numero": "1.1", "nombre": "Objetivos de la logística", "sintesis": "Finalidad de la administración de materiales, flujos de información y cumplimiento de requerimientos en el sector textil.", "url": "unidades/unidad-01/temas/tema-01-01.html" },
                { "numero": "1.2", "nombre": "Importancia de la logística", "sintesis": "Impacto en tiempos de entrega, reducción de inventarios, optimización de costos y tabla de beneficios operativos.", "url": "unidades/unidad-01/temas/tema-01-02.html" },
                { "numero": "1.3", "nombre": "Diferencia entre logística y cadena de suministro", "sintesis": "Comparación estructural entre la administración de operaciones internas y la integración holística de la red de valor.", "url": "unidades/unidad-01/temas/tema-01-03.html" },
                { "numero": "1.4", "nombre": "Componentes de la cadena de suministro", "sintesis": "Actores clave: proveedores de fibras/insumos, compras, procesos productivos, almacenes, distribución y cliente final.", "url": "unidades/unidad-01/temas/tema-01-04.html" },
                { "numero": "1.5", "nombre": "Tipos de cadena de suministro", "sintesis": "Modelos tradicionales, integrados, sincronizados (Toyota, Zara) y cadenas digitales con IA, IoT, RFID y Blockchain.", "url": "unidades/unidad-01/temas/tema-01-05.html" },
                { "numero": "1.6", "nombre": "Principales indicadores logísticos (KPI)", "sintesis": "Fórmulas y aplicación de métricas: nivel de servicio, rotación de inventarios, tiempo de ciclo y entregas a tiempo.", "url": "unidades/unidad-01/temas/tema-01-06.html" }
            ],
            "actividad_final": {
                "nombre": "Caso de estudio ESIT: Empresa 'Textiles del Centro'",
                "descripcion": "Análisis y resolución de la problemática operativa de una confeccionadora de playeras deportivas aplicando KPIs y reingeniería.",
                "url": "unidades/unidad-01/actividades/actividad-final.html"
            }
        },
        'assets/data/unidades/unidad-02.json': {
            "id": "unidad-02",
            "numero": 2,
            "titulo": "Almacenaje, señalización, codificación y tecnología de empaque",
            "descripcion": "Especifica las condiciones de operación de una cadena de suministro a partir del cumplimiento de los requerimientos de almacenaje.",
            "lema": "Domina el diseño de almacenes textiles, inventarios ABC, rotación de mercancías y tecnologías de codificación y empaque.",
            "duracion_horas": 20.0,
            "introduccion": [
                "El almacenamiento constituye un eslabón estratégico dentro de la distribución de productos textiles, ya que garantiza la disponibilidad oportuna de materiales requeridos tanto por las líneas de producción como por los clientes finales.",
                "A lo largo de esta unidad se identifican las condiciones de operación en bodegas manuales y automatizadas, los métodos de administración y rotación de inventarios, las técnicas de preparación de pedidos (picking), la señalización de seguridad, los sistemas de codificación y la selección de envases y embalajes protectores para la industria textil."
            ],
            "temas": [
                { "numero": "2.1", "nombre": "¿Qué es un almacén y cuáles son sus funciones?", "url": "unidades/unidad-02/temas/tema-02-01.html" },
                { "numero": "2.2", "nombre": "Importancia del almacén en la industria textil", "url": "unidades/unidad-02/temas/tema-02-02.html" },
                { "numero": "2.3", "nombre": "Diseño (layout) de un almacén", "url": "unidades/unidad-02/temas/tema-02-03.html" },
                { "numero": "2.4", "nombre": "Sistemas de almacenamiento", "url": "unidades/unidad-02/temas/tema-02-04.html" },
                { "numero": "2.5", "nombre": "Administración de inventarios (método ABC)", "url": "unidades/unidad-02/temas/tema-02-05.html" },
                { "numero": "2.6", "nombre": "Métodos de rotación de inventarios y picking", "url": "unidades/unidad-02/temas/tema-02-06.html" },
                { "numero": "2.7", "nombre": "Señalización, codificación, empaque y embalaje", "url": "unidades/unidad-02/temas/tema-02-07.html" }
            ],
            "actividad_final": {
                "nombre": "Caso de estudio: Empresa 'Moda ESIT'",
                "descripcion": "Resolución de incidencias operativas: telas dañadas por humedad, colorantes caducos y rediseño de layout en confección masiva.",
                "url": "unidades/unidad-02/actividades/actividad-final.html"
            }
        },
        'assets/data/unidades/unidad-03.json': {
            "id": "unidad-03",
            "numero": 3,
            "titulo": "Cadenas de suministro en la industria textil y del vestido",
            "descripcion": "Estructura la cadena de suministro a partir de las técnicas y estrategias de distribución y producción textil.",
            "lema": "Coordina desde el cultivo de fibras hasta la confección y distribución final mediante Lean, JIT, Kanban y Nearshoring.",
            "duracion_horas": 10.0,
            "introduccion": [
                "La cadena de suministro textil comprende el conjunto coordinado de organizaciones y procesos que intervienen desde la producción o cultivo de la fibra hasta la entrega de la prenda terminada al consumidor final.",
                "En esta unidad se analiza la secuencia completa hilatura-tejeduría-tintorería-confección, los modelos de pronóstico y compras, la manufactura esbelta orientada a eliminar mermas, la logística inversa sustentable y el auge del nearshoring en México."
            ],
            "temas": [
                { "numero": "3.1", "nombre": "Cadena de suministro en la empresa textil", "url": "unidades/unidad-03/temas/tema-03-01.html" },
                { "numero": "3.2", "nombre": "Planeación de la cadena y pronóstico de la demanda", "url": "unidades/unidad-03/temas/tema-03-02.html" },
                { "numero": "3.3", "nombre": "Gestión de compras y producción textil", "url": "unidades/unidad-03/temas/tema-03-03.html" },
                { "numero": "3.4", "nombre": "Manufactura esbelta, justo a tiempo (JIT) y Kanban", "url": "unidades/unidad-03/temas/tema-03-04.html" },
                { "numero": "3.5", "nombre": "Logística inversa, nearshoring e indicadores (KPI)", "url": "unidades/unidad-03/temas/tema-03-05.html" }
            ],
            "actividad_final": {
                "nombre": "Estudio de caso práctico: Negocio 'Confecciones ESIT'",
                "descripcion": "Diagnóstico de problemas de entregas fuera de tiempo y altos inventarios en uniformes industriales.",
                "url": "unidades/unidad-03/actividades/actividad-final.html"
            }
        },
        'assets/data/unidades/unidad-04.json': {
            "id": "unidad-04",
            "numero": 4,
            "titulo": "Transportación y régimen aduanero",
            "descripcion": "Plantea rutas de distribución y esquemas aduanales a partir de la ley vigente y los Incoterms® 2020 para productos textiles.",
            "lema": "Gestiona modos de transporte, diseño de rutas, regímenes aduaneros y términos internacionales de comercio en la exportación textil.",
            "duracion_horas": 15.0,
            "introduccion": [
                "El transporte representa la columna vertebral de la movilidad de insumos y prendas confeccionadas a través de redes nacionales e internacionales.",
                "En esta unidad se profundiza en las características operativas de los medios de transporte (carretero, ferroviario, marítimo, aéreo y multimodal), la planificación de rutas de distribución, el régimen aduanero mexicano y los Incoterms® 2020."
            ],
            "temas": [
                { "numero": "4.1", "nombre": "Importancia y modos de transporte", "url": "unidades/unidad-04/temas/tema-04-01.html" },
                { "numero": "4.2", "nombre": "Selección del medio de transporte y rutas de distribución", "url": "unidades/unidad-04/temas/tema-04-02.html" },
                { "numero": "4.3", "nombre": "Régimen aduanero y documentación de comercio exterior", "url": "unidades/unidad-04/temas/tema-04-03.html" },
                { "numero": "4.4", "nombre": "Agente aduanal, Incoterms® 2020 y transporte textil", "url": "unidades/unidad-04/temas/tema-04-04.html" }
            ],
            "actividad_final": {
                "nombre": "Caso de estudio: Empresa 'Exportaciones Textiles ESIT'",
                "descripcion": "Planeación logística y aduanal de la exportación marítima/multimodal de 8,000 chamarras con destino a Canadá.",
                "url": "unidades/unidad-04/actividades/actividad-final.html"
            }
        },
        'assets/data/unidades/unidad-05.json': {
            "id": "unidad-05",
            "numero": 5,
            "titulo": "Tecnología de la información y configuración de la red de distribución",
            "descripcion": "Diseña la red de distribución a partir de la innovación en la logística de la empresa textil y herramientas de la Industria 4.0.",
            "lema": "Integra sistemas ERP, MRP, WMS, TMS, RFID, IoT e Inteligencia Artificial en el diseño de redes omnicanal competitivas.",
            "duracion_horas": 17.0,
            "introduccion": [
                "Las tecnologías de la información (TI) han sustituido por completo el manejo manual y aislado en la cadena de valor textil.",
                "En esta unidad de cierre se estudian los principales sistemas empresariales (ERP, MRP, WMS y TMS), las tecnologías emergentes (RFID, IoT, Big Data, IA y Blockchain), las estructuras de redes de distribución y la Industria 4.0."
            ],
            "temas": [
                { "numero": "5.1", "nombre": "Sistemas de información logística: ERP, MRP, WMS y TMS", "url": "unidades/unidad-05/temas/tema-05-01.html" },
                { "numero": "5.2", "nombre": "Tecnologías emergentes: RFID, IoT, Big Data e inteligencia artificial", "url": "unidades/unidad-05/temas/tema-05-02.html" },
                { "numero": "5.3", "nombre": "Blockchain, redes de distribución e Industria 4.0", "url": "unidades/unidad-05/temas/tema-05-03.html" }
            ],
            "actividad_final": {
                "nombre": "Caso de estudio: Empresa 'Innovación Textil ESIT'",
                "descripcion": "Diagnóstico integral y propuesta de consultoría tecnológica: WMS, RFID, IA y rediseño de red de distribución.",
                "url": "unidades/unidad-05/actividades/actividad-final.html"
            }
        }
    }
};
