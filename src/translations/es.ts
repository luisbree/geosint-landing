export const es = {
  navbar: {
    home: "Inicio",
    platform: "Plataforma",
    traceability: "Trazabilidad",
    digitalTwin: "Digital Twin",
    successStories: "Casos de Éxito",
    pricing: "Precios",
    contact: "Contacto",
    howItWorks: "DIM Data Bus",
    enter: "Ingresar",
    trialCta: "Trial 7 días",
  },
  trustStrip: {
    badge: "Diseñado por geólogos, construido para peritos",
    laws: [
      "Ley 24.051",
      "Ley 25.675",
      "Código de Aguas PBA",
      "Res. ADA",
      "Res. ACUMAR",
      "Estándares ESG",
    ],
  },
  hero: {
    tag: "Tecnología y Medio Ambiente Integrados",
    companyBadge: "GeoSint · Inteligencia Territorial",
    productBadge: "DIM Data Bus — Inteligencia Ambiental Centralizada",
    title: "GeoSint: Soluciones de Inteligencia Territorial",
    subtitle: "DIM Data Bus · Plataforma de Gestión y Análisis de Datos Ambientales",
    desc: "Análisis Ambiental Autogestivo para Consultoras. Del dato de campo al informe pericial, sin margen de error: transformá la información geoespacial y series temporales en decisiones con precisión, eficiencia y cumplimiento normativo.",
    badges: {
      sha: "SHA-256 en cada muestra",
      offline: "100% offline-first",
      protocols: "37 protocolos estructurados",
    },
    ctaTrial: "Solicitá tu Trial de 7 días",
    ctaPlatform: "Ver la plataforma completa",
    videoFallback: "Tu navegador no soporta la reproducción de videos HTML5.",
  },
  platformModules: {
    tag: "Una sola plataforma",
    title: "DIM Data Bus: ",
    titleGradient: "Todo el ciclo de vida del dato ambiental, integrado",
    desc: "Lo que antes se contrataba por separado — captura en terreno, GIS, modelado hidráulico, cálculo forense e inteligencia pericial — ahora vive en una única arquitectura.",
    modules: [
      {
        id: "field-capture",
        title: "Captura de Campo Trazable",
        desc: "Hash SHA-256 en tiempo real, GPS Heartbeat cada 60s y Audit Trail atómico en cada registro cargado en terreno.",
        tag: "Trazabilidad",
      },
      {
        id: "native-gis",
        title: "Motor GIS Vectorial Nativo",
        desc: "Construido sobre OpenLayers v10, sin dependencia de ArcGIS ni Google Maps. Exportación a GeoJSON, CSV y ZIP compatible con QGIS.",
        tag: "GIS Nativo",
      },
      {
        id: "protocols",
        title: "37 Protocolos Estructurados",
        desc: "Monitoreo normalizado de agua superficial, subterránea, suelo, aire, biota, geología, hidrocarburos y residuos peligrosos.",
        tag: "Normalización",
      },
      {
        id: "digital-twin",
        title: "Digital Twin Hidráulico",
        desc: "Modela hacia dónde escurren los contaminantes en el territorio con DEM satelital, curvas de nivel y grafos topológicos.",
        tag: "Hidrología",
      },
      {
        id: "rules-engine",
        title: "Motor de Reglas y Concomitancias",
        desc: "Detecta en tiempo real superaciones de límites normativos y alerta sinergias hidroquímicas apenas se carga el analito.",
        tag: "Tiempo Real",
      },
      {
        id: "forensic-calc",
        title: "Biblioteca de Cálculo Forense",
        desc: "Índices LSI, Ryznar, ratios HAP/DDT, RAS, CSR, balance iónico y diagnóstico de origen de hidrocarburos (petrogénico vs. pirogénico).",
        tag: "Cálculo Forense",
      },
      {
        id: "analyst-agent",
        title: "Agente Pericial de Asistencia Analítica",
        desc: "Construido con Google Genkit y Gemini: asiste al especialista en la interpretación, generación de hipótesis y recomendaciones de protocolos extendidos.",
        tag: "IA Contextual",
      },
      {
        id: "knowledge-graph",
        title: "Grafo de Conocimiento 3D",
        desc: "Visualización inmersiva en WebGL/Three.js de plumas y relaciones causales, pensada para presentaciones ante directorios o tribunales.",
        tag: "Visualización 3D",
      },
      {
        id: "offline-multitenancy",
        title: "Offline-First y Multi-Tenancy",
        desc: "PWA + IndexedDB para trabajo en campo extremo sin señal, con arquitectura zero-trust y cifrado AES-256-CBC.",
        tag: "Infraestructura",
      },
    ],
  },
  ruleEngineModal: {
    tag: "Motor de Reglas y Concomitancias",
    title: "Detección forense en tiempo real al ingresar el dato",
    desc: "Apenas el técnico ingresa un valor en el terreno, DIM Data Bus evalúa los marcos legales vigentes, calcula índices agronómicos o forenses y alerta sinergias hidroquímicas.",
    alertTitle: "Alerta de Impacto: Fluoruros (mg/L)",
    hypothesisLabel: "HIPÓTESIS ASOCIADA",
    hypothesis: "Afloramiento Geogénico por Intersección Freática",
    techDescLabel: "DESCRIPCIÓN TÉCNICA",
    techDesc: "La cota de fondo de la excavación alcanzó niveles acuíferos ricos en fluoruros naturales (vidrios volcánicos), aportando caudal base salino al canal.",
    actionLabel: "ACCIÓN REQUERIDA",
    irrigationCalcTitle: "CÁLCULO DE ÍNDICES DE RIEGO (AGRONÓMICOS)",
    rasTitle: "SODIO (RAS)",
    rasValue: "5.88",
    rasBadge: "Bajo",
    rasDesc: "Bajo peligro de sodio (apta para la mayoría de suelos)",
    csrTitle: "CARBONATO (CSR)",
    csrValue: "0.93",
    csrBadge: "Bueno",
    csrDesc: "Buena calidad (apta para riego prolongado)",
    concomitantLabel: "POTENCIACIÓN CONCOMITANTE DETECTADA",
    concomitant1Title: "Concomitante: Arsénico Total (Elevado) → Firma Geogénica Pampeana",
    concomitant1Desc: "La detección combinada es la prueba forense irrefutable de que el agua es de origen freático natural. Exige rediseñar la estrategia de manejo de aguas de achique.",
    concomitant2Title: "Concomitante: Fósforo Total (Elevado) → Sinergia de Aporte Agrícola",
    concomitant2Desc: "Confirma que el fluoruro ingresó como impureza del lavado de fertilizantes (superfosfatos). Obliga a delimitar franjas buffer vegetadas.",
    limitsLabel: "LÍMITES NORMATIVOS EXCEDIDOS",
    limit1: "2. Límite Consumo Humano Medio - CAA Art 982",
    limit1Val: "> 1 mg/L",
    limit2: "3. Límite Máximo Irrigación - Dec 831-93 Tabla 5",
    limit2Val: "> 1 mg/L",
    limit3: "4. Límite Vida Acuática Dulce - Dec 831-93 Tabla 2",
    limit3Val: "> 1.4 mg/L",
  },
  digitalTwin: {
    tag: "Digital Twin Hidráulico",
    title: "¿Hacia dónde va el contaminante? ",
    titleGradient: "La plataforma lo muestra.",
    desc: "A partir de un Modelo de Elevación Digital (DEM) satelital y grafos topológicos, DIM Data Bus modela el escurrimiento superficial y subterráneo del territorio. El resultado es una trayectoria de contaminación defendible, no una estimación a mano alzada.",
    item1: "Escurrimiento superficial y subterráneo modelado sobre DEM satelital real y curvas topográficas.",
    item2: "Visualización vectorial con grafos topológicos, nodos discretizados y flujos dinámicos de escorrentía.",
    item3: "Informes cartográficos y vectoriales listos para presentar ante directorios, auditorías o peritajes judiciales.",
    cardBadge: "Digital Twin Hidráulico",
    activeStatus: "ACTIVO",
    cardStat1Label: "Nodos discretizados:",
    cardStat1Val: "1179",
    cardStat2Label: "Flujos activos:",
    cardStat2Val: "430",
    cardStat3Label: "Barreras topográficas:",
    cardStat3Val: "34",
    radiusLabel: "Radio RB:",
    radiusVal: "1.80 km",
    osmBtn: "Elementos OSM",
    topoBtn: "Grafo Topológico",
  },
  analystAgent: {
    tag: "Inteligencia Aumentada",
    title: "Agente pericial que asiste al Analista",
    titleGradient: "en la interpretación, generación de hipótesis y recomendaciones de protocolos extendidos",
    desc: "Construido sobre Google Genkit y Gemini: guía al técnico y al especialista según geomorfología, georreferenciación y matriz ambiental detectada, sugiriendo el encuadre analítico y las medidas prioritarias en el momento exacto.",
    cardHeader: "DIM Data Bus · Diagnóstico Asistido por Agente Pericial",
    hypothesisTitle: "2. Influencia acumulativa de escorrentías pluviales y descargas pluvio-cloacales clandestinas difusas",
    hypothesisDesc: "La presencia simultánea de múltiples actividades en el entorno (estaciones de servicio, centros de salud, lavaderos vehiculares), sumado a la caída del oxígeno disuelto, respalda la hipótesis de una descarga orgánica sostenida de baja intensidad que deprime la capacidad respiratoria del curso de agua sin llegar a generar una toxicidad aguda detectable por los analitos generales.",
    recommendedTitle: "MEDIDAS RECOMENDADAS",
    measure1: "1. Intensificar el monitoreo hidrobiológico y fisicoquímico con una frecuencia quincenal en el punto crítico para evaluar la tasa de consumo de oxígeno disuelto.",
    measure2: "2. Ejecutar una inspección de trazadores y aforos en los conductos pluviales urbanos que descargan en las inmediaciones para detectar posibles conexiones clandestinas.",
    measure3: "3. Fiscalizar las descargas y el manejo de efluentes de los lavaderos automotores y estaciones de servicio ubicadas en el radio de 1.600 metros.",
    measure4: "4. Implementar un plan de gestión de escorrentías sobre trazas viales y adyacencias para mitigar el aporte difuso de sales y materia orgánica.",
  },
  howItWorks: {
    tag: "La Trinidad de la Confianza Pericial",
    title: "Datos que no solo son productivos, ",
    titleGradient: "son defensibles",
    desc: "DIM Data Bus convierte cada registro de campo en evidencia matemáticamente inalterable, apta para una auditoría o un tribunal.",
    pilarBadge: "Pilar",
    rigorCientifico: "Rigor Científico",
    garantiaComercial: "Garantía Comercial",
    ctaTrial: "Solicitá TRIAL de 7 días",
    ctaEnter: "Ingresá a la Plataforma",
    pillars: [
      {
        title: "Cadena de Custodia Digital",
        subtitle: "Audit Trail Activo",
        technicalDetails: "Mapeá un historial inmutable mediante {activity_logs} de cada acción (creación, edición o {soft delete}), guardando un delta de cambios (diff), marca temporal y las colecciones {contributors} y {form_contributors} que registran la coautoría en campo.",
        scientificValue: "Garantizá reproducibilidad científica y linaje claro de muestras. Permite reconstruir campañas completas de monitoreo y cumplir con exigencias estrictas de Aseguramiento y Control de Calidad (QA/QC) ante organismos ambientales (ADA, Ministerio de Ambiente).",
        marketingValue: "Garantizá \"Transparencia sin Excepciones\" ante inspecciones estatales y auditorías corporativas. Protegé la responsabilidad civil de la consultora demostrando trazabilidad rigurosa desde el inicio del relevamiento."
      },
      {
        title: "Datos Inmutables",
        subtitle: "Encriptación SHA-256",
        technicalDetails: "Generá un hash criptográfico SHA-256 ({firmaDigitalHash}) en tiempo real al guardar cada analito en campo, vinculando valor, usuario, fecha y ubicación. Cualquier intento de alteración en el backend o base de datos externa rompe la firma de inmediato.",
        scientificValue: "Eliminá por completo el sesgo de alteración manual de parámetros críticos (pH, metales pesados). Asegurá la integridad del dataset para calibración precisa de modelos GIS, regresiones y predicciones de largo plazo.",
        marketingValue: "Criptografía avanzada aplicada al medio ambiente. Actuá como un notario digital ecológico: los reportes técnicos exportados cuentan con un sello de legitimidad matemática incuestionable frente a auditorías ambientales y reclamos judiciales."
      },
      {
        title: "Georreferenciación GPS Rígida",
        subtitle: "Validación Geográfica",
        technicalDetails: "Capturá coordenadas espaciales nativas en tiempo real mediante un {GPS Heartbeat} de presencia activa cada 60s. Auditá el retraso de sincronización e inyectá metadatos geográficos (EXIF) en fotos de evidencia vinculadas a la muestra.",
        scientificValue: "Asegurá precisión planimétrica de cada parámetro individual cargado. Correlacioná con exactitud los puntos de muestreo físico con imágenes satelitales y modelos digitales de elevación (DEM).",
        marketingValue: "Erradicá el fraude de la \"carga de escritorio\" certificando la presencia física del técnico en el campo. Vinculá registros fotográficos con los puntos de interés ambiental."
      }
    ]
  },
  targetAudiences: {
    tag: "Para quién es GeoSint",
    title: "Una plataforma, ",
    titleGradient: "tres formas de transformar la gestión ambiental",
    audiences: [
      {
        badge: "FOCO ACTUAL",
        title: "Consultoras Ambientales",
        desc: "Profesionalizá y blindá tu operación técnica. Tus informes salen del campo con firma criptográfica SHA-256 y trazabilidad legal, no del escritorio con planillas Excel propensas a errores.",
      },
      {
        badge: "MEDIANO PLAZO",
        title: "Industrias con Compliance Propio",
        desc: "Tu póliza de seguro ambiental y cumplimiento ESG. Demostrá debida diligencia y control continuo antes de que llegue la inspección estatal — aplicable a petróleo & gas, minería, agroindustria y manufactura.",
      },
      {
        badge: "POSICIONAMIENTO",
        title: "Organismos y Poder Judicial",
        desc: "Una fiscalía ambiental digital. Cada informe pericial incluye cadena de custodia inmutable y gemelo hidráulico que demuestra matemáticamente hacia dónde migró el contaminante.",
      },
    ],
  },
  successStories: {
    title: "GeoSint en Acción: Historias de Impacto",
    desc: "Conocé cómo consultoras líderes obtienen autonomía analítica y garantizan el cumplimiento normativo en proyectos reales.",
    metrics: {
      engineering: "Ahorro de Ingeniería Semanal",
      modules: "Módulo de Análisis",
      modulesLabel: "Visualización Autogestiva",
      compliance: "Cumplimiento B2B",
      complianceLabel: "Sustento bajo Leyes Ambientales",
    },
    testimonials: [
      {
        projectTitle: "Remediación por Derrame de Hidrocarburos",
        metric: "-90%",
        metricLabel: "Tiempo en Cuantificación de Contaminantes",
        consultora: "Consultora de Ingeniería Ambiental",
        quote: "Cuantificamos con precisión el volumen de hidrocarburos DRO en 2650 m³ de suelo afectado por un derrame en solo 2 horas. Esto representa una reducción de más del 90% en comparación con métodos tradicionales, permitiendo 'decisiones fundamentadas' inmediatas y optimizando la gestión de la remediación y el cumplimiento normativo, como la Ley Nacional N° 24.051 de Residuos Peligrosos.",
        logoText: "IA"
      }
    ]
  },
  pricing: {
    tag: "Precios",
    title: "Un plan para cada etapa de tu operación",
    subtitle: "Todos los planes son SIN limitación del número de usuarios. Precios de referencia en USD/mes.",
    unlimitedBadge: "Usuarios ILIMITADOS en todos los planes",
    ctaTrial: "Empezar trial",
    ctaSales: "Hablar con ventas",
    plans: [
      {
        name: "Starter",
        price: "$280",
        period: "/mes",
        users: "Usuarios ilimitados",
        features: [
          "Captura de campo con trazabilidad legal",
          "Protocolos de monitoreo estandarizados",
          "Motor GIS y exportación universal (GeoJSON/CSV)",
          "Sin limitación de usuarios",
          "Audit Trail básico con diffs"
        ]
      },
      {
        name: "Pro",
        badge: "MÁS ELEGIDO",
        price: "$550",
        period: "/mes",
        users: "Usuarios ilimitados",
        features: [
          "Todo lo incluido en Starter",
          "Los 37 protocolos normalizados completos",
          "Digital Twin Hidráulico sobre DEM satelital",
          "Biblioteca de cálculo forense (LSI, RAS, etc.)",
          "Motor de reglas y concomitancias en tiempo real",
          "Sin limitación de usuarios"
        ]
      },
      {
        name: "Enterprise",
        price: "$1.600",
        period: "/mes",
        users: "Usuarios ilimitados",
        features: [
          "Todo lo incluido en Pro",
          "Agente pericial de asistencia analítica (Genkit + Gemini)",
          "Grafo de Conocimiento 3D inmersivo (WebGL)",
          "Soporte prioritario y SLA garantizado",
          "Multi-tenancy con cifrado AES-256",
          "Sin limitación de usuarios"
        ]
      }
    ]
  },
  contactForm: {
    tag: "Ponete en Contacto",
    title: "Transformá tus Datos en Decisiones Fundamentadas",
    desc: "Accedé a la autonomía de análisis avanzados que tu consultora necesita para optimizar proyectos y mitigar riesgos ambientales.",
    trialHeader: "¿Qué incluye el Free Trial?",
    trialItems: [
      "Licencia de siete días sin restricciones de funcionalidad.",
      "Cantidad ILIMITADA de usuarios por empresa.",
      "Todas las planillas de monitoreo estandarizadas: Agua superficial, Agua Subterránea, Calidad de Aire, Suelos.",
      "2 Campañas; 3 Estaciones de Monitoreo; 6 Reportes (2 por Estación); 24 Planillas; 60 Fotos"
    ],
    successTitle: "¡Solicitud Enviada con Éxito!",
    successDesc: "Gracias por interesarte en GeoSint. En breve nos pondremos en contacto con vos.",
    successButton: "Enviar otro mensaje",
    labelName: "Nombre Completo",
    labelCompany: "Empresa / Consultora",
    labelEmail: "Correo Electrónico",
    labelMessage: "Mensaje / Proyecto",
    placeholderName: "Ej. Ing. Martín García",
    placeholderCompany: "Ej. Servicios Ambientales S.A.",
    placeholderEmail: "martin.garcia@empresa.com",
    placeholderMessage: "Contanos brevemente sobre tu proyecto...",
    errorName: "El nombre completo es requerido.",
    errorCompany: "El nombre de la empresa es requerido.",
    errorEmailRequired: "El correo electrónico es requerido.",
    errorEmailInvalid: "El formato de correo electrónico no es válido.",
    errorMessage: "Por favor, contanos brevemente sobre tu proyecto.",
    submitButton: "Enviar Solicitud",
    submittingButton: "Enviando...",
  },
  modules: {
    title: "Nuestras Soluciones Autogestivas para Desafíos Ambientales",
    desc: "Accedé a herramientas avanzadas para optimizar proyectos, mitigar riesgos y asegurar el cumplimiento normativo con total autonomía.",
    businessImpact: "Impacto de Negocio & Cumplimiento B2B",
    badge: "Autogestivo",
    moreInfo: "MÁS INFORMACIÓN",
    demoCta: "Solicitar Demo del Módulo",
    generalDesc: "Descripción General",
    legalFramework: "Marco Normativo y Legal",
    keyFeatures: "Funcionalidades Clave",
    impactMetric: "Métrica de Impacto:",
    mockUiHeader: "Simulación de Interfaz Autogestiva",
    mockUiDesc: "Las consultoras cargan sus datos de forma autónoma y el sistema genera la simulación instantáneamente.",
    modalQuestion: "¿Interesado en implementar este módulo?",
    close: "Cerrar",
    cards: [
      {
        id: "geomorfologico",
        title: "Módulo de Modelado Geomorfológico Predictivo",
        shortDesc: "Simulá escenarios de erosión y sedimentación con datos de batimetría y granulometría. Cuantificá impactos y fundamentá decisiones de cumplimiento con la Ley N° 25.675 (Estudios de Impacto Ambiental).",
        fullDesc: "Este módulo autogestivo procesa perfiles batimétricos y datos granulométricos de sedimentos para modelar la dinámica fluvial o costera. Permite predecir tasas de sedimentación y erosión bajo diferentes caudales y condiciones de operación, asegurando el cumplimiento robusto de la Ley General del Ambiente N° 25.675.",
        law: "Ley Nacional N° 25.675 (Ley General del Ambiente - Art. 11: Evaluación de Impacto Ambiental)",
        benefits: [
          "Simulación de erosión a 5, 10 y 25 años",
          "Integración directa de nubes de puntos batimétricos (.las, .csv)",
          "Cuantificación exacta de volumen de sedimentación",
          "Generación automática de reportes de impacto listos para presentar ante autoridades"
        ],
        metrics: "Reducción del 35% en tiempos de modelación fluvial",
        mockUI: {
          title: "MODELADOR GEOMORFOLÓGICO",
          file: "BATIMETRÍA_RÍO_PARANÁ.CSV",
          estErosion: "Erosión Estimada",
          sedimentation: "Sedimentación",
          profileView: "Vista de Perfil 2D",
          compliance: "Cumplimiento: Ley 25.675 - Nivel de Riesgo: BAJO"
        }
      },
      {
        id: "plumas",
        title: "Visor de Plumas de Contaminantes 3D",
        shortDesc: "Visualizá la dispersión de contaminantes en agua superficial y subterránea. Obtené visibilidad predictiva para la mitigación de riesgos y la optimización de la gestión ambiental.",
        fullDesc: "Herramienta avanzada de renderizado 3D en navegador que proyecta la pluma de dispersión de solutos e hidrocarburos en acuíferos o cuerpos superficiales. Permite ingresar coeficientes de dispersión, conductividad y tasas de decaimiento para estimar la evolución temporal del contaminante.",
        law: "Ley Nacional N° 25.688 (Régimen de Gestión Ambiental de Aguas)",
        benefits: [
          "Visualización interactiva 3D con isolíneas de concentración",
          "Simulación de escenarios de bombeo y remediación",
          "Predicción de llegada a pozos de abastecimiento cercanos",
          "Optimización de ubicación de frentes de monitoreo"
        ],
        metrics: "Optimiza la gestión de riesgos en proyectos hidráulicos",
        mockUI: {
          title: "VISOR DE DISPERSIÓN 3D",
          file: "SIMULACIÓN_PLUMA_BENCENO.DAT",
          estErosion: "Concentración Máxima",
          sedimentation: "Radio de Dispersión",
          profileView: "Perfil de Concentración 3D",
          compliance: "Cumplimiento: Ley 25.688 - Nivel de Alerta: MEDIO"
        }
      },
      {
        id: "acuiferos",
        title: "Evaluador de Vulnerabilidad de Acuíferos",
        shortDesc: "Calculá índices de vulnerabilidad (DRASTIC, GOD) de forma automatizada. Identificá zonas críticas y optimizá la toma de decisiones para la protección del recurso hídrico subterráneo.",
        fullDesc: "Sistema automatizado para el cálculo espacial de índices hidrogeológicos de vulnerabilidad a la contaminación. Integra profundidad del agua, recarga neta, litología del acuífero, tipo de suelo, topografía, impacto de la zona vadosa y conductividad hidráulica.",
        law: "Ley Provincial N° 12.257 (Código de Aguas de la Prov. de Buenos Aires)",
        benefits: [
          "Cálculo automatizado de índices DRASTIC y GOD",
          "Generación de mapas temáticos de zonificación de riesgo",
          "Detección de incompatibilidades de uso del suelo",
          "Exportación de capas GIS estandarizadas (GeoJSON, Shapefile)"
        ],
        metrics: "Disminuye el tiempo de confección de mapas hidrogeológicos",
        mockUI: {
          title: "ÍNDICE DE VULNERABILIDAD DRASTIC",
          file: "CAPA_HIDROGEOLOGICA_ZONA_NORTE.SHP",
          estErosion: "Índice Medio",
          sedimentation: "Área Vulnerable",
          profileView: "Zonificación de Riesgo",
          compliance: "Cumplimiento: Ley 12.257 - Estado: EVALUADO"
        }
      },
      {
        id: "hidrico",
        title: "Calculador de Balance Hídrico y Series Temporales",
        shortDesc: "Modelá recargas de acuíferos, escorrentía superficial y evapotranspiración con datos climáticos históricos y satelitales. Fundamentá solicitudes de permisos de vuelco y extracción.",
        fullDesc: "Herramienta de procesamiento de balances hídricos climáticos y dinámicos a escala de cuenca o predio. Cruza precipitaciones, evapotranspiración potencial (Thornthwaite, Penman-Monteith) y caudales para predecir déficits o excesos hídricos estacionarios.",
        law: "Resolución ADA N° 333/17 (Normas de Vertido y Explotación del Recurso Hídrico)",
        benefits: [
          "Integración de datos meteorológicos satelitales automáticos",
          "Proyecciones estacionales de oferta hídrica",
          "Cálculo automático de reservas de almacenamiento en suelo",
          "Informes ejecutivos aptos para presentación ante la Autoridad del Agua (ADA)"
        ],
        metrics: "Acelera los cálculos hidrológicos tradicionales",
        mockUI: {
          title: "BALANCE HÍDRICO SERIE 2015-2025",
          file: "ESTACION_METEO_DATOS.CSV",
          estErosion: "Recarga Neta Estimada",
          sedimentation: "Déficit Estival",
          profileView: "Curva de Variación Estacional",
          compliance: "Cumplimiento: Res. ADA 333/17 - Estado: CONFORME"
        }
      },
      {
        id: "confinamiento",
        title: "Evaluador de Aptitud y Aislación Hidráulica de Recintos de Confinamiento",
        shortDesc: "Simulá el comportamiento geotécnico e hidrogeológico de rellenos de seguridad, diques de colas y piletas de evaporación. Verificá la estanqueidad y el cumplimiento con normativas de residuos peligrosos.",
        fullDesc: "Módulo integral de evaluación de integridad y permeabilidad de barreras geológicas y liners sintéticos en recintos de confinamiento de residuos peligrosos o efluentes industriales. Analiza espesor de arcillas, coeficientes de permeabilidad (k), gradientes hidráulicos y riesgos de rotura por presión hidrostática o sobrecarga.",
        law: "Ley Nacional N° 24.051 (Residuos Peligrosos - Cap. IV: De las Plantas de Tratamiento y Disposición Final)",
        benefits: [
          "Verificación automática de espesor equivalente de barrera geológica según Ley 24.051",
          "Modelado de transporte advectivo-dispersivo a través de barreras multicapa",
          "Cálculo del factor de seguridad geotécnico de taludes de contención",
          "Alertas tempranas de gradiente hidráulico crítico y riesgo de subpresión"
        ],
        metrics: "Mitiga riesgos de filtración en depósitos de residuos",
        mockUI: {
          title: "INTEGRIDAD DE RECINTO DE CONFINAMIENTO",
          file: "MONITOREO_CELDA_SEGURIDAD_4.JSON",
          estErosion: "Permeabilidad Media (k)",
          sedimentation: "Gradiente Hidráulico",
          profileView: "Corte Estratigráfico y Barrera",
          compliance: "Cumplimiento: Ley 24.051 Dec. 831/93 - Estado: APTO"
        }
      },
      {
        id: "montecarlo",
        title: "Evaluador de Riesgo Probabilístico de Vuelco",
        shortDesc: "Simulá escenarios de dilución de contaminantes en cuerpos receptores mediante Monte Carlo (10.000 iteraciones). Determiná la probabilidad de excedencia normativa antes de realizar el vuelco.",
        fullDesc: "Herramienta avanzada de simulación estocástica que modela la interacción entre efluentes vertidos y la hidrodinámica del cuerpo receptor. Al considerar la variabilidad natural del caudal y las fluctuaciones en la concentración del contaminante, el módulo estima con precisión matemática la probabilidad de exceder los límites legales.",
        law: "Resolución ADA N° 333/17 (Normas de Vertido)",
        benefits: [
          "10.000 iteraciones automáticas por simulación",
          "Distribución de probabilidad de concentración aguas abajo",
          "Detección de condiciones hidrológicas críticas de falla",
          "Reporte cuantitativo descargable para sustentar descargos y presentaciones"
        ],
        metrics: "Optimiza la certidumbre en planes de contingencia ambiental",
        mockUI: {
          title: "SIMULADOR MONTE CARLO DE DILUCIÓN",
          file: "VUELCO_PARAMETROS_CAUDAL.CSV",
          estErosion: "Concentración Mediana",
          sedimentation: "Probabilidad de Excedencia",
          profileView: "Distribución de Probabilidad",
          compliance: "Cumplimiento: Res. ADA 333/17 - Riesgo: MODERADO",
          monteCarlo: "Simulación Monte Carlo: Completada (10k iteraciones)",
          pdfReport: "Reporte de Impacto PDF: Generado",
          downloadCta: "Descargar Reporte (.pdf)"
        }
      }
    ],
    features: {
      liabilities: "Reduce pasivos ambientales",
      risks: "Optimiza gestión de riesgos",
      compliance: "Cumplimiento normativo",
      costs: "Ahorra costos operativos",
      visibility: "Visibilidad predictiva integral"
    }
  },
  footer: {
    brandDesc: "GeoSint provee DIM Data Bus: análisis ambiental autogestivo para consultoras. Del campo al informe pericial, sin margen de error.",
    navigationTitle: "Plataforma",
    legalTitle: "Sustento Legal",
    contactTitle: "Contacto",
    contactEmail: "contacto@geosint.com.ar",
    contactPhone: "+54 221 3183040",
    contactLocation: "La Plata, Argentina",
    laws: [
      "Ley Nacional N° 24.051 de Residuos Peligrosos",
      "Ley Nacional N° 25.675 Ley General del Ambiente",
      "Ley Nacional N° 25.688 Régimen de Gestión Ambiental de Aguas",
      "Ley Provincial N° 12.257 Código de Aguas PBA",
      "Resoluciones ADA y ACUMAR · Estándares ESG"
    ],
    privacyLink: "Política de Privacidad",
    termsLink: "Términos de Servicio",
    copyright: "GeoSint © {year}. Todos los derechos reservados.",
    slogan: "Decisiones Fundamentadas en Inteligencia Ambiental.",
    privacyModal: {
      title: "POLÍTICA DE PRIVACIDAD Y TRATAMIENTO DE DATOS – GEOSINT",
      sections: [
        {
          title: "1. MARCO LEGAL Y CONSENTIMIENTO INFORMADO",
          paragraphs: [
            "El presente documento establece las políticas de tratamiento de la información y protección de datos de la plataforma GeoSint (en adelante, \"el Sistema\"), en estricto cumplimiento de la Ley de Protección de Datos Personales N° 25.326, su Decreto Reglamentario N° 1558/2001 y las normativas emitidas por la Agencia de Acceso a la Información Pública de la República Argentina.",
            "El registro, acceso o utilización del Sistema implica el consentimiento libre, expreso e informado del Usuario para la recolección, almacenamiento y tratamiento de sus datos conforme a los términos aquí estipulados."
          ]
        },
        {
          title: "2. NATURALEZA DE LOS DATOS RECOLECTADOS",
          paragraphs: [
            "El Sistema almacena dos categorías de información:",
            "• Datos de Registro y Autenticación: Nombre, apellido, dirección de correo electrónico e identificadores de sesión.",
            "• Datos Operativos de Terceros: Información técnico-ambiental subida por el Usuario en el marco de su actividad profesional (coordenadas geográficas, reportes de campo, mediciones de analitos, material fotográfico). El Usuario declara poseer los derechos o autorizaciones pertinentes sobre la información ambiental cargada, eximiendo a GeoSint de cualquier responsabilidad derivada de su origen."
          ]
        },
        {
          title: "3. INFRAESTRUCTURA DE ALMACENAMIENTO Y MULTITENANCY",
          paragraphs: [
            "La base de datos se encuentra alojada en servidores en la nube provistos por Google Cloud (Firebase Auth, Firestore, Cloud Storage).",
            "GeoSint garantiza una arquitectura de aislamiento de datos (Multitenancy). La información operativa es estrictamente confidencial y se encuentra segmentada criptográficamente por inquilino (Empresa/Tenant). GeoSint no explota, cede, comercializa ni transfiere bajo ningún concepto la información de sus Usuarios a terceros."
          ]
        },
        {
          title: "4. POLÍTICA ESTRICTA DE RETENCIÓN Y SUPRESIÓN DE DATOS",
          paragraphs: [
            "El tratamiento de los datos operativos se encuentra sujeto al estado de la suscripción del Usuario o Empresa:",
            "• Período de Gracia: Ante la finalización del período de prueba (Trial) o la suspensión del servicio, el Usuario dispondrá de un plazo improrregable de catorce (14) días corridos (hasta el día 21 desde el inicio del período de prueba o fecha de corte) para exportar una copia de seguridad íntegra de sus datos operativos. Durante este período, el acceso operativo al Sistema permanecerá bloqueado.",
            "• Purga Definitiva: Cumplido el plazo estipulado en el punto anterior sin que medie reactivación de la suscripción, el Sistema ejecutará la supresión automática, definitiva e irrecuperable de los datos operativos (estaciones, reportes, planillas y fotografías). GeoSint no será responsable por la pérdida de información que no haya sido exportada por el Usuario en tiempo y forma.",
            "A los fines de facilitar la eventual reactivación de la cuenta, GeoSint conservará únicamente el perfil de identificación del Usuario y de la Empresa matriz, previa seudonimización de datos cuando correspondiere."
          ]
        },
        {
          title: "5. EJERCICIO DE LOS DERECHOS ARCO Y ÓRGANO DE CONTROL",
          paragraphs: [
            "El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto (Art. 14, inc. 3 de la Ley N° 25.326).",
            "Para ejercer los derechos de acceso, rectificación, actualización o supresión, el titular deberá enviar una solicitud formal al correo electrónico: contacto@geosint.com.ar.",
            "Se deja constancia expresa de que la AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, Órgano de Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales."
          ]
        }
      ]
    },
    termsModal: {
      title: "TÉRMINOS Y CONDICIONES DE USO – GEOSINT",
      sections: [
        {
          title: "1. ACEPTACIÓN DE LOS TÉRMINOS",
          paragraphs: [
            "El presente documento establece los Términos y Condiciones (en adelante, los \"Términos\") que rigen el acceso y uso de la plataforma de software como servicio (SaaS) Dim Data Bus, operada bajo la marca GeoSint (en adelante, \"el Sistema\"). El acceso, registro o utilización del Sistema por parte de cualquier persona humana o jurídica (en adelante, el \"Usuario\" o \"Empresa\") implica la aceptación plena, expresa y sin reservas de los presentes Términos. Si no está de acuerdo con estos Términos, deberá abstenerse de utilizar el Sistema."
          ]
        },
        {
          title: "2. OBJETO DEL SERVICIO",
          paragraphs: [
            "GeoSint provee una plataforma en la nube diseñada para la carga, gestión, estructuración y análisis de datos geoespaciales y ambientales en tiempo real. El Sistema opera como una herramienta de facilitación técnica e infraestructura, no constituyendo en ningún caso un servicio de consultoría ambiental, geológica o de ingeniería por parte de GeoSint."
          ]
        },
        {
          title: "3. LICENCIAS, PERÍODO DE PRUEBA (TRIAL) Y CUOTAS",
          paragraphs: [
            "El acceso al Sistema se rige mediante un esquema de suscripción.",
            "• 3.1. Período de Prueba: GeoSint podrá otorgar un período de prueba gratuito (\"Trial\") de siete (7) días corridos. Durante este período, el uso del Sistema estará sujeto a cuotas y límites estrictos de almacenamiento y transferencia de datos (límites de estaciones, reportes, planillas y material fotográfico), los cuales son informados en la interfaz del Sistema. GeoSint se reserva el derecho de modificar estos límites o cancelar el período de prueba en cualquier momento y sin previo aviso."
          ]
        },
        {
          title: "4. POLÍTICA DE RETENCIÓN, SUSPENSIÓN Y PODA DE DATOS",
          paragraphs: [
            "• 4.1. Período de Gracia: Finalizado el período de prueba o ante la falta de pago de la suscripción, la cuenta del Usuario pasará a estado de Suspensión. A partir de ese momento, el Usuario dispondrá de un plazo improrregable de catorce (14) días corridos para exportar sus datos operativos mediante las herramientas de copia de seguridad (.zip) provistas en el Sistema. Durante este período, las funcionalidades de carga y análisis permanecerán bloqueadas.",
            "• 4.2. Purga Definitiva: Transcurrido el día veintiuno (21) desde el inicio del período de prueba o desde el vencimiento de la suscripción sin que medie renovación, GeoSint ejecutará la eliminación automática, definitiva e irrecuperable de toda la información operativa del Usuario (bases de datos de campo, reportes, anexos y fotografías). El Usuario exonera a GeoSint de cualquier responsabilidad por la pérdida de datos derivada de la aplicación de esta cláusula."
          ]
        },
        {
          title: "5. PROPIEDAD DE LOS DATOS Y LIMITACIÓN DE RESPONSABILIDAD",
          paragraphs: [
            "• 5.1. Datos del Usuario: Toda la información técnica, ambiental y espacial cargada en el Sistema es de exclusiva propiedad de la Empresa/Usuario. GeoSint no adquiere ningún derecho de propiedad sobre dichos datos.",
            "• 5.2. Exactitud y Uso de la Información: El Usuario es el único y exclusivo responsable por la exactitud, veracidad, calidad y legalidad de los datos cargados en el Sistema. GeoSint no audita, valida ni corrobora la información técnica o ambiental.",
            "• 5.3. Exención de Responsabilidad: GeoSint se exime de toda responsabilidad por daños directos, indirectos, lucro cesante, pérdida de chance o cualquier otro perjuicio que pudiera sufrir el Usuario o terceros (incluyendo organismos de control del Estado) como consecuencia del uso de la información procesada en el Sistema, la toma de decisiones basadas en los reportes generados, o la impericia en la carga de datos por parte de los técnicos del Usuario."
          ]
        },
        {
          title: "6. DISPONIBILIDAD DEL SERVICIO (SLA) Y FUERZA MAYOR",
          paragraphs: [
            "El Sistema se proporciona \"tal cual es\" (as is) y \"según disponibilidad\". GeoSint utiliza infraestructura de terceros (Google Cloud Platform / Firebase) y no garantiza que el servicio sea ininterrumpido o libre de errores operacionales. GeoSint no será responsable por caídas del sistema, pérdida temporal de acceso o demoras en la transmisión de datos causadas por fallas en la conectividad a Internet, mantenimiento programado o eventos de fuerza mayor."
          ]
        },
        {
          title: "7. PROPIEDAD INTELECTUAL",
          paragraphs: [
            "El código fuente, diseño, bases de datos subyacentes, algoritmos de enrutamiento, marcas, logotipos y todo el material que compone la arquitectura del Sistema GeoSint son de propiedad exclusiva de sus desarrolladores y están protegidos por las leyes de propiedad intelectual de la República Argentina y tratados internacionales. Queda terminantemente prohibida su reproducción, ingeniería inversa, descompilación o modificación total o parcial."
          ]
        },
        {
          title: "8. JURISDICCIÓN Y LEY APLICABLE",
          paragraphs: [
            "Los presentes Términos se rigen por las leyes de la República Argentina. Para cualquier controversia derivada de la interpretación o ejecución de los mismos, las partes se someten a la jurisdicción de los Tribunales Ordinarios competentes de la ciudad de La Plata, Provincia de Buenos Aires, renunciando expresamente a cualquier otro fuero o jurisdicción que pudiera corresponder."
          ]
        }
      ]
    }
  }
};
