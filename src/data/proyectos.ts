export type ProyectoData = {
    title: string;
    info: string;
    hastag: string[];
    link?: string;
    isDeveloping?: boolean;
};

export const misProyectos: ProyectoData[] = [
    {
        title: "Sistema Web Colegio Crayons",
        info: "Solución Full Stack (Node.js, React, MySQL, Flutter, IA) con disponibilidad del 99.8% en entorno de alta concurrencia. Automaticé el proceso de matrícula con IA (Gemini) y validación RENIEC, reduciendo el tiempo de ingreso en un 90%.",
        hastag: ["Node.js", "React", "MySQL", "Flutter", "N8N", "IA"],
        link: "https://colegiocrayons.com",
        // isDeveloping: true,
    },
    {
        title: "Preservación Lengua Asháninka",
        info: "Plataforma educativa ganadora del Primer Lugar en innovación tecnológica. Sistema dinámico de reproducción para más de 70 recursos auditivos. Arquitectura modular que redujo los tiempos de carga en un 40%.",
        hastag: ["React", "React Router", "UX/UI"],
        link: "https://aprende-ashaninka.pages.dev/",
    },
    {
        title: "Sistema de Gestión Comercial — ERP/POS",
        info: "Plataforma integral (Laravel 11 + React) que unifica ventas, inventario y facturación. Módulo de ventas transaccional ACID, integración de API de identidad y facturación PDF automatizada. Respuestas menores a 1.5s.",
        hastag: ["Laravel 11", "React", "TypeScript", "MySQL"],
        link: "https://github.com/WilmerEspinal",
    },
];
