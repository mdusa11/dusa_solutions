// src/data/portfolio.js

// Cargamos TODO lo que haya en /src/img y obtenemos su URL
const IMAGES = import.meta.glob("../img/*", { eager: true, import: "default" });

// helper: busca la primera imagen cuyo path contenga un fragmento
const pick = (fragment) => {
    const item = Object.entries(IMAGES).find(([p]) =>
        p.toLowerCase().includes(fragment.toLowerCase())
    );
    return item?.[1] || "";
};

/**
 * PORTFOLIO
 * Ajusta métricas, textos y links a tu gusto.
 * Las imágenes se resuelven por fragmento del nombre:
 * "principal", "gpcx", "formulario", "routes"
 */
// src/data/portfolio.js
// ... (dejas igual el import.meta.glob y el helper pick)

export const PORTFOLIO = [
    // SenseiMeds — Landing
    {
        id: "senseimeds-landing",
        title: "SenseiMeds — Landing",
        industry: "Salud",
        year: 2025,
        type: ["Web"],
        stack: ["React", "Tailwind", "Vercel"],
        cover: pick("principal"),
        alt: "Landing de SenseiMeds en desktop",
        metrics: [
            { label: "↑ leads", value: "32%" },
            { label: "LCP", value: "1.3s" },
        ],
        liveUrl: "https://senseimeds.com/",              // ← AQUI
        gallery: [pick("principal"), pick("gpcx")].filter(Boolean),
        goal: "Incrementar captación de leads orgánicos del negocio.",
        solution: "Arquitectura ligera con React + Tailwind, copy orientado a valor y formularios con tracking de eventos.",
        results: "Leads +32% en 6 semanas. SEO on-page básico. Perf 98 (Lighthouse).",
        focus: "center 35%",
    },

    // SenseiMeds — Descargas
    {
        id: "senseimeds-formularios",
        title: "SenseiMeds — Descargas",
        industry: "Salud",
        year: 2025,
        type: ["Web"],
        stack: ["React", "Tailwind"],
        cover: pick("formulario"),
        alt: "Página de descargas de manuales médicos",
        metrics: [
            { label: "↑ CTR", value: "18%" },
            { label: "TTFB", value: "120ms" },
        ],
        liveUrl: "https://descargas.senseimeds.com/",    // ← AQUI
        gallery: [pick("formulario"), pick("principal")].filter(Boolean),
        goal: "Facilitar la descarga de manuales y materiales.",
        solution: "Listado con búsqueda y categorías; layout responsive; medición de clics por material.",
        results: "↑18% CTR en descargas; tiempos estables en 4G; interfaz clara para no técnicos.",
        focus: "center",
    },

    {
        id: "routes-app",
        title: "Routes — App de Rutas",
        industry: "Transporte",
        year: 2024,
        type: ["Mobile"],
        stack: ["Flutter", "Maps"],
        cover: pick("routes"),
        alt: "Pantallas de app de rutas y tracking",
        metrics: [
            { label: "Tracking", value: "Realtime" },
            { label: "Crashes", value: "0.00%" },
        ],
        liveUrl: "",
        gallery: [pick("routes")].filter(Boolean),
        goal: "Optimizar recorridos y tiempos de llegada.",
        solution:
            "App Flutter con geolocalización, rutas y tracking en tiempo real; UI clara para conductores.",
        results:
            "Mejoras medibles en tiempos y menos incidencias en trayectos repetitivos.",
        focus: "center",
    },
    {
        id: "senseimeds-gpcx",
        title: "Biblioteca ENARM — App móvil",
        industry: "Salud",
        year: 2025,
        type: ["Mobile"],
        stack: ["Flutter"],
        cover: pick("gpcx"),
        alt: "Biblioteca ENARM en móvil",
        metrics: [
            { label: "UX", value: "Simplificada" },
            { label: "Soporte", value: "Post-release" },
        ],
        liveUrl: "",
        gallery: [pick("gpcx"), pick("formulario")].filter(Boolean),
        goal: "Unificar recursos clínicos en una interfaz usable (móvil).",
        solution:
            "Componentes reutilizables, navegación por secciones y búsquedas con acceso rápido.",
        results:
            "Menos fricción para usuarios frecuentes; soporte y ajustes incluidos tras el lanzamiento.",
        // Como es vertical, mueve el encuadre un poco hacia arriba para que no se corte el título
        focus: "center 30%",
    },
];

