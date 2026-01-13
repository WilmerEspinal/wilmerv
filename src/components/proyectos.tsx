import { motion } from "framer-motion";
import OptimizedImage from "./OptimizedImage";


type ProyectosProps = {
  title: string;
  info: string;
  img: string;
  hastag: string[];
  link?: string;
  isDeveloping?: boolean;
};

export const misProyectos: ProyectosProps[] = [
  {
    title: "1. Sistema Web Colegio Crayons",
    info: "Diseñé y desarrollé una solución Full Stack (Node.js, React, MySQL, Flutter, IA) para garantizar una disponibilidad del 99.8% en un entorno de alta concurrencia. Optimicé la gestión académica reduciendo en un 60% la necesidad de interacción presencial y automaticé el proceso de matrícula con IA (modelos de Gemini) y validación RENIEC, reduciendo el tiempo de ingreso de datos en un 90%.",
    img: "https://res.cloudinary.com/dszdc6rh8/image/upload/f_auto,q_auto,w_1200,c_scale/v1742397631/crayons-home_dzxnhf.png",
    hastag: ["#Node.js", "#React", "#MySQL", "#Flutter", "#IA"],
    link: "https://colegiocrayons.com", // Puedes cambiar este link si es otro
    isDeveloping: true,
  },
  {
    title: "2. Preservación Lengua Asháninka",
    info: "Plataforma educativa interactiva ganadora del Primer Lugar en innovación tecnológica. Desarrollada con React, cuenta con un sistema dinámico de reproducción para más de 70 recursos auditivos. La arquitectura modular redujo los tiempos de carga en un 40%, optimizando la enseñanza cultural mediante módulos lógicos y escalables.",
    img: "https://res.cloudinary.com/dszdc6rh8/image/upload/f_auto,q_auto,w_1200,c_scale/v1742397628/idioma-ashaninka_hwgle5.png",
    hastag: ["#REACT", "#REACT ROUTER", "#UX/UI"],
    link: "https://aprende-ashaninka.pages.dev/",
  },
  {
    title: "3. Sistema de Gestión Comercial (ERP/POS)",
    info: "Plataforma integral desarrollada con Laravel 11 y React que unifica ventas, inventario y facturación. Implementé un módulo de ventas transaccional ACID, integración de API de identidad para registros rápidos y facturación automatizada en PDF (DomPDF). Optimicé el rendimiento logrando respuestas menores a 1.5s mediante Vite y paginación eficiente.",
    img: "https://res.cloudinary.com/dszdc6rh8/image/upload/f_auto,q_auto,w_1200,c_scale/v1742397625/todo-app_vo5afx.png",
    hastag: ["#LARAVEL 11", "#REACT", "#TYPESCRIPT", "#MYSQL"],
    link: "https://github.com/WilmerEspinal", // Link de ejemplo/repositorio
  }
];

export default function Proyectos({
  title,
  info,
  img,
  hastag,
  link,
  isDeveloping,
}: ProyectosProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.01 }}
      className="flex flex-col md:flex-row gap-6 md:gap-12 items-center"
    >
      {/* Información del Proyecto */}
      <div className="w-full md:w-[45%] order-1 md:order-1">
        <h2 className="text-[#f0f5f9] text-xl md:text-[32px] font-satoshi leading-tight font-extrabold mb-3 md:mb-4">
          {title}
        </h2>
        <p className="text-[#f0f5f9]/80 text-sm md:text-[16px] font-satoshi mb-5 md:mb-6 leading-relaxed max-w-xl">
          {info}
        </p>
        <div className="flex flex-col gap-5">
          {link && !isDeveloping && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit flex items-center gap-2 text-[#f0f5f9] hover:text-[#596e79] transition-colors font-bold text-base group"
            >
              Visitar Proyecto
              <i className="fa-solid fa-arrow-up-right-from-square text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
            </a>
          )}
          <div className="flex gap-2 flex-wrap">
            {hastag.map((tag: string, index: number) => (
              <span
                className="px-2.5 py-1 bg-white/10 backdrop-blur-sm rounded text-[11px] md:text-[12px] text-[#f0f5f9] font-medium border border-white/5"
                key={index}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Imagen del Proyecto */}
      <div className="w-full md:w-[55%] h-[200px] md:h-[300px] bg-white/5 backdrop-blur-sm p-2 md:p-3 flex justify-center items-center rounded-2xl md:rounded-2xl order-2 md:order-2 relative overflow-hidden border border-white/10 group">
        {isDeveloping && (
          <div className="absolute top-3 right-3 z-10 bg-black/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold border border-white/10 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></span>
            EN DESARROLLO
          </div>
        )}
        <div className="w-full h-full overflow-hidden rounded-xl md:rounded-xl">
          <OptimizedImage
            src={img}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 55vw"
          />
        </div>
      </div>
    </motion.div>
  );
}